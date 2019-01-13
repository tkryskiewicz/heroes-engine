import * as React from "react";
import { FormattedMessage } from "react-intl";

import { isCommonStructure } from "heroes-homm1";

import "./StructureIcon.scss";

import { GameText } from "../core";
import { getStructureNameMessage } from "../messages";

export interface StructureIconProps {
  town: string;
  structure: string;
  onMouseEnter: (structure: string) => void;
  onMouseLeave: (structure: string) => void;
  onClick: (structure: string) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class StructureIcon extends React.Component<StructureIconProps> {
  public static defaultProps: Pick<StructureIconProps, DefaultProp> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    const { town, structure } = this.props;

    return (
      <div
        className="structure-icon"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >
        <img src={`assets/towns/${isCommonStructure(structure) ? "common" : town}/structures/${structure}/icon.jpg`} />
        {this.renderName(structure)}
      </div>
    );
  }

  private renderName(structure: string) {
    return (
      <div className="structure-icon-name">
        <GameText size="small">
          <FormattedMessage {...getStructureNameMessage(structure)} />
        </GameText>
      </div>
    );
  }

  private onMouseEnter = () => {
    this.props.onMouseEnter(this.props.structure);
  }

  private onMouseLeave = () => {
    this.props.onMouseLeave(this.props.structure);
  }

  private onClick = () => {
    this.props.onClick(this.props.structure);
  }
}
