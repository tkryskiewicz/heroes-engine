import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Hero, Resources, Structure, Town, TroopSelection, TroopSelectionType } from "heroes-core";
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

interface TownWindowContainerProps extends InjectedIntlProps, WithGameWindowProps {
  readonly town: Town;
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
    const { town, visibleStructureDetails } = this.props;

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
        alignment={this.props.town.alignment}
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

    const troop = town.garrison[index];

    return (
      <TroopSlot
        index={index}
        troop={troop}
        selected={selectedTroop && selectedTroop.type === TroopSelectionType.Garrison && selectedTroop.index === index}
        onMouseEnter={this.onGarrisonTroopMouseEnter}
        onMouseLeave={this.onGarrisonTroopMouseLeave}
        onClick={this.onGarrisonTroopClick}
      />
    );
  }

  private readonly onGarrisonTroopMouseEnter = (index: number) => {
    const { selectedTroop: st } = this.props;
    const { formatMessage } = this.props.intl;

    const selectedTroop = st && st.type === TroopSelectionType.Garrison ?
      this.props.town.garrison[st.index] :
      undefined;
    const troop = this.props.town.garrison[index];

    const selectedTroopName = selectedTroop && formatMessage(getCreatureNameMessage(selectedTroop.creature));
    const troopName = troop && formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(selectedTroop, troop), {
      selectedTroopName,
      troopName,
    });

    this.setStatusText(statusText);
  }

  private readonly onGarrisonTroopMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onGarrisonTroopClick = (index: number) => {
    const { selectedTroop } = this.props;

    if (selectedTroop === undefined && this.props.town.garrison[index]) {
      this.onSelectGarrisonTroop(index);
    } else if (
      selectedTroop !== undefined &&
      selectedTroop.type === TroopSelectionType.Garrison &&
      index !== selectedTroop.index
    ) {
      this.onSwapGarrisonTroops(selectedTroop.index, index);
    }
  }

  private readonly onSelectGarrisonTroop = (index: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.town.garrison[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(troop, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSelectTroop({ type: TroopSelectionType.Garrison, id: this.props.town.id, index });
  }

  private readonly onSwapGarrisonTroops = (index: number, withIndex: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.town.garrison[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(undefined, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSwapTroops(
      this.props.selectedTroop!,
      { type: TroopSelectionType.Garrison, id: this.props.town.id, index: withIndex },
    );
  }

  private readonly renderHeroPortrait = () => {
    const { visitingHero, visitingHeroDetailsVisible } = this.props;

    return (
      <>
        <HeroPortrait
          hero={visitingHero ? visitingHero.id : undefined}
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
        onMouseLeave={this.onHeroTroopMouseLeave}
        onClick={this.onHeroTroopClick}
      />
    );
  }

  private readonly onHeroTroopMouseEnter = (index: number) => {
    if (!this.props.visitingHero) {
      return;
    }

    const { selectedTroop: st } = this.props;
    const { formatMessage } = this.props.intl;

    const selectedTroop = st !== undefined && st.type === TroopSelectionType.Hero ?
      this.props.visitingHero.army[st.index] :
      undefined;
    const troop = this.props.visitingHero.army[index];

    const selectedTroopName = selectedTroop && formatMessage(getCreatureNameMessage(selectedTroop.creature));
    const troopName = troop && formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(selectedTroop, troop), {
      selectedTroopName,
      troopName,
    });

    this.setStatusText(statusText);
  }

  private readonly onHeroTroopMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onHeroTroopClick = (index: number) => {
    const { visitingHero, selectedTroop } = this.props;

    if (!visitingHero) {
      return;
    }

    if (selectedTroop === undefined && visitingHero.army[index]) {
      this.onSelectHeroTroop(index);
    } else if (
      selectedTroop !== undefined &&
      selectedTroop.type === TroopSelectionType.Hero &&
      index !== selectedTroop.index
    ) {
      this.onSwapHeroTroops(selectedTroop.index, index);
    }
  }

  private readonly onSelectHeroTroop = (index: number) => {
    const { visitingHero } = this.props;
    const { formatMessage } = this.props.intl;

    const troop = visitingHero!.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(troop, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSelectTroop({ type: TroopSelectionType.Hero, id: visitingHero!.id, index });
  }

  private readonly onSwapHeroTroops = (index: number, withIndex: number) => {
    const { visitingHero } = this.props;
    const { formatMessage } = this.props.intl;

    const troop = visitingHero!.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(undefined, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSwapTroops(
      this.props.selectedTroop!,
      { type: TroopSelectionType.Hero, id: visitingHero!.id, index: withIndex },
    );
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
