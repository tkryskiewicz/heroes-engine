import React from "react";

import * as styles from "./CreditsWindow.module.scss";

import { withGameWindow } from "../core";

interface Props {
  readonly onClick?: () => void;
}

class CreditsWindow extends React.Component<Props> {
  public render() {
    return (
      <div
        className={`root ${styles.root}`}
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
