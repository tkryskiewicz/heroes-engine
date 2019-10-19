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
          className={`view-world ${styles.viewWorld}`}
          images={buttonImages.viewWorld}
          onClick={this.props.onViewWorldClick}
        />
        <ImageButton
          className={`view-puzzle ${styles.viewPuzzle}`}
          images={buttonImages.viewPuzzle}
          onClick={this.props.onViewPuzzleClick}
        />
        <ImageButton
          className={`cast-spell ${styles.castSpell}`}
          images={buttonImages.castSpell}
          onClick={this.props.onCastSpellClick}
        />
        <ImageButton
          className={`dig ${styles.dig}`}
          images={buttonImages.dig}
          onClick={this.props.onDigClick}
        />
        <ImageButton
          className={`okay ${styles.okay}`}
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
