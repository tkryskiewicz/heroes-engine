import * as React from "react";

import { isCommonStructure } from "heroes-homm1";

export interface StructureViewProps {
  town: string;
  structure: string;
  onClick?: (structure: string) => void;
}

export class StructureView extends React.Component<StructureViewProps> {
  public render() {
    const { town, structure } = this.props;

    const townPath = isCommonStructure(structure) ? "common" : town;

    return (
      <img
        key={structure}
        src={`assets/towns/${townPath}/structures/${structure}/image.png`}
        onClick={this.onClick}
      />
    );
  }

  private onClick = () => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.structure);
  }
}
