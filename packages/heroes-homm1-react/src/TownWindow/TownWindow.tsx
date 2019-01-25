import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { enoughResources, Hero, Resources, Town } from "heroes-core";
import { Resource, SpellId, spells as allSpells, StructureId } from "heroes-homm1";

import * as styles from "./TownWindow.module.scss";

import { ArmyStrip, BigBar, Crest, GameModal, HeroPortrait } from "../base";
import { BuildShipWindow } from "../BuildShipWindow";
import { BuildStructureWindow } from "../BuildStructureWindow";
import { GameText, GameWindow } from "../core";
import { kingdomOverviewWindowMessages } from "../KingdomOverviewWindow";
import { MageGuildWindow } from "../MageGuildWindow";
import { getCreatureNameMessage, getStructureNameMessage } from "../messages";
import { RecruitTroopWindow, recruitTroopWindowMessages } from "../RecruitTroopWindow";
import { TavernWindow } from "../TavernWindow";
import { ThievesGuildWindow } from "../ThievesGuildWindow";
import { TownPopulationWindow, TownPopulationWindowProps } from "../TownPopulationWindow";
import { TownView } from "../TownView";
import { CastleOptionsWindow } from "./CastleOptionsWindow";
import { messages } from "./messages";
import { Treasury } from "./Treasury";

export interface TownWindowProps {
  readonly town: Town;
  readonly visitingHero?: Hero;
  readonly resources: Resources;
  readonly visible?: boolean;
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
      <GameWindow
        width={640}
        visible={this.props.visible}
      >
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
                onSelectTroop={this.props.onSelectGarrisonTroop}
                onSwapTroops={this.onSwapGarrisonTroops}
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
                onSelectTroop={this.props.onSelectHeroTroop}
                onSwapTroops={this.onSwapHeroTroops}
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
      </GameWindow>
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

  private readonly onSwapGarrisonTroops = (index: number, withIndex: number) => {
    this.props.onSwapGarrisonTroops(this.props.town.id, index, withIndex);
  }

  private readonly onSwapHeroTroops = (index: number, withIndex: number) => {
    this.props.onSwapHeroTroops(this.props.visitingHero!.id, index, withIndex);
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

    let structureDetails: React.ReactNode | undefined;

    switch (structure) {
      case StructureId.Castle:
        structureDetails = !struc.isBuilt ? (
          <BuildStructureWindow
            town={town.id}
            structure={structure}
            cost={struc.cost}
            canBuild={enoughResources(resources, struc.cost)}
            visible={true}
            onCancelClick={this.onCloseStructureDetailsClick}
          />) : (
            <CastleOptionsWindow
              town={town.id}
              canConstructStructures={town.canConstructStructures}
              resources={resources}
              options={town.structures.filter((s) => s.id !== StructureId.Castle)}
              visible={true}
              onExitClick={this.onCloseStructureDetailsClick}
            />
          );
        break;
      case StructureId.MageGuild:
        // FIXME: move to structure
        const spells = [
          SpellId.Bless,
          SpellId.Protection,
          SpellId.ViewResources,
          SpellId.Haste,
          SpellId.SummonBoat,
          SpellId.ViewHeroes,
          SpellId.Fireball,
          SpellId.MeteorShower,
          SpellId.ViewAll,
        ];

        structureDetails = (
          <MageGuildWindow
            spells={allSpells.filter((s) => spells.indexOf(s.id) !== -1)}
            levelBuilt={1}
            visible={true}
            onExitClick={this.onCloseStructureDetailsClick}
          />
        );
        break;
      case StructureId.ThievesGuild:
        structureDetails = (
          <ThievesGuildWindow
            visible={true}
            onExitClick={this.onCloseStructureDetailsClick}
          />
        );
        break;
      case StructureId.Tavern:
        structureDetails = (
          <TavernWindow
            visible={true}
            onOkayClick={this.onCloseStructureDetailsClick}
          />
        );
        break;
      case StructureId.Shipyard:
        // TODO: implement
        const shipAlreadyBuilt = false;

        if (shipAlreadyBuilt) {
          return (
            <GameModal
              visible={true}
              type="okay"
              onConfirmClick={this.onCloseStructureDetailsClick}
            >
              <GameText size="large">
                <FormattedMessage {...messages.cannotBuildShip} />
              </GameText>
            </GameModal>
          );
        }

        const cost: Resources = {
          [Resource.Gold]: 1000,
          [Resource.Wood]: 10,
        };

        const canBuild = enoughResources(resources, cost);

        // TODO: implement
        const onConfirm = () => undefined;

        structureDetails = (
          <BuildShipWindow
            visible={true}
            cost={cost}
            canBuild={canBuild}
            onOkayClick={onConfirm}
            onCancelClick={this.onCloseStructureDetailsClick}
          />
        );
        break;
      case StructureId.Well:
        const dwellings = town.structures
          .map((s) => s.dwelling ? {
            available: s.dwelling.availableCount,
            creature: s.dwelling.creature,
            growthRate: s.dwelling.growth,
            id: s.id,
          } : undefined)
          .filter((d) => d) as TownPopulationWindowProps["dwellings"];

        structureDetails = (
          <TownPopulationWindow
            visible={true}
            town={town.id}
            dwellings={dwellings}
            onExitClick={this.onCloseStructureDetailsClick}
          />
        );
        break;
      default:
        if (struc.dwelling) {
          const onOkayClick = (count: number) => this.onRecruitTroop(struc.id, count);

          structureDetails = (
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
        break;
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

const TownWindowWrapped = injectIntl(TownWindow);

export {
  TownWindowWrapped as TownWindow,
};
