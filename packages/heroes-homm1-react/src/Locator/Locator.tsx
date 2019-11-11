import React from "react";

import { noop } from "heroes-helpers";

import * as styles from "./Locator.module.scss";

import { backgroundImages, SelectionImage } from "./assets";

export interface LocatorProps {
  readonly index: number;
  readonly selected: boolean;
  readonly onClick: (index: number) => void;
}

// TODO: town locators have borders, without them we could limit locator size and center content
export class Locator extends React.Component<LocatorProps> {
  public static readonly defaultProps: Pick<LocatorProps, "selected" | "onClick"> = {
    onClick: noop,
    selected: false,
  };

  public render() {
    return (
      <div
        className={styles.root}
        onClick={this.onClick}
      >
        {this.renderBackground(this.props.index)}
        {this.props.children}
        {this.props.selected && this.renderSelection()}
      </div>
    );
  }

  private renderBackground(index: number) {
    return (
      <img
        className={styles.background}
        // TODO: if more than 8 locators are possible should be index % 8
        src={backgroundImages[index]}
      />
    );
  }

  private renderSelection() {
    return (
      <img
        className={styles.selection}
        src={SelectionImage}
      />
    );
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.index);
  }
}
