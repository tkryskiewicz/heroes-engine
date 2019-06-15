import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { getArmySize, Hero, Resources, Structure, Town, TroopSelection, TroopSelectionType } from "heroes-core";
import {
  Crest,
  getArmyStripStatusTextMessage,
  getCreatureNameMessage,
  getStructureNameMessage,
  HeroPortrait,
  kingdomOverviewWindowMessages,
  recruitTroopWindowMessages,
  TownView,
  TownWindow,
  townWindowMessages,
  Treasury,
  WithGameWindowProps,
} from "heroes-homm1-react";

import { HeroWindow } from "../HeroWindow";
import { TroopSlot } from "../TroopSlot";
import { TroopWindow } from "../TroopWindow";

interface TownWindowContainerProps extends InjectedIntlProps, WithGameWindowProps {
  readonly town: Town;
  readonly alignment: string;
  readonly visitingHero?: Hero;
  readonly resources: Resources;

  readonly onCrestClick: () => void;

  readonly visibleStructureDetails?: string;
  readonly getStructureDetails: (
    structure: Structure, town: string, visitingHero: Hero | undefined, resources: Resources, props: {
      readonly onCloseClick: () => void;
    }) => React.ReactNode;
  readonly onOpenStructureDetailsClick: (structure: string) => void;
  readonly onCloseStructureDetailsClick: () => void;

  readonly selectedTroop?: TroopSelection;
  readonly onSelectTroop: (troop: TroopSelection) => void;
  readonly onSwapTroops: (troop: TroopSelection, withTroop: TroopSelection) => void;

  readonly troopDetailsVisible: boolean;
  readonly onOpenTroopDetailsClick: () => void;
  readonly onCloseTroopDetailsClick: () => void;
  readonly onConfirmDismissTroopClick: (troop: TroopSelection) => void;

  readonly visitingHeroDetailsVisible: boolean;
  readonly onOpenVisitingHeroDetailsClick: () => void;
  readonly onCloseVisitingHeroDetailsClick: () => void;

  readonly onExitClick: () => void;
}

type DefaultProp =
  "onExitClick";

interface TownWindowContainerState {
  readonly statusText: string;
}

class TownWindowContainer extends React.Component<TownWindowContainerProps, TownWindowContainerState> {
  public static readonly defaultProps: Pick<TownWindowContainerProps, DefaultProp> = {
    onExitClick: () => undefined,
  };

  public readonly state: TownWindowContainerState = {
    statusText: "",
  };

  public render() {
    const { town, selectedTroop, troopDetailsVisible, visibleStructureDetails } = this.props;

    return (
      <>
        <TownWindow
          visible={this.props.visible}
          townName={town.name}
          renderTownView={this.renderTownView}
          renderCrest={this.renderCrest}
          renderGarrisonTroop={this.renderGarrisonTroop}
          renderHeroPortrait={this.renderHeroPortrait}
          renderHeroTroop={this.renderHeroTroop}
          renderTreasury={this.renderTreasury}
          statusText={this.state.statusText}
        />
        {selectedTroop && troopDetailsVisible && this.renderTroopDetails(selectedTroop)}
        {visibleStructureDetails && this.renderStructureDetails(town, visibleStructureDetails)}
      </>
    );
  }

  private readonly renderTownView = () => {
    const { town } = this.props;

    return (
      <TownView
        town={town}
        onStructureMouseEnter={this.onStructureMouseEnter}
        onStructureMouseLeave={this.onStructureMouseLeave}
        onStructureClick={this.onStructureClick}
      />
    );
  }

  private readonly onStructureMouseEnter = (structure: string) => {
    const { formatMessage } = this.props.intl;

    const struc = this.props.town.structures.find((s) => s.id === structure)!;

    let statusText = formatMessage(getStructureNameMessage(struc.id, struc.isBuilt));

    if (struc.dwelling) {
      const creatureName = formatMessage(getCreatureNameMessage(struc.dwelling.creature));

      statusText = formatMessage(recruitTroopWindowMessages.title, { creature: creatureName });
    }

    this.setStatusText(statusText);
  }

  private readonly onStructureMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onStructureClick = (structure: string) => {
    this.props.onOpenStructureDetailsClick(structure);
  }

