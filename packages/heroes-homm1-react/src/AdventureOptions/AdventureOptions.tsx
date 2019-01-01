import * as React from "react";

import "./AdventureOptions.scss";

import { GameButton } from "../base";
import { withGameWindow } from "../core";

export interface AdventureOptionsProps {
  onViewWorldClick?: () => void;
  onViewPuzzleClick?: () => void;
  onCastSpellClick?: () => void;
  onDigClick?: () => void;
  onOkayClick?: () => void;
}

class AdventureOptions extends React.Component<AdventureOptionsProps> {
  public render() {
    return (
      <div className="adventure-options">
        <div className="adventure-options-view-world">
          <GameButton
            group="adventure-options"
            type="view-world"
            onClick={this.props.onViewWorldClick}
          />
        </div>
        <div className="adventure-options-view-puzzle">
          <GameButton
            group="adventure-options"
            type="view-puzzle"
            onClick={this.props.onViewPuzzleClick}
          />
        </div>
        <div className="adventure-options-cast-spell">
          <GameButton
            group="adventure-options"
            type="cast-spell"
            onClick={this.props.onCastSpellClick}
          />
        </div>
        <div className="adventure-options-dig">
          <GameButton
            group="adventure-options"
            type="dig"
            onClick={this.props.onDigClick}
          />
        </div>
        <div className="adventure-options-okay">
          <GameButton
            group="adventure-options"
            type="okay"
            onClick={this.props.onOkayClick}
          />
        </div>
      </div>
    );
  }
}

const AdventureOptionsWrapped = withGameWindow(322)(AdventureOptions);

export {
  AdventureOptionsWrapped as AdventureOptions,
};
