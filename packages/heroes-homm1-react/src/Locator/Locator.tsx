import * as React from "react";

import "./Locator.scss";

import { backgroundImages } from "./background";
import SelectionImage = require("./selection.png");

export interface LocatorProps {
  index: number;
  selected: boolean;
  onClick: (index: number) => void;
}

// TODO: town locators have borders, without them we could limit locator size and center content
export class Locator extends React.Component<LocatorProps> {
  public static defaultProps: Pick<LocatorProps, "selected" | "onClick"> = {
    onClick: () => undefined,
    selected: false,
  };

  public render() {
    return (
      <div
        className="locator"
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
        className="locator-background"
        // TODO: if more than 8 locators are possible should be index % 8
        src={backgroundImages[index]}
      />
    );
  }

  private renderSelection() {
    return (
      <img
        className="locator-selection"
        src={SelectionImage}
      />
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.index);
  }
}
