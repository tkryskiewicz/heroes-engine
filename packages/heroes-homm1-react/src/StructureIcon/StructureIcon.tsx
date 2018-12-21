import * as React from "react";
import { FormattedMessage } from "react-intl";

import { isCommonStructure } from "heroes-homm1";

import "./StructureIcon.scss";

import { GameText } from "../core";
import { getStructureNameMessage } from "../messages";

export interface StructureIconProps {
  town: string;
  structure: string;
}

export class StructureIcon extends React.Component<StructureIconProps> {
  public render() {
    const { town, structure } = this.props;

    return (
      <div className="structure-icon">
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
}
