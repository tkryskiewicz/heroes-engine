import * as React from "react";

export interface HeroPortraitProps {
  size: "large" | "small";
  hero: string;
  onClick?: (hero: string) => void;
}

export class HeroPortrait extends React.Component<HeroPortraitProps> {
  public render() {
    return (
      <img
        src={`assets/heroes/${this.props.hero}/portrait-${this.props.size}.jpg`}
        onClick={this.onClick}
      />
    );
  }

  private onClick = () => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.hero);
  }
}