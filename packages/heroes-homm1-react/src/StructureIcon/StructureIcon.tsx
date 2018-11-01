import * as React from "react";
import { FormattedMessage } from "react-intl";

import { isCommonStructure } from "heroes-homm1";

import { GameText } from "../GameText";
import { getStructureNameMessage } from "../messages";

export interface StructureIconProps {
  town: string;
  structure: string;
}

export class StructureIcon extends React.Component<StructureIconProps> {
  public render() {
    const { town, structure } = this.props;

    const style: React.CSSProperties = {
      display: "inline-block",
    };

    return (
      <div style={style}>
        <img src={`assets/towns/${isCommonStructure(structure) ? "common" : town}/structures/${structure}/icon.jpg`} />
        {this.renderName(structure)}
      </div>
    );
  }

  private renderName(structure: string) {
    const style: React.CSSProperties = {
      background: "url('assets/ui/structure-icon/name-background.jpg')",
      height: 14,
      lineHeight: 1,
      textAlign: "center",
      width: 137,
    };

    return (
      <div style={style}>
        <GameText size="small">
          <FormattedMessage {...getStructureNameMessage(structure)} />
        </GameText>
      </div>
    );
  }
}
