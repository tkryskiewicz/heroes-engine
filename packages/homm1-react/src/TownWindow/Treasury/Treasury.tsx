import { Col, Row } from "antd";
import * as React from "react";

import { Resource } from "heroes-homm1";

import { GameText } from "../../GameText";
import { ResourceIcon } from "../../ResourceIcon";

export interface TreasuryProps {
  resources: { [resource: string]: number };
}

export class Treasury extends React.Component<TreasuryProps> {
  public render() {
    const style: React.CSSProperties = {
      background: "url('assets/ui/town-window/treasury-border.png')",
      backgroundColor: "#000",
      display: "inline-block",
      height: 204,
      padding: 5,
      width: 94,
    };

    return (
      <div style={style}>
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

  private renderResource(resource: string, resources: { [resource: string]: number }) {
    const style: React.CSSProperties = {
      textAlign: "center",
    };

    return (
      <Col
        style={style}
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
