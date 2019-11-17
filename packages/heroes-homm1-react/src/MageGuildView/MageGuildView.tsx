import React from "react";

import { noop } from "heroes-helpers";

import * as styles from "./MageGuildView.module.scss";

interface Props {
  readonly structure: string;
  readonly level: number;
  readonly onMouseEnter: (structure: string) => void;
  readonly onMouseLeave: (structure: string) => void;
  readonly onClick: (structure: string) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class MageGuildView extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    onClick: noop,
    onMouseEnter: noop,
    onMouseLeave: noop,
  };

  public render() {
    return (
      <div
        className={styles.root}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >
        {[...new Array(this.props.level).keys()].map((v) => v + 1).map(this.renderLevel)}
      </div>
    );
  }

  private readonly renderLevel = (level: number) => {
    return (
      <>
        <img
          className={styles.level}
          src={`/assets/towns/common/structures/mage-guild/level-${level}.png`}
        />
        {level === this.props.level && this.renderTop(level)}
      </>
    );
  }

  private readonly renderTop = (level: number) => {
    return (
      <img
        className={styles.top}
        src={`/assets/towns/common/structures/mage-guild/level-${level}-top.png`}
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

export type MageGuildViewProps = ExtractPublicProps<typeof MageGuildView>;
