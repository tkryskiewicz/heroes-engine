import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Hero, Resources, Town } from "heroes-core";

import * as styles from "./TownWindow.module.scss";

import { ArmyStrip, BigBar, Crest, getArmyStripStatusTextMessage, HeroPortrait } from "../base";
import { GameText, withGameWindow, WithGameWindowProps } from "../core";
import { kingdomOverviewWindowMessages } from "../KingdomOverviewWindow";
import { getCreatureNameMessage, getStructureNameMessage } from "../messages";
import { RecruitTroopWindow, recruitTroopWindowMessages } from "../RecruitTroopWindow";
import { TownView } from "../TownView";
import { getStructureDetails } from "./config";
import { messages } from "./messages";
import { Treasury } from "./Treasury";

export interface TownWindowProps extends WithGameWindowProps {
  readonly town: Town;
  readonly visitingHero?: Hero;
  readonly resources: Resources;
  readonly selectedGarrisonTroopIndex?: number;
  readonly onSelectGarrisonTroop: (index: number) => void;
  readonly onSwapGarrisonTroops: (town: string, index: number, withIndex: number) => void;
  readonly selectedHeroTroopIndex?: number;
  readonly onSelectHeroTroop: (index: number) => void;
  readonly onSwapHeroTroops: (hero: string, index: number, withIndex: number) => void;
  readonly visibleStructureDetails?: string;
  readonly onCrestClick: () => void;
  readonly onOpenStructureDetailsClick: (structure: string) => void;
  readonly onCloseStructureDetailsClick: () => void;
  readonly onRecruitTroop: (town: string, structure: string, count: number) => void;
  readonly onExitClick: () => void;
}

type DefaultProp =
  "onSelectGarrisonTroop" |
  "onSwapGarrisonTroops" |
  "onSelectHeroTroop" |
  "onSwapHeroTroops" |
  "onCrestClick" |
  "onOpenStructureDetailsClick" |
  "onCloseStructureDetailsClick" |
  "onRecruitTroop" |
  "onExitClick";

interface TownWindowState {
  readonly statusText: string;
}

class TownWindow extends React.Component<TownWindowProps & InjectedIntlProps, TownWindowState> {
  public static readonly defaultProps: Pick<TownWindowProps, DefaultProp> = {
    onCloseStructureDetailsClick: () => undefined,
    onCrestClick: () => undefined,
    onExitClick: () => undefined,
    onOpenStructureDetailsClick: () => undefined,
    onRecruitTroop: () => undefined,
    onSelectGarrisonTroop: () => undefined,
    onSelectHeroTroop: () => undefined,
    onSwapGarrisonTroops: () => undefined,
    onSwapHeroTroops: () => undefined,
  };

  public readonly state: TownWindowState = {
    statusText: "",
  };

  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { town, resources, visibleStructureDetails } = this.props;

