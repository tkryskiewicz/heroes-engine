import * as React from "react";

import * as styles from "./TradingArtifactSlot.module.scss";

import { BackgroundImage } from "./assets";

import { ArtifactIcon } from "../ArtifactIcon";
import { TradingSlot } from "../TradingSlot";

export interface TradingArtifactSlotProps {
  readonly hero: string;
  readonly index: number;
  readonly artifact?: string;
  readonly selected: boolean;
  readonly onClick: (hero: string, index: number) => void;
}

export class TradingArtifactSlot extends React.Component<TradingArtifactSlotProps> {
  public static readonly defaultProps: Pick<TradingArtifactSlotProps, "selected" | "onClick"> = {
    onClick: () => undefined,
    selected: false,
  };

  public render() {
    return (
      <TradingSlot
        index={this.props.index}
        selected={this.props.selected}
        onClick={this.onClick}
      >
        <div className={styles.root}>
          {this.renderBackground()}
          {this.props.artifact && this.renderArtifact(this.props.artifact)}
        </div>
      </TradingSlot>
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
