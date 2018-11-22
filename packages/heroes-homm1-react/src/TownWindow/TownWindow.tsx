import { Modal } from "antd";
import * as React from "react";

import { enoughResources, Hero, Resources, Town } from "heroes-core";
import { StructureId } from "heroes-homm1";

import "./TownWindow.scss";

import { ArmyStrip } from "../ArmyStrip";
import { BigBar } from "../BigBar";
import { BuildStructureWindow } from "../BuildStructureWindow";
import { Crest } from "../Crest";
import { GameButton } from "../GameButton";
import { GameText } from "../GameText";
import { HeroPortrait } from "../HeroPortrait";
import { RecruitTroopWindow } from "../RecruitTroopWindow";
import { TavernWindow } from "../TavernWindow";
import { TownView } from "../TownView";
import { StructuresWindow } from "./StructuresWindow";
import { Treasury } from "./Treasury";

export interface TownWindowProps {
  town: Town;
  visitingHero?: Hero;
  resources: Resources;
  selectedGarrisonTroopIndex?: number;
  onSelectGarrisonTroop?: (index: number) => void;
  onSwapGarrisonTroops?: (town: string, index: number, withIndex: number) => void;
  selectedHeroTroopIndex?: number;
  onSelectHeroTroop?: (index: number) => void;
  onSwapHeroTroops?: (hero: string, index: number, withIndex: number) => void;
  visibleStructureDetails?: string;
  onCrestClick?: () => void;
  onOpenStructureDetails?: (structure: string) => void;
  onRecruitTroop?: (town: string, structure: string, count: number) => void;
  onExitClick?: () => void;
}

export class TownWindow extends React.Component<TownWindowProps> {
  public render() {
    const { town, resources, visibleStructureDetails } = this.props;

    return (
      <div className="town-window">
        <TownView
          town={town}
          onStructureClick={this.onStructureClick}
        />
        <div className="town-window-strip">
          <div className="town-window-town-name">
            <GameText size="small">
              {town.name}
            </GameText>
          </div>
          <div className="town-window-crest">
            <Crest
              alignment={town.alignment}
              heroClass={town.heroClass}
              onClick={this.props.onCrestClick}
            />
          </div>
          <div className="town-window-garrison-army">
            <ArmyStrip
              army={town.garrison}
              selectedTroopIndex={this.props.selectedGarrisonTroopIndex}
              onSelectTroop={this.props.onSelectGarrisonTroop}
              onSwapTroops={this.onSwapGarrisonTroops}
            />
          </div>
          <div className="town-window-hero-portrait">
            <HeroPortrait
              hero={this.props.visitingHero ? this.props.visitingHero.id : undefined}
            />
          </div>
          <div className="town-window-hero-army">
            <ArmyStrip
              army={this.props.visitingHero ? this.props.visitingHero.army : []}
              selectedTroopIndex={this.props.selectedHeroTroopIndex}
              onSelectTroop={this.props.onSelectHeroTroop}
              onSwapTroops={this.onSwapHeroTroops}
            />
          </div>
          <div className="town-window-treasury">
            <Treasury
              resources={this.props.resources}
            />
          </div>
          <div className="town-window-exit">
            <GameButton
              group="town-window"
              type="exit"
              onClick={this.props.onExitClick}
            />
          </div>
        </div>
        <BigBar />
        {visibleStructureDetails && this.renderStructureDetails(town, resources, visibleStructureDetails)}
      </div>
    );
  }

  private onSwapGarrisonTroops = (index: number, withIndex: number) => {
    if (!this.props.onSwapGarrisonTroops) {
      return;
    }

    this.props.onSwapGarrisonTroops(this.props.town.id, index, withIndex);
  }

  private onSwapHeroTroops = (index: number, withIndex: number) => {
    if (!this.props.onSwapHeroTroops) {
      return;
    }

    this.props.onSwapHeroTroops(this.props.visitingHero!.id, index, withIndex);
  }

  private onStructureClick = (structure: string) => {
    if (!this.props.onOpenStructureDetails) {
      return;
    }

    this.props.onOpenStructureDetails(structure);
  }

  private renderStructureDetails(town: Town, resources: Resources, structure: string) {
    const struc = town.structures.find((s) => s.id === structure)!;

    let StructureDetails: React.ReactNode | undefined;

    switch (structure) {
      case StructureId.Castle:
        StructureDetails = !struc.isBuilt ? (
          <BuildStructureWindow
            town={town.id}
            structure={structure}
            cost={struc.cost}
            canBuild={enoughResources(resources, struc.cost)}
          />) : (
            <StructuresWindow
              town={town.id}
              resources={resources}
              structures={town.structures}
            />
          );
        break;
      case StructureId.Tavern:
        StructureDetails = <TavernWindow />;
        break;
      default:
        if (struc.dwelling) {
          const onOkayClick = (count: number) => this.onRecruitTroop(struc.id, count);

          StructureDetails = (
            <RecruitTroopWindow
              creature={struc.dwelling.creature}
              cost={struc.dwelling.cost}
              availableCount={struc.dwelling.availableCount}
              onOkayClick={onOkayClick}
            />
          );
        }
        break;
    }

    return (
      <Modal
        width="75%"
        closable={false}
        footer={null}
        visible={true}
      >
        {StructureDetails}
      </Modal>
    );
  }

  private onRecruitTroop = (structure: string, count: number) => {
    if (!this.props.onRecruitTroop) {
      return;
    }

    this.props.onRecruitTroop(this.props.town.id, structure, count);
  }
}
