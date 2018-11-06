import { Col, Modal, Row } from "antd";
import * as React from "react";

import { enoughResources, Resources, Town } from "heroes-core";
import { StructureId } from "heroes-homm1";

import { ArmyStrip } from "../ArmyStrip";
import { BuildStructureWindow } from "../BuildStructureWindow";
import { Crest } from "../Crest";
import { GameButton } from "../GameButton";
import { HeroPortrait } from "../HeroPortrait";
import { RecruitTroopWindow } from "../RecruitTroopWindow";
import { TavernWindow } from "../TavernWindow";
import { TownView } from "../TownView";
import { StructuresWindow } from "./StructuresWindow";
import { Treasury } from "./Treasury";

export interface TownWindowProps {
  town: Town;
  resources: Resources;
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
      <div>
        <Row>
          <TownView
            town={town}
            onStructureClick={this.onStructureClick}
          />
        </Row>
        <Row>
          <Col span={20}>
            <Row>
              <Crest
                size="large"
                alignment={town.alignment}
                heroClass={town.heroClass}
                onClick={this.props.onCrestClick}
              />
              <ArmyStrip
                army={town.garrison}
              />
            </Row>
            <Row>
              <HeroPortrait
                hero={town.visitingHero ? town.visitingHero.id : undefined}
              />
              <ArmyStrip
                army={town.visitingHero ? town.visitingHero.army : []}
              />
            </Row>
          </Col>
          <Col span={4}>
            <Treasury
              resources={this.props.resources}
            />
          </Col>
        </Row>
        <Row style={{ textAlign: "right" }}>
          <GameButton
            group="town-window"
            type="exit"
            onClick={this.props.onExitClick}
          />
        </Row>
        {visibleStructureDetails && this.renderStructureDetails(town, resources, visibleStructureDetails)}
      </div>
    );
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
