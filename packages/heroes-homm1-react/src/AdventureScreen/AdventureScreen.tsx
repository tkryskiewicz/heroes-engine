import React from "react";

import * as styles from "./AdventureScreen.module.scss";

export interface AdventureScreenProps {
  readonly renderAdventureWindow: () => React.ReactNode;
  readonly renderWorldMap: () => React.ReactNode;
  readonly renderAdventureButtons: () => React.ReactNode;
  readonly renderHeroLocators: () => React.ReactNode;
  readonly renderTownLocators: () => React.ReactNode;
  readonly renderStatusWindow: () => React.ReactNode;
}

type DefaultProp =
  "renderAdventureWindow" |
  "renderWorldMap" |
  "renderAdventureButtons" |
  "renderHeroLocators" |
  "renderTownLocators" |
  "renderStatusWindow";

export class AdventureScreen extends React.Component<AdventureScreenProps> {
  public static readonly defaultProps: Pick<AdventureScreenProps, DefaultProp> = {
    renderAdventureButtons: () => undefined,
    renderAdventureWindow: () => undefined,
    renderHeroLocators: () => undefined,
    renderStatusWindow: () => undefined,
    renderTownLocators: () => undefined,
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
        <div className={styles.heroLocators}>
          {this.props.renderHeroLocators()}
        </div>
        <div className={styles.townLocators}>
          {this.props.renderTownLocators()}
        </div>
        <div className={styles.adventureButtons}>
          {this.props.renderAdventureButtons()}
        </div>
        <div className={styles.statusWindow}>
          {this.props.renderStatusWindow()}
        </div>
      </div>
    );
  }
}
