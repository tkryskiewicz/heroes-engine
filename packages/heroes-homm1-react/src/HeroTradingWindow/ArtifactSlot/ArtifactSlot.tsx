import * as React from "react";

import "./ArtifactSlot.scss";

import { BackgroundImage } from "./assets";

import { ArtifactIcon } from "../../ArtifactIcon";
import { Slot } from "../Slot";

export interface ArtifactSlotProps {
  index: number;
  artifact?: string;
  selected: boolean;
  onClick: (index: number) => void;
}

export class ArtifactSlot extends React.Component<ArtifactSlotProps> {
  public static defaultProps: Pick<ArtifactSlotProps, "selected" | "onClick"> = {
    onClick: () => undefined,
    selected: false,
  };

  public render() {
    return (
      <Slot
        index={this.props.index}
        selected={this.props.selected}
        onClick={this.props.onClick}
      >
        <div className="artifact-slot">
          {this.renderBackground()}
          {this.props.artifact && this.renderArtifact(this.props.artifact)}
        </div>
      </Slot>
    );
  }

  private renderBackground() {
    return (
      <img src={BackgroundImage} />
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
}
