import * as React from "react";

import * as styles from "./CongratulationsWindow.module.scss";

import { GameText, withGameWindow } from "../core";

export interface CongratulationsWindowProps {
  onClick?: () => void;
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

const CongratulationsWindowWrapped = withGameWindow(640)(CongratulationsWindow);

export {
  CongratulationsWindowWrapped as CongratulationsWindow,
};
