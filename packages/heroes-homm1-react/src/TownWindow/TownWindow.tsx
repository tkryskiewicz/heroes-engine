import * as React from "react";

import * as styles from "./TownWindow.module.scss";

import { BigBar } from "../base";
import { GameText, withGameWindow, WithGameWindowProps } from "../core";

const TroopSlotCount = 5;

interface TownWindowProps extends WithGameWindowProps {
  readonly townName: string;
  readonly renderTownView: () => React.ReactNode;
  readonly renderCrest: () => React.ReactNode;
  readonly renderGarrisonTroop: (index: number) => React.ReactNode;
  readonly renderHeroPortrait: () => React.ReactNode;
  readonly renderHeroTroop: (index: number) => React.ReactNode;
  readonly renderTreasury: () => React.ReactNode;
  readonly statusText: string;
}

type DefaultProp =
  "townName" |
  "renderTownView" |
  "renderCrest" |
  "renderGarrisonTroop" |
  "renderHeroPortrait" |
  "renderHeroTroop" |
  "renderTreasury" |
  "statusText";

class TownWindow extends React.Component<TownWindowProps> {
  public static readonly defaultProps: Pick<TownWindowProps, DefaultProp> = {
    renderCrest: () => undefined,
    renderGarrisonTroop: () => undefined,
    renderHeroPortrait: () => undefined,
    renderHeroTroop: () => undefined,
    renderTownView: () => undefined,
    renderTreasury: () => undefined,
    statusText: "",
    townName: "",
  };

  public render() {
    return (
      <div className={styles.root}>
        <div className={styles.townView}>
          {this.props.renderTownView()}
        </div>
        <div className={styles.strip}>
          <div className={styles.townName}>
            <GameText size="small">
              {this.props.townName}
            </GameText>
          </div>
          <div className={styles.crest}>
            {this.props.renderCrest()}
          </div>
          {this.renderGarrisonArmy()}
          <div className={styles.heroPortrait}>
            {this.props.renderHeroPortrait()}
          </div>
          {this.renderHeroArmy()}
          <div className={styles.treasury}>
            {this.props.renderTreasury()}
          </div>
        </div>
        <BigBar>
          {this.props.statusText}
        </BigBar>
      </div>
    );
  }

  private readonly renderGarrisonArmy = () => {
    const content = [...new Array(TroopSlotCount).keys()]
      .map((i) => this.renderGarrisonTroop(i));

    return (
      <div className={styles.garrisonArmy}>
        {content}
      </div>
    );
  }

  private readonly renderGarrisonTroop = (index: number) => {
    return (
      <div
        key={index}
        className={styles.troop}
      >
        {this.props.renderGarrisonTroop(index)}
      </div>
    );
  }

  private readonly renderHeroArmy = () => {
    const content = [...new Array(TroopSlotCount).keys()]
      .map((i) => this.renderHeroTroop(i));

    return (
      <div className={styles.heroArmy}>
        {content}
      </div>
    );
  }

  private readonly renderHeroTroop = (index: number) => {
    return (
      <div
        key={index}
        className={styles.troop}
      >
        {this.props.renderHeroTroop(index)}
      </div>
    );
  }
}

const ComponentWrapped = withGameWindow(640)(TownWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as TownWindow,
  ComponentWrappedProps as TownWindowProps,
};
