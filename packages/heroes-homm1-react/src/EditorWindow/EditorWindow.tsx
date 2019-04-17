import * as React from "react";

import * as styles from "./EditorWindow.module.scss";

export interface EditorWindowProps {
  readonly renderAdventureWindow: () => React.ReactNode;
  readonly renderWorldMap: () => React.ReactNode;
  readonly renderOptions: () => React.ReactNode;
  readonly renderOptionDetails: () => React.ReactNode;
  readonly renderButtons: () => React.ReactNode;
}

export class EditorWindow extends React.Component<EditorWindowProps> {
  public static readonly defaultProps: Pick<EditorWindowProps, keyof EditorWindowProps> = {
    renderAdventureWindow: () => undefined,
    renderButtons: () => undefined,
    renderOptionDetails: () => undefined,
    renderOptions: () => undefined,
    renderWorldMap: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        <div className={styles.adventureWindow}>
          {this.props.renderAdventureWindow()}
        </div>
        <div className={styles.worldMap}>
          {this.props.renderWorldMap()}
        </div>
        <div className={styles.options}>
          {this.props.renderOptions()}
        </div>
        <div className={styles.optionDetails}>
          {this.props.renderOptionDetails()}
        </div>
        <div className={styles.buttons}>
          {this.props.renderButtons()}
        </div>
      </div>
    );
  }
}
