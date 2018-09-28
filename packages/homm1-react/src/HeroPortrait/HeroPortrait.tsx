import * as React from "react";

export interface HeroPortraitProps {
  hero?: string;
  onClick?: (hero?: string) => void;
}

export class HeroPortrait extends React.Component<HeroPortraitProps> {
  public render() {
    const style: React.CSSProperties = {
      display: "inline-block",
    };

    return (
      <div
        style={style}
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
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.hero);
  }
}
