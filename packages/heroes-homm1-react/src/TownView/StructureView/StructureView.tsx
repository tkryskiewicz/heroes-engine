import * as React from "react";

import { isCommonStructure } from "heroes-homm1";

export interface StructureViewProps {
  town: string;
  structure: string;
  placeholder?: boolean;
  onClick?: (structure: string) => void;
}

export class StructureView extends React.Component<StructureViewProps> {
  public render() {
    const { town, structure, placeholder } = this.props;

    const townPath = isCommonStructure(structure) ? "common" : town;
    const imagePath = placeholder ? "placeholder" : "image";

    return (
      <img
        key={structure}
        src={`assets/towns/${townPath}/structures/${structure}/${imagePath}.png`}
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