    return (
      <div className={styles.root}>
        <TownView
          town={town}
          onStructureMouseEnter={this.onStructureMouseEnter}
          onStructureMouseLeave={this.onStructureMouseLeave}
          onStructureClick={this.onStructureClick}
        />
        <div className={styles.strip}>
          <div className={styles.townName}>
            <GameText size="small">
              {town.name}
            </GameText>
          </div>
          <div className={styles.crest}>
            <Crest
              alignment={town.alignment}
              heroClass={town.heroClass}
              onMouseEnter={this.onCrestMouseEnter}
              onMouseLeave={this.onCrestMouseLeave}
              onClick={this.props.onCrestClick}
            />
          </div>
          <div className={styles.garrisonArmy}>
            <ArmyStrip
              army={town.garrison}
              selectedTroopIndex={this.props.selectedGarrisonTroopIndex}
              onTroopMouseEnter={this.onGarrisonTroopMouseEnter}
              onTroopMouseLeave={this.onTroopMouseLeave}
              onTroopClick={this.onGarrisonTroopClick}
            />
          </div>
          <div className={styles.heroPortrait}>
            <HeroPortrait
              hero={this.props.visitingHero ? this.props.visitingHero.id : undefined}
              onMouseEnter={this.onHeroPortraitMouseEnter}
              onMouseLeave={this.onHeroPortraitMouseLeave}
            />
          </div>
          <div className={styles.heroArmy}>
            <ArmyStrip
              army={this.props.visitingHero ? this.props.visitingHero.army : []}
              selectedTroopIndex={this.props.selectedHeroTroopIndex}
              onTroopMouseEnter={this.onHeroTroopMouseEnter}
              onTroopMouseLeave={this.onTroopMouseLeave}
              onTroopClick={this.onHeroTroopClick}
            />
          </div>
          <div className={styles.treasury}>
            <Treasury
              resources={this.props.resources}
              onExitMouseEnter={this.onExitMouseEnter}
              onExitMouseLeave={this.onExitMouseLeave}
              onExitClick={this.props.onExitClick}
            />
          </div>
        </div>
        <BigBar>
          {this.state.statusText}
        </BigBar>
        {visibleStructureDetails && this.renderStructureDetails(town, resources, visibleStructureDetails)}
      </div>
    );
  }

  private readonly onCrestMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(kingdomOverviewWindowMessages.title);

    this.setStatusText(statusText);
  }

  private readonly onCrestMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onHeroPortraitMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(messages.viewHero);

    this.setStatusText(statusText);
  }

  private readonly onHeroPortraitMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onGarrisonTroopMouseEnter = (index: number) => {
    const { formatMessage } = this.props.intl;

    const selectedTroop = this.props.selectedHeroTroopIndex !== undefined ?
      this.props.town.garrison[this.props.selectedHeroTroopIndex] :
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

  private readonly onGarrisonTroopClick = (index: number) => {
    const { selectedGarrisonTroopIndex } = this.props;

    if (selectedGarrisonTroopIndex === undefined && this.props.town.garrison[index]) {
      this.onSelectGarrisonTroop(index);
      // } else if (index === selectedGarrisonTroopIndex) {
      //   this.props.onSelectedTroopClick(index);
    } else if (selectedGarrisonTroopIndex !== undefined && index !== selectedGarrisonTroopIndex) {
      this.onSwapGarrisonTroops(selectedGarrisonTroopIndex, index);
    }
  }

  private readonly onSelectGarrisonTroop = (index: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.town.garrison[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(troop, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSelectGarrisonTroop(index);
  }

  private readonly onSwapGarrisonTroops = (index: number, withIndex: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.town.garrison[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(undefined, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSwapGarrisonTroops(this.props.town.id, index, withIndex);
  }

  private readonly onHeroTroopMouseEnter = (index: number) => {
    const { formatMessage } = this.props.intl;

    const selectedTroop = this.props.selectedHeroTroopIndex !== undefined ?
      this.props.visitingHero!.army[this.props.selectedHeroTroopIndex] :
      undefined;
    const troop = this.props.visitingHero!.army[index];

    const selectedTroopName = selectedTroop && formatMessage(getCreatureNameMessage(selectedTroop.creature));
    const troopName = troop && formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(selectedTroop, troop), {
      selectedTroopName,
      troopName,
    });

    this.setStatusText(statusText);
  }

  private readonly onHeroTroopClick = (index: number) => {
    const { selectedHeroTroopIndex } = this.props;

    if (selectedHeroTroopIndex === undefined && this.props.visitingHero!.army[index]) {
      this.onSelectHeroTroop(index);
      // } else if (index === selectedHeroTroopIndex) {
      //   this.props.onSelectedTroopClick(index);
    } else if (selectedHeroTroopIndex !== undefined && index !== selectedHeroTroopIndex) {
      this.onSwapHeroTroops(selectedHeroTroopIndex, index);
    }
  }

  private readonly onSelectHeroTroop = (index: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.visitingHero!.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(troop, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSelectHeroTroop(index);
  }

  private readonly onSwapHeroTroops = (index: number, withIndex: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.visitingHero!.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(undefined, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSwapHeroTroops(this.props.visitingHero!.id, index, withIndex);
  }

  private readonly onTroopMouseLeave = () => {
    this.setDefaultStatusText();
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

  private renderStructureDetails(town: Town, resources: Resources, structure: string) {
    const struc = town.structures.find((s) => s.id === structure)!;

    // TODO: optimize and handle case with result missing
    const structureDetails = getStructureDetails(struc, town.id, resources, {
      onCloseClick: this.onCloseStructureDetailsClick,
    });

    if (structureDetails) {
      return structureDetails;
    }

    if (struc.dwelling) {
      const onOkayClick = (count: number) => this.onRecruitTroop(struc.id, count);

      return (
        <RecruitTroopWindow
          creature={struc.dwelling.creature}
          cost={struc.dwelling.cost}
          availableCount={struc.dwelling.availableCount}
          visible={true}
          onOkayClick={onOkayClick}
          onCancelClick={this.onCloseStructureDetailsClick}
        />
      );
    }

    return structureDetails;
  }

  private readonly onCloseStructureDetailsClick = () => {
    this.props.onCloseStructureDetailsClick();
  }

  private readonly onRecruitTroop = (structure: string, count: number) => {
    this.props.onRecruitTroop(this.props.town.id, structure, count);
  }

  private readonly onExitMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(messages.exit);

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
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.setStatusText(statusText);
  }
}

const TownWindowWrapped = injectIntl(
  withGameWindow(640)(TownWindow),
);

export {
  TownWindowWrapped as TownWindow,
};
