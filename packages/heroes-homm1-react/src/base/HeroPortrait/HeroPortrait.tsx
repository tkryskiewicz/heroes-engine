import * as React from "react";

import "./HeroPortrait.scss";

export interface HeroPortraitProps {
  hero?: string;
  onMouseEnter: (hero?: string) => void;
  onMouseLeave: (hero?: string) => void;
  onClick: (hero?: string) => void;
}

export class HeroPortrait extends React.Component<HeroPortraitProps> {
  public static defaultProps: Pick<HeroPortraitProps, "onMouseEnter" | "onMouseLeave" | "onClick"> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div
        className="hero-portrait"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
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

  private onMouseEnter = () => {
    this.props.onMouseEnter(this.props.hero);
  }

  private onMouseLeave = () => {
    this.props.onMouseLeave(this.props.hero);
  }

  private onClick = () => {
    this.props.onClick(this.props.hero);
  }
}
