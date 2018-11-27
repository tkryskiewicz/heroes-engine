import * as React from "react";

import "./ArtifactSlot.scss";

import { ArtifactIcon } from "../../ArtifactIcon";

export interface ArtifactSlotProps {
  index: number;
  artifact?: string;
  selected?: boolean;
  onClick: (index: number) => void;
}

export class ArtifactSlot extends React.Component<ArtifactSlotProps> {
  public static defaultProps: Pick<ArtifactSlotProps, "onClick"> = {
    onClick: () => undefined,
  }

  public render() {
    return (
      <div
        className="artifact-slot"
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
    return (
      <div className="artifact-slot-artifact">
        <ArtifactIcon
          size="small"
          artifact={artifact}
        />
      </div>
    );
  }

  private renderSelection() {
    return (
      <img
        className="artifact-slot-selection"
        src="assets/ui/hero-trading-window/selection.png"
      />
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.index);
  }
}
