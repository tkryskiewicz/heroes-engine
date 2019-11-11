import React from "react";

import { MapObjectOrientation } from "heroes-core";

import * as styles from "./HeroMapObject.module.scss";

import { withOrientableMapObject } from "../OrientableMapObject";

interface HeroMapObjectProps {
  readonly heroClass: string;
  readonly playerColor?: string;
  readonly orientation: MapObjectOrientation;
  readonly onClick?: () => void;
}

// FIXME: barbarian assets have green flag embeded
class HeroMapObject extends React.Component<HeroMapObjectProps> {
  public render() {
    const { heroClass, playerColor, orientation } = this.props;

    return (
      <div
        className={styles.root}
        onClick={this.props.onClick}
      >
        <img src={`/assets/heroClasses/${heroClass}/mapObject/${orientation}.png`} />
        {playerColor && this.renderFlag(playerColor, orientation)}
      </div>
    );
  }

  private renderFlag(playerColor: string, orientation: MapObjectOrientation) {
    return (
      <img
        className={styles.flag}
        src={`/assets/playerColors/${playerColor}/flag/${orientation}.png`}
      />
    );
  }
}

const ComponentWrapped = withOrientableMapObject()(HeroMapObject);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as HeroMapObject,
  ComponentWrappedProps as HeroMapObjectProps,
};
