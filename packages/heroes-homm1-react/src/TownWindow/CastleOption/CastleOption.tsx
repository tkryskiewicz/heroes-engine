import * as React from "react";

import { StructureStatus } from "heroes-homm1";

import "./CastleOption.scss";

import { StructureIcon } from "../../StructureIcon";
import { gameOptionStatusImages } from "./assets";

export interface CastleOptionProps {
  town: string;
  structure: string;
  status: StructureStatus;
  onMouseEnter: (structure: string, status: StructureStatus) => void;
  onMouseLeave: (structure: string, status: StructureStatus) => void;
  onClick: (structure: string, status: StructureStatus) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class CastleOption extends React.Component<CastleOptionProps> {
  public static defaultProps: Pick<CastleOptionProps, DefaultProp> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div>
        <StructureIcon
          town={this.props.town}
          structure={this.props.structure}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
        />
        {this.renderStatusIcon(this.props.status)}
      </div>
    );
  }

  private renderStatusIcon(status: StructureStatus) {
    return (
      <img
        className="castle-option-status-icon"
        src={gameOptionStatusImages[status]}
      />
    );
  }

  private onMouseEnter = () => {
    this.props.onMouseEnter(this.props.structure, this.props.status);
  }

  private onMouseLeave = () => {
    this.props.onMouseLeave(this.props.structure, this.props.status);
  }

  private onClick = () => {
    this.props.onClick(this.props.structure, this.props.status);
  }
}
