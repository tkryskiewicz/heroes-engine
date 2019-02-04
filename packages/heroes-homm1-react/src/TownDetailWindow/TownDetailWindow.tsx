import * as React from "react";

import { withGameWindow } from "heroes-homm1-react-components";

import * as styles from "./TownDetailWindow.module.scss";

import { buttonImages } from "../TownWindow/Treasury/assets";

import { ImageButton } from "../base";
import { StatusBar } from "./StatusBar";

export interface TownDetailWindowProps {
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

const TownDetailWindowWrapped = withGameWindow(640)(TownDetailWindow);

export {
  TownDetailWindowWrapped as TownDetailWindow,
};
