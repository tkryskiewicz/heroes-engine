import React from "react";

import * as styles from "./AdventureOptionsWindow.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../base";
import { withGameWindow } from "../core";

interface Props {
  readonly onViewWorldClick?: () => void;
  readonly onViewPuzzleClick?: () => void;
  readonly onCastSpellClick?: () => void;
  readonly onDigClick?: () => void;
  readonly onOkayClick?: () => void;
}

class AdventureOptionsWindow extends React.Component<Props> {
  public render() {
    return (
      <div className={styles.root}>
        <ImageButton
          data-test-id="view-world"
          className={styles.viewWorld}
          images={buttonImages.viewWorld}
          onClick={this.props.onViewWorldClick}
        />
        <ImageButton
          data-test-id="view-puzzle"
          className={styles.viewPuzzle}
          images={buttonImages.viewPuzzle}
          onClick={this.props.onViewPuzzleClick}
        />
        <ImageButton
          data-test-id="cast-spell"
          className={styles.castSpell}
          images={buttonImages.castSpell}
          onClick={this.props.onCastSpellClick}
        />
        <ImageButton
          data-test-id="dig"
          className={styles.dig}
          images={buttonImages.dig}
          onClick={this.props.onDigClick}
        />
        <ImageButton
          data-test-id="okay"
          className={styles.okay}
          images={buttonImages.okay}
          onClick={this.props.onOkayClick}
        />
      </div>
    );
  }
}

const ComponentWrapped = withGameWindow(322)(AdventureOptionsWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as AdventureOptionsWindow,
  ComponentWrappedProps as AdventureOptionsWindowProps,
};
