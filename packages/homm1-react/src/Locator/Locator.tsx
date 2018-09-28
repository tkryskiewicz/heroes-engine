import * as React from "react";

export interface LocatorProps {
  index: number;
  selected?: boolean;
  onClick?: (index: number) => void;
}

// TODO: town locators have borders, without them we could limit locator size and center content
export class Locator extends React.Component<LocatorProps> {
  public render() {
    const style: React.CSSProperties = {
      height: 32,
      position: "relative",
      width: 56,
    };

    return (
      <div
        style={style}
        onClick={this.onClick}
      >
        {this.renderBackground(this.props.index)}
        {this.props.children}
        {this.props.selected && this.renderSelection()}
      </div>
    );
  }

  private renderBackground(index: number) {
    const style: React.CSSProperties = {
      left: 1,
      position: "absolute",
      top: 1,
    };

    return (
      <img
        style={style}
        // TODO: if more than 8 locators are possible should be index % 8
        src={`assets/ui/locators/background-${index}.jpg`}
      />
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
        src="assets/ui/locators/selection.png"
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
