import * as React from "react";

import "./AdventureOptions.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../base";
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
          <ImageButton
            images={buttonImages.viewWorld}
            onClick={this.props.onViewWorldClick}
          />
        </div>
        <div className="adventure-options-view-puzzle">
          <ImageButton
            images={buttonImages.viewPuzzle}
            onClick={this.props.onViewPuzzleClick}
          />
        </div>
        <div className="adventure-options-cast-spell">
          <ImageButton
            images={buttonImages.castSpell}
            onClick={this.props.onCastSpellClick}
          />
        </div>
        <div className="adventure-options-dig">
          <ImageButton
            images={buttonImages.dig}
            onClick={this.props.onDigClick}
          />
        </div>
        <div className="adventure-options-okay">
          <ImageButton
            images={buttonImages.okay}
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
