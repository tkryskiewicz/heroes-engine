import * as React from "react";

import * as styles from "./AdventureOptions.module.scss";

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
      <div className={styles.root}>
        <div className={styles.viewWorld}>
          <ImageButton
            images={buttonImages.viewWorld}
            onClick={this.props.onViewWorldClick}
          />
        </div>
        <div className={styles.viewPuzzle}>
          <ImageButton
            images={buttonImages.viewPuzzle}
            onClick={this.props.onViewPuzzleClick}
          />
        </div>
        <div className={styles.castSpell}>
          <ImageButton
            images={buttonImages.castSpell}
            onClick={this.props.onCastSpellClick}
          />
        </div>
        <div className={styles.dig}>
          <ImageButton
            images={buttonImages.dig}
            onClick={this.props.onDigClick}
          />
        </div>
        <div className={styles.okay}>
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
