import React from "react";

import * as styles from "./CongratulationsWindow.module.scss";

import { GameText, withGameWindow } from "../core";

interface CongratulationsWindowProps {
  readonly onClick?: () => void;
}

class CongratulationsWindow extends React.Component<CongratulationsWindowProps> {
  public render() {
    return (
      <div
        className={styles.root}
        onClick={this.props.onClick}
      >
        <div className={styles.content}>
          <GameText size="large">
            {this.props.children}
          </GameText>
        </div>
      </div>
    );
  }
}

const ComponentWrapped = withGameWindow(640)(CongratulationsWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as CongratulationsWindow,
  ComponentWrappedProps as CongratulationsWindowProps,
};
