import * as React from "react";

import { isCommonStructure } from "heroes-homm1";

export interface StructureViewProps {
  readonly town: string;
  readonly structure: string;
  readonly placeholder: boolean;
  readonly onMouseEnter: (structure: string) => void;
  readonly onMouseLeave: (structure: string) => void;
  readonly onClick: (structure: string) => void;
}

type DefaultProp =
  "placeholder" |
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class StructureView extends React.Component<StructureViewProps> {
  public static readonly defaultProps: Pick<StructureViewProps, DefaultProp> = {
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

  private readonly onMouseEnter = () => {
    this.props.onMouseEnter(this.props.structure);
  }

  private readonly onMouseLeave = () => {
    this.props.onMouseLeave(this.props.structure);
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.structure);
  }
}
