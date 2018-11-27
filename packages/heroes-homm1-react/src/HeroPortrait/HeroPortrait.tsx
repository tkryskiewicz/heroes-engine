import * as React from "react";

import "./HeroPortrait.scss";

export interface HeroPortraitProps {
  hero?: string;
  onClick: (hero?: string) => void;
}

export class HeroPortrait extends React.Component<HeroPortraitProps> {
  public static defaultProps: Pick<HeroPortraitProps, "onClick"> = {
    onClick: () => undefined,
  }

  public render() {
    return (
      <div
        className="hero-portrait"
        onClick={this.onClick}
      >
        {this.props.hero ? this.renderPortrait(this.props.hero) : this.renderEmpty()}
      </div>
    );
  }

  private renderPortrait(hero: string) {
    return (
      <img src={`assets/heroes/${hero}/portrait.jpg`} />
    );
  }

  private renderEmpty() {
    return (
      <img src={`assets/heroes/portrait-empty.jpg`} />
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.hero);
  }
}
