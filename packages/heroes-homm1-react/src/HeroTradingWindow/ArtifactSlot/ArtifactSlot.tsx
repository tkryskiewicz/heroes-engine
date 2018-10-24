import * as React from "react";

import { ArtifactIcon } from "../../ArtifactIcon";

export interface ArtifactSlotProps {
  index: number;
  artifact?: string;
  selected?: boolean;
  onClick?: (index: number) => void;
}

export class ArtifactSlot extends React.Component<ArtifactSlotProps> {
  public render() {
    const style: React.CSSProperties = {
      display: "inline-block",
      position: "relative",
    };

    return (
      <div
        style={style}
        onClick={this.onClick}
      >
        {this.renderBackground()}
        {this.props.artifact && this.renderArtifact(this.props.artifact)}
        {this.props.selected && this.renderSelection()}
      </div>
    );
  }

  private renderBackground() {
    return (
      <img src="assets/ui/hero-trading-window/artifact-background.jpg" />
    );
  }

  private renderArtifact(artifact: string) {
    const style: React.CSSProperties = {
      left: 1,
      position: "absolute",
      top: 1,
    };

    return (
      <div style={style}>
        <ArtifactIcon
          size="small"
          artifact={artifact}
        />
      </div>
    );
  }

  private renderSelection() {
    const style: React.CSSProperties = {
      left: 0,
      position: "absolute",
      top: 0,
    };

    return (
      <img
        style={style}
        src="assets/ui/hero-trading-window/selection.png"
      />
    );
  }

  private onClick = () => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.index);
  }
}
