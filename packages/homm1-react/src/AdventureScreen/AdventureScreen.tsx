import { Col, Modal, Row } from "antd";
import * as React from "react";

import { AdventureButtons } from "../AdventureButtons";
import { HeroLocators } from "../HeroLocators";
import { HeroWindow } from "../HeroWindow";
import { KingdomOverviewWindow } from "../KingdomOverviewWindow";
import { TownLocators } from "../TownLocators";
import { TownWindow } from "../TownWindow";

export interface AdventureScreenProps {
  heroWindowVisible?: boolean;
  kingdomOverviewWindowVisible?: boolean;
  townWindowVisible?: boolean;
}

export class AdventureScreen extends React.Component<AdventureScreenProps> {
  public render() {
    const { heroWindowVisible, kingdomOverviewWindowVisible, townWindowVisible } = this.props;

    return (
      <Row>
        <Col span={20}>
          <h1>
            Adventure Window
          </h1>
        </Col>
        <Col span={4}>
          <Row>
            <h1>
              World Map
            </h1>
          </Row>
          <Row>
            <h1>
              Locators
            </h1>
            <Col span={12}>
              <HeroLocators />
              {heroWindowVisible && this.renderHeroWindow(heroWindowVisible)}
            </Col>
            <Col span={12}>
              <TownLocators />
              {townWindowVisible && this.renderTownWindow(townWindowVisible)}
            </Col>
          </Row>
          <Row>
            <h1>
              Adventure Buttons
            </h1>
            <AdventureButtons />
            {kingdomOverviewWindowVisible && this.renderKingdomOverviewWindow(kingdomOverviewWindowVisible)}
          </Row>
          <Row>
            <h1>
              Status Window
            </h1>
          </Row>
        </Col>
      </Row>
    );
  }

  private renderHeroWindow(visible: boolean) {
    return (
      <Modal
        width="75%"
        closable={false}
        footer={null}
        visible={visible}
      >
        <HeroWindow />
      </Modal>
    );
  }

  private renderKingdomOverviewWindow(visible: boolean) {
    return (
      <Modal
        width="75%"
        closable={false}
        footer={null}
        visible={visible}
      >
        <KingdomOverviewWindow />
      </Modal>
    );
  }

  private renderTownWindow(visible: boolean) {
    return (
      <Modal
        width="75%"
        closable={false}
        footer={null}
        visible={visible}
      >
        <TownWindow />
      </Modal>
    );
  }
}
