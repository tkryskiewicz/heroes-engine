import React from "react";

import { MapObjectOrientation } from "heroes-core";
import { noop } from "heroes-helpers";

import * as styles from "./HeroMapObject.module.scss";

import { withOrientableMapObject } from "../OrientableMapObject";

interface Props {
  readonly heroClass: string;
  readonly playerColor?: string;
  readonly orientation: MapObjectOrientation;
  readonly onClick: () => void;
}

class HeroMapObject extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, "onClick"> = {
    onClick: noop,
  };

  public render() {
    const { heroClass, playerColor, orientation } = this.props;

    return (
      <div
        data-test-id="root"
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

type ComponentWrappedProps = ExtractPublicProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as HeroMapObject,
  ComponentWrappedProps as HeroMapObjectProps,
};
