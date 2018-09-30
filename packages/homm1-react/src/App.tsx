import { Col, Row } from "antd";
import * as React from "react";

import { AdventureButtons } from "./AdventureButtons";
import { HeroLocators } from "./HeroLocators";
import { TownLocators } from "./TownLocators";

export class App extends React.Component {
  public render() {
    return (
      <>
        <h1>
          heroes-engine
        </h1>
        <p>
          A Heroes of Might and Magic engine written in TypeScript.
        </p>
        <Row>
          <Col span={2}>
            <HeroLocators />
          </Col>
          <Col span={2}>
            <TownLocators />
          </Col>
        </Row>
        <AdventureButtons />
      </>
    );
  }
}
