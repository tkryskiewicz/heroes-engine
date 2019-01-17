import * as React from "react";

import { CombatSide } from "heroes-core";

import "./Tent.scss";

export interface TentProps {
  side: CombatSide;
  alignment: string;
  heroClass: string;
  onMouseEnter: (side: CombatSide) => void;
  onMouseLeave: (side: CombatSide) => void;
  onClick: (side: CombatSide) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class Tent extends React.Component<TentProps> {
  public static defaultProps: Pick<TentProps, DefaultProp> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div
        className="tent"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >
        <img
          className={`tent-background tent-background-${this.props.side}`}
          src={`/assets/heroClasses/${this.props.heroClass}/tent.png`}
        />
        <div className={`tent-banner tent-banner-${this.props.side}`}>
          <div className="tent-banner-container">
            <img src={`/assets/alignments/${this.props.alignment}/combat-banner.png`} />
            <div className="tent-banner-letter">
              <img
                src={`/assets/heroClasses/${this.props.heroClass}/letter.png`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private onMouseEnter = () => {
    this.props.onMouseEnter(this.props.side);
  }

  private onMouseLeave = () => {
    this.props.onMouseLeave(this.props.side);
  }

  private onClick = () => {
    this.props.onClick(this.props.side);
  }
}
