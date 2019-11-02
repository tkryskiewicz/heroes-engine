import React from "react";

import * as styles from "./AdventureWindow.module.scss";

interface Props {
  readonly renderAdventureMap: () => React.ReactNode;
  readonly renderWorldMap: () => React.ReactNode;
  readonly renderAdventureButtons: () => React.ReactNode;
  readonly renderHeroLocators: () => React.ReactNode;
  readonly renderTownLocators: () => React.ReactNode;
  readonly renderStatusWindow: () => React.ReactNode;
}

export class AdventureWindow extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    renderAdventureButtons: () => undefined,
    renderAdventureMap: () => undefined,
    renderHeroLocators: () => undefined,
    renderStatusWindow: () => undefined,
    renderTownLocators: () => undefined,
    renderWorldMap: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        <div
          data-test-id="adventure-map"
          className={styles.adventureMap}
        >
          {this.props.renderAdventureMap()}
        </div>
        <div
          data-test-id="world-map"
          className={styles.worldMap}
        >
          {this.props.renderWorldMap()}
        </div>
        <div
          data-test-id="hero-locators"
          className={styles.heroLocators}
        >
          {this.props.renderHeroLocators()}
        </div>
        <div
          data-test-id="town-locators"
          className={styles.townLocators}
        >
          {this.props.renderTownLocators()}
        </div>
        <div
          data-test-id="adventure-buttons"
          className={styles.adventureButtons}
        >
          {this.props.renderAdventureButtons()}
        </div>
        <div
          data-test-id="status-window"
          className={styles.statusWindow}
        >
          {this.props.renderStatusWindow()}
        </div>
      </div>
    );
  }
}

export type AdventureWindowProps = ExtractPublicProps<typeof AdventureWindow>;
