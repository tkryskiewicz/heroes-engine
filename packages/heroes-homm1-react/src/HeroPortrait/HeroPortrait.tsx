import * as React from "react";

import { Frame } from "../Frame";
import "./HeroPortrait.scss";

export interface HeroPortraitProps {
  hero?: string;
  onClick?: (hero?: string) => void;
}

export class HeroPortrait extends React.Component<HeroPortraitProps> {
  public render() {
    return (
      <div
        className="hero-portrait"
        onClick={this.onClick}
      >
        <Frame>
          {this.props.hero ? this.renderPortrait(this.props.hero) : this.renderEmpty()}
        </Frame>
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
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.hero);
  }
}
