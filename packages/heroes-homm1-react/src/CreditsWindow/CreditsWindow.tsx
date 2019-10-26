import React from "react";

import * as styles from "./CreditsWindow.module.scss";

import { withGameWindow } from "../core";

interface Props {
  readonly onClick?: () => void;
}

class CreditsWindow extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    onClick: () => undefined,
  };

  public render() {
    return (
      <div
        data-test-id="root"
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
