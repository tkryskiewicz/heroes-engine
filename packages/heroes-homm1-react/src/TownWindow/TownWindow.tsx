import { Col, Modal, Row } from "antd";
import * as React from "react";

import { enoughResources, Resources, Town } from "heroes-core";
import { StructureId } from "heroes-homm1";

import { ArmyStrip } from "../ArmyStrip";
import { BuildStructureWindow } from "../BuildStructureWindow";
import { Crest } from "../Crest";
import { GameButton } from "../GameButton";
import { HeroPortrait } from "../HeroPortrait";
import { TavernWindow } from "../TavernWindow";
import { TownView } from "../TownView";
import { StructuresWindow } from "./StructuresWindow";
import { Treasury } from "./Treasury";

export interface TownWindowProps {
  town: Town;
  resources: Resources;
  visibleStructureDetails?: string;
  onOpenStructureDetails?: (structure: string) => void;
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
}
