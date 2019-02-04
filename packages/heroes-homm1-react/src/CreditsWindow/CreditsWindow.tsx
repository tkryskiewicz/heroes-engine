import * as React from "react";

import { withGameWindow } from "heroes-homm1-react-components";

import * as styles from "./CreditsWindow.module.scss";

export interface CreditsWindowProps {
  readonly onClick: () => void;
}

class CreditsWindow extends React.Component<CreditsWindowProps> {
  public static readonly defaultProps: CreditsWindowProps = {
    onClick: () => undefined,
  };

  public render() {
    return (
      <div
        className={styles.root}
        onClick={this.props.onClick}
      />
    );
  }
}

const CreditsWindowWrapped = withGameWindow(640)(CreditsWindow);

export {
  CreditsWindowWrapped as CreditsWindow,
};
