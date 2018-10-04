import { Col, Modal, Row } from "antd";
import * as React from "react";

import { AdventureButtons } from "../AdventureButtons";
import { HeroLocators } from "../HeroLocators";
import { HeroWindow } from "../HeroWindow";
import { TownLocators } from "../TownLocators";

export interface AdventureScreenProps {
  heroWindowVisible?: boolean;
}

export class AdventureScreen extends React.Component<AdventureScreenProps> {
  public render() {
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
              {this.props.heroWindowVisible && this.renderHeroWindow(this.props.heroWindowVisible)}
            </Col>
            <Col span={12}>
              <TownLocators />
            </Col>
          </Row>
          <Row>
            <h1>
              Adventure Buttons
            </h1>
            <AdventureButtons />
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
        footer={null}
        visible={visible}
      >
        <HeroWindow />
      </Modal>
    );
  }
}