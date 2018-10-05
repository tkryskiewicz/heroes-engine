import * as React from "react";

import { ArtifactIcon } from "../../ArtifactIcon";

export interface ArtifactSlotProps {
  index: number;
  artifact?: string;
  onClick: (index: number) => void;
}

export class ArtifactSlot extends React.Component<ArtifactSlotProps> {
  public render() {
    const style: React.CSSProperties = {
      display: "inline-block",
      position: "relative",
    };

    const contentStyle: React.CSSProperties = {
      left: 6,
      position: "absolute",
      top: 6,
    };

    return (
      <div
        style={style}
        onClick={this.onClick}
      >
        {this.renderBorder()}
        <div style={contentStyle}>
          {this.props.artifact ? this.renderArtifact(this.props.artifact) : this.renderEmpty()}
        </div>
      </div>
    );
  }

  private renderBorder() {
    return (
      <img
        src="assets/ui/hero-window/artifact-slot-border.png"
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
      <img src="assets/ui/hero-window/artifact-slot-empty.jpg" />
    );
  }

  private onClick = () => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.index);
  }
}
