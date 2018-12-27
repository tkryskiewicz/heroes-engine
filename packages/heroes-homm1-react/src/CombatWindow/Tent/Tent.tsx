import * as React from "react";

import { CombatSide } from "heroes-core";

import "./Tent.scss";

export interface TentProps {
  side: CombatSide;
  alignment: string;
  heroClass: string;
  onClick: () => void;
}

export class Tent extends React.Component<TentProps> {
  public static defaultProps: Pick<TentProps, "onClick"> = {
    onClick: () => undefined,
  };

  public render() {
    return (
      <div
        className="tent"
        onClick={this.props.onClick}
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
}
