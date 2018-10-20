import * as React from "react";

export interface CrestProps {
  size: "large" | "small";
  alignment: string;
  heroClass: string;
  onClick?: (alignment: string, heroClass: string) => void;
}

export class Crest extends React.Component<CrestProps> {
  public render() {
    return (
      <img
        src={`assets/heroClasses/${this.props.heroClass}/crest-${this.props.alignment}-${this.props.size}.jpg`}
        onClick={this.onClick}
      />
    );
  }

  private onClick = () => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.alignment, this.props.heroClass);
  }
}
