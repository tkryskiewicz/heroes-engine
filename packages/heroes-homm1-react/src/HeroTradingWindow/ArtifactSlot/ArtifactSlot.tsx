import * as React from "react";

import { ArtifactIcon } from "../../ArtifactIcon";

export interface ArtifactSlotProps {
  index: number;
  artifact?: string;
  onClick?: (index: number) => void;
}

export class ArtifactSlot extends React.Component<ArtifactSlotProps> {
  public render() {
    const style: React.CSSProperties = {
      display: "inline-block",
    };

    return (
      <div
        style={style}
        onClick={this.onClick}
      >
        {this.props.artifact ? this.renderArtifact(this.props.artifact) : this.renderEmpty()}
      </div>
    );
  }

  private renderArtifact(artifact: string) {
    return (
      <ArtifactIcon
        size="small"
        artifact={artifact}
      />
    );
  }

  private renderEmpty() {
    return (
      <img src="assets/ui/hero-trade-window/artifact-background.jpg" />
    );
  }

  private onClick = () => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.index);
  }
}
