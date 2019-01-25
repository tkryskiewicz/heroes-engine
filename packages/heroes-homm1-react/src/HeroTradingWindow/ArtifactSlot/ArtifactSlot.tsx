import * as React from "react";

import * as styles from "./ArtifactSlot.module.scss";

import { BackgroundImage } from "./assets";

import { ArtifactIcon } from "../../base";
import { Slot } from "../Slot";

export interface ArtifactSlotProps {
  readonly hero: string;
  readonly index: number;
  readonly artifact?: string;
  readonly selected: boolean;
  readonly onClick: (hero: string, index: number) => void;
}

export class ArtifactSlot extends React.Component<ArtifactSlotProps> {
  public static readonly defaultProps: Pick<ArtifactSlotProps, "selected" | "onClick"> = {
    onClick: () => undefined,
    selected: false,
  };

  public render() {
    return (
      <Slot
        index={this.props.index}
        selected={this.props.selected}
        onClick={this.onClick}
      >
        <div className={styles.root}>
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
      <div className={styles.artifact}>
        <ArtifactIcon
          size="small"
          artifact={artifact}
        />
      </div>
    );
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.hero, this.props.index);
  }
}
