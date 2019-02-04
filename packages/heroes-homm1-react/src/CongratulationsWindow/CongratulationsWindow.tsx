import * as React from "react";

import { GameText, withGameWindow } from "heroes-homm1-react-components";

import * as styles from "./CongratulationsWindow.module.scss";

export interface CongratulationsWindowProps {
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

const CongratulationsWindowWrapped = withGameWindow(640)(CongratulationsWindow);

export {
  CongratulationsWindowWrapped as CongratulationsWindow,
};
