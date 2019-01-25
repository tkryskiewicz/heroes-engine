import * as React from "react";

import * as styles from "./ArtifactSlot.module.scss";

import { BorderImage, EmptyImage, UltimateBorderImage } from "./assets";

import { ArtifactIcon } from "../../base";

export interface ArtifactSlotProps {
  readonly index: number;
  readonly artifact?: string;
  readonly isUltimate: boolean;
  readonly onMouseEnter: (index: number) => void;
  readonly onMouseLeave: (index: number) => void;
  readonly onClick: (index: number) => void;
}

type DefaultProp =
  "isUltimate" |
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class ArtifactSlot extends React.Component<ArtifactSlotProps> {
  public static readonly defaultProps: Pick<ArtifactSlotProps, DefaultProp> = {
    isUltimate: false,
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div
        className={styles.root}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >
        {this.renderBorder(this.props.isUltimate)}
        <div className={styles.content}>
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

  private readonly onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index);
  }

  private readonly onMouseLeave = () => {
    this.props.onMouseLeave(this.props.index);
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.index);
  }
}
