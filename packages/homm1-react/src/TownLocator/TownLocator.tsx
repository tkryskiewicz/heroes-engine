import * as React from "react";

export interface TownLocatorProps {
  index: number;
  town?: string;
  isCastleBuilt?: boolean;
  selected?: boolean;
  onClick?: (index: number) => void;
}

// TODO: refactor to use a common locator component
export class TownLocator extends React.Component<TownLocatorProps> {
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
        {this.props.town && this.renderTown(this.props.town, this.props.isCastleBuilt)}
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
        src={`assets/ui/locators/background-${index}.jpg`}
      />
    );
  }

  private renderTown(town: string, isCastleBuilt?: boolean) {
    const style: React.CSSProperties = {
      left: 1,
      position: "absolute",
      top: 1,
    };

    return (
      <img
        style={style}
        src={`assets/towns/${town}/${isCastleBuilt ? "castle" : "town"}-locator.jpg`}
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