  private renderStructureDetails(town: Town, structure: string) {
    const { visitingHero, resources } = this.props;

    const struc = town.structures.find((s) => s.id === structure)!;

    // TODO: optimize and handle case with result missing
    const structureDetails = this.props.getStructureDetails(struc, town.id, visitingHero, resources, {
      onCloseClick: this.onCloseStructureDetailsClick,
    });

    return structureDetails;
  }

  private readonly onCloseStructureDetailsClick = () => {
    this.props.onCloseStructureDetailsClick();
  }

  private readonly renderCrest = () => {
    return (
      <Crest
        alignment={this.props.alignment}
        heroClass={this.props.visitingHero ? this.props.visitingHero.heroClass : undefined}
        onMouseEnter={this.onCrestMouseEnter}
        onMouseLeave={this.onCrestMouseLeave}
        onClick={this.props.onCrestClick}
      />
    );
  }

  private readonly onCrestMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(kingdomOverviewWindowMessages.title);

    this.setStatusText(statusText);
  }

  private readonly onCrestMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly renderGarrisonTroop = (index: number) => {
    const { town, selectedTroop } = this.props;

    const troop = town.army[index];

    return (
      <TroopSlot
        index={index}
        troop={troop}
        selected={selectedTroop && selectedTroop.type === TroopSelectionType.Garrison && selectedTroop.index === index}
        onMouseEnter={this.onGarrisonTroopMouseEnter}
        onMouseLeave={this.onTroopMouseLeave}
        onClick={this.onGarrisonTroopClick}
      />
    );
  }

  private readonly onGarrisonTroopMouseEnter = (index: number) => {
    this.onTroopMouseEnter({ type: TroopSelectionType.Garrison, id: this.props.town.id, index });
  }

  private readonly onGarrisonTroopClick = (index: number) => {
    this.onTroopClick({ type: TroopSelectionType.Garrison, id: this.props.town.id, index });
  }

  private readonly renderHeroPortrait = () => {
    const { visitingHero, visitingHeroDetailsVisible } = this.props;

    return (
      <>
        <HeroPortrait
          hero={visitingHero ? visitingHero.heroId : undefined}
          onMouseEnter={this.onHeroPortraitMouseEnter}
          onMouseLeave={this.onHeroPortraitMouseLeave}
          onClick={this.props.onOpenVisitingHeroDetailsClick}
        />
        {visitingHero && visitingHeroDetailsVisible && this.renderVisitingHeroDetails(visitingHero)}
      </>
    );
  }

  private readonly onHeroPortraitMouseEnter = () => {
    if (!this.props.visitingHero) {
      return;
    }

    const statusText = this.props.intl.formatMessage(townWindowMessages.viewHero);

    this.setStatusText(statusText);
  }

  private readonly onHeroPortraitMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly renderVisitingHeroDetails = (hero: Hero) => {
    return (
      <HeroWindow
        visible={true}
        hero={hero}
        dismissible={false}
        onExitClick={this.props.onCloseVisitingHeroDetailsClick}
      />
    );
  }

  private readonly renderHeroTroop = (index: number) => {
    const { visitingHero, selectedTroop } = this.props;

    const troop = visitingHero ?
      visitingHero.army[index] :
      undefined;

    return (
      <TroopSlot
        index={index}
        troop={troop}
        selected={selectedTroop && selectedTroop.type === TroopSelectionType.Hero && selectedTroop.index === index}
        onMouseEnter={this.onHeroTroopMouseEnter}
        onMouseLeave={this.onTroopMouseLeave}
        onClick={this.onHeroTroopClick}
      />
    );
  }

  private readonly onHeroTroopMouseEnter = (index: number) => {
    const { visitingHero } = this.props;

    if (!visitingHero) {
      return;
    }

    this.onTroopMouseEnter({ type: TroopSelectionType.Hero, id: visitingHero.id, index });
  }

  private readonly onHeroTroopClick = (index: number) => {
    const { visitingHero } = this.props;

    if (!visitingHero) {
      return;
    }

    this.onTroopClick({ type: TroopSelectionType.Hero, id: visitingHero.id, index });
  }

  private getTroop(troop: TroopSelection) {
    return troop.type === TroopSelectionType.Hero && this.props.visitingHero ?
      this.props.visitingHero.army[troop.index] :
      this.props.town.army[troop.index];
  }

  private isLastTroop(selection: TroopSelection) {
    const { town, visitingHero, selectedTroop } = this.props;

    // FIXME: possible to move last troop when supposed to exchange, but a combine happens
    return visitingHero !== undefined &&
      selectedTroop !== undefined &&
      selectedTroop.type === TroopSelectionType.Hero &&
      selection.type === TroopSelectionType.Garrison &&
      // FIXME: find better way to detect last troop
      (town.army[selection.index] === undefined ||
        town.army[selection.index]!.creature === visitingHero.army[selectedTroop.index]!.creature) &&
      getArmySize(visitingHero.army) === 1;
  }

  private readonly onTroopMouseEnter = (selection: TroopSelection) => {
    const { selectedTroop: st } = this.props;
    const { formatMessage } = this.props.intl;

    const selectedTroop = st !== undefined ?
      this.getTroop(st) :
      undefined;
    const troop = this.getTroop(selection);

    const selectedTroopName = selectedTroop && formatMessage(getCreatureNameMessage(selectedTroop.creature));
    const troopName = troop && formatMessage(getCreatureNameMessage(troop.creature));

    const lastTroop = this.isLastTroop(selection);

    const statusText = formatMessage(getArmyStripStatusTextMessage(selectedTroop, troop, lastTroop), {
      selectedTroopName,
      troopName,
    });

    this.setStatusText(statusText);
  }

  private readonly onTroopMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onTroopClick = (troop: TroopSelection) => {
    const { selectedTroop } = this.props;

    if (this.isLastTroop(troop)) {
      return;
    }

    if (selectedTroop === undefined && this.getTroop(troop)) {
      this.onSelectTroop(troop);
    } else if (selectedTroop && troop.type === selectedTroop.type && troop.index === selectedTroop.index) {
      this.props.onOpenTroopDetailsClick();
    } else if (selectedTroop && (troop.index !== selectedTroop.index || troop.type !== selectedTroop.type)) {
      this.onSwapTroops(troop);
    }
  }

  private readonly onSelectTroop = (t: TroopSelection) => {
    const { formatMessage } = this.props.intl;

    const troop = this.getTroop(t)!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(troop, troop, false), { troopName });

    this.setStatusText(statusText);

    this.props.onSelectTroop(t);
  }

  private readonly onSwapTroops = (t: TroopSelection) => {
    const { selectedTroop } = this.props;
    const { formatMessage } = this.props.intl;

    const troop = this.getTroop(selectedTroop!)!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(undefined, troop, false), { troopName });

    this.setStatusText(statusText);

    this.props.onSwapTroops(selectedTroop!, t);
  }

  private renderTroopDetails(troop: TroopSelection) {
    const { visitingHero } = this.props;

    const t = this.getTroop(troop)!;

    const dismissible = troop.type === TroopSelectionType.Garrison ||
      (visitingHero !== undefined && getArmySize(visitingHero.army) > 1);

    return (
      <TroopWindow
        visible={true}
        index={troop.index}
        creature={t.creature}
        count={t.count}
        dismissible={dismissible}
        onConfirmDismissClick={this.onConfirmDismissTroopClick}
        onExitClick={this.props.onCloseTroopDetailsClick}
      />
    );
  }

  private readonly onConfirmDismissTroopClick = () => {
    if (!this.props.selectedTroop) {
      return;
    }

    this.props.onConfirmDismissTroopClick(this.props.selectedTroop);
  }

  private readonly renderTreasury = () => {
    return (
      <Treasury
        resources={this.props.resources}
        onExitMouseEnter={this.onExitMouseEnter}
        onExitMouseLeave={this.onExitMouseLeave}
        onExitClick={this.props.onExitClick}
      />
    );
  }

  private readonly onExitMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(townWindowMessages.exit);

    this.setStatusText(statusText);
  }

  private readonly onExitMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private setStatusText(statusText: string) {
    this.setState({
      statusText,
    });
  }

  private setDefaultStatusText() {
    const statusText = this.props.intl.formatMessage(townWindowMessages.defaultStatusText);

    this.setStatusText(statusText);
  }
}

const ContainerWrapped = injectIntl(TownWindowContainer);

type ContainerWrappedProps = ExtractProps<typeof ContainerWrapped>;

export {
  ContainerWrapped as TownWindowContainer,
  ContainerWrappedProps as TownWindowContainerProps,
};
