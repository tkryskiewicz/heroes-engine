import * as React from "react";

import * as styles from "./CreditsWindow.module.scss";

import { withGameWindow } from "../core";

interface CreditsWindowProps {
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

const ComponentWrapped = withGameWindow(640)(CreditsWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as CreditsWindow,
  ComponentWrappedProps as CreditsWindowProps,
};
