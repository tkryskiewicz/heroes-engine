import * as React from "react";

import "./ArtifactSlot.scss";

import { BorderImage, EmptyImage, UltimateBorderImage } from "./assets";

import { ArtifactIcon } from "../../ArtifactIcon";

export interface ArtifactSlotProps {
  index: number;
  artifact?: string;
  isUltimate: boolean;
  onClick: (index: number) => void;
}

export class ArtifactSlot extends React.Component<ArtifactSlotProps> {
  public static defaultProps: Pick<ArtifactSlotProps, "isUltimate" | "onClick"> = {
    isUltimate: false,
    onClick: () => undefined,
  };

  public render() {
    return (
      <div
        className="artifact-slot"
        onClick={this.onClick}
      >
        {this.renderBorder(this.props.isUltimate)}
        <div className="artifact-slot-content">
          {this.props.artifact ? this.renderArtifact(this.props.artifact) : this.renderEmpty()}
        </div>
      </div>
    );
  }

  private renderBorder(isUltimate: boolean) {
    return (
      <img
        src={isUltimate ? UltimateBorderImage : BorderImage}
      />
    );
  }

  private renderArtifact(artifact: string) {
    return (
      <ArtifactIcon
        size="large"
        artifact={artifact}
      />
    );
  }

  private renderEmpty() {
    return (
      <img src={EmptyImage} />
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.index);
  }
}
