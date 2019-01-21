import * as React from "react";

import { isCommonStructure } from "heroes-homm1";

export interface StructureViewProps {
  town: string;
  structure: string;
  placeholder: boolean;
  onMouseEnter: (structure: string) => void;
  onMouseLeave: (structure: string) => void;
  onClick: (structure: string) => void;
}

export class StructureView extends React.Component<StructureViewProps> {
  public static defaultProps: Pick<StructureViewProps, "placeholder" | "onMouseEnter" | "onMouseLeave" | "onClick"> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
    placeholder: false,
  };

  public render() {
    const { town, structure, placeholder } = this.props;

    const townPath = isCommonStructure(structure) ? "common" : town;
    const imagePath = placeholder ? "placeholder" : "image";

    return (
      <img
        key={structure}
        src={`assets/towns/${townPath}/structures/${structure}/${imagePath}.png`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      />
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