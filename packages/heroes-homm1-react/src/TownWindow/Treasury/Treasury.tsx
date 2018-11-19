import { Col, Row } from "antd";
import * as React from "react";

import { Resources } from "heroes-core";
import { Resource } from "heroes-homm1";

import "./Treasury.scss";

import { GameText } from "../../GameText";
import { ResourceIcon } from "../../ResourceIcon";

export interface TreasuryProps {
  resources: Resources;
}

export class Treasury extends React.Component<TreasuryProps> {
  public render() {
    return (
      <div className="treasury">
        <Row>
          {this.renderResource(Resource.Wood, this.props.resources)}
          {this.renderResource(Resource.Sulfur, this.props.resources)}
        </Row>
        <Row>
          {this.renderResource(Resource.Crystal, this.props.resources)}
          {this.renderResource(Resource.Mercury, this.props.resources)}
        </Row>
        <Row>
          {this.renderResource(Resource.Ore, this.props.resources)}
          {this.renderResource(Resource.Gems, this.props.resources)}
        </Row>
        <Row>
          {this.renderResource(Resource.Gold, this.props.resources)}
        </Row>
      </div>
    );
  }

  private renderResource(resource: string, resources: Resources) {
    return (
      <Col
        className="treasury-resource"
        key={resource}
        span={resource !== Resource.Gold ? 12 : 24}
      >
        <ResourceIcon
          size="large"
          resource={resource}
        />
        <div>
          <GameText size="small">
            {resources[resource] || 0}
          </GameText>
        </div>
      </Col>
    );
  }
}
