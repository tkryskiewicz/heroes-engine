import * as React from "react";

import { isCommonStructure } from "heroes-homm1";

export interface StructureViewProps {
  town: string;
  structure: string;
  placeholder: boolean;
  onClick: (structure: string) => void;
}

export class StructureView extends React.Component<StructureViewProps> {
  public static defaultProps: Pick<StructureViewProps, "placeholder" | "onClick"> = {
    onClick: () => undefined,
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
        onClick={this.onClick}
      />
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.structure);
  }
}
