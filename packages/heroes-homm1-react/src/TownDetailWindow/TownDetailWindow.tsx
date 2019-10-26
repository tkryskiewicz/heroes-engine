import React from "react";

import * as styles from "./TownDetailWindow.module.scss";

// FIXME: find right assets
import { buttonImages } from "../base/Treasury/assets";

import { ImageButton } from "../base";
import { ScreenWidth, withGameWindow } from "../core";
import { StatusBar } from "./StatusBar";

interface TownDetailWindowProps {
  readonly statusText: string;
  readonly onExitMouseEnter: () => void;
  readonly onExitMouseLeave: () => void;
  readonly onExitClick: () => void;
}

type DefaultProp =
  "statusText" |
  "onExitMouseEnter" |
  "onExitMouseLeave" |
  "onExitClick";

class TownDetailWindow extends React.Component<TownDetailWindowProps> {
  public static readonly defaultProps: Pick<TownDetailWindowProps, DefaultProp> = {
    onExitClick: () => undefined,
    onExitMouseEnter: () => undefined,
    onExitMouseLeave: () => undefined,
    statusText: "",
  };

  public render() {
    return (
      <div className={styles.root}>
        {this.props.children}
        <div className={styles.statusBar}>
          <StatusBar
            statusText={this.props.statusText}
          />
        </div>
        <div className={styles.exit}>
          <ImageButton
            images={buttonImages.exit}
            onMouseEnter={this.props.onExitMouseEnter}
            onMouseLeave={this.props.onExitMouseLeave}
            onClick={this.props.onExitClick}
          />
        </div>
      </div>
    );
  }
}

const ComponentWrapped = withGameWindow(ScreenWidth)(TownDetailWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as TownDetailWindow,
  ComponentWrappedProps as TownDetailWindowProps,
};
