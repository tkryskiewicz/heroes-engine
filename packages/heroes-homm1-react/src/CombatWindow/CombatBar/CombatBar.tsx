import * as React from "react";

import "./CombatBar.scss";

import { GameButton } from "../../base";
import { GameText } from "../../core";

export interface CombatBarProps {
  statusText: string;
  onAutoClick: () => void;
  onSkipClick: () => void;
}

type DefaultProp =
  "statusText" |
  "onAutoClick" |
  "onSkipClick";

export class CombatBar extends React.Component<CombatBarProps> {
  public static defaultProps: Pick<CombatBarProps, DefaultProp> = {
    onAutoClick: () => undefined,
    onSkipClick: () => undefined,
    statusText: "",
  };

  public render() {
    return (
      <div className="combat-bar">
        <div className="combat-bar-auto">
          <GameButton
            group="combat-bar"
            type="auto"
            onClick={this.props.onSkipClick}
          />
        </div>
        <div className="combat-bar-status-bar">
          <div className="combat-bar-status-bar-container">
            <div className="combat-bar-status-bar-background combat-bar-reverse" />
            <div className="combat-bar-status-bar-background" />
            <GameText size="large">
              {this.props.statusText}
            </GameText>
          </div>
        </div>
        <div className="combat-bar-skip">
          <GameButton
            group="combat-bar"
            type="skip"
            onClick={this.props.onSkipClick}
          />
        </div>
      </div>
    );
  }
}
