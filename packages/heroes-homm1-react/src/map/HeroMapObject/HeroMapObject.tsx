import * as Classnames from "classnames";
import * as React from "react";

import { MapObjectOrientation } from "heroes-core";

import * as styles from "./HeroMapObject.module.scss";

interface Props {
  readonly heroClass: string;
  readonly alignment?: string;
  readonly orientation: MapObjectOrientation;
  readonly onClick?: () => void;
}

const orientationMap = {
  [MapObjectOrientation.North]: MapObjectOrientation.North,
  [MapObjectOrientation.NorthEast]: MapObjectOrientation.NorthEast,
  [MapObjectOrientation.East]: MapObjectOrientation.East,
  [MapObjectOrientation.SouthEast]: MapObjectOrientation.SouthEast,
  [MapObjectOrientation.South]: MapObjectOrientation.South,
  [MapObjectOrientation.SouthWest]: MapObjectOrientation.SouthEast,
  [MapObjectOrientation.West]: MapObjectOrientation.East,
  [MapObjectOrientation.NorthWest]: MapObjectOrientation.NorthEast,
};

// FIXME: barbarian assets have green flag embeded
export class HeroMapObject extends React.Component<Props> {
  public render() {
    const { heroClass, alignment, orientation } = this.props;

    return (
      <div
        className={Classnames(styles.root, orientationMap[orientation] !== orientation && styles.invert)}
        onClick={this.props.onClick}
      >
        <img src={`/assets/heroClasses/${heroClass}/mapObject/${orientationMap[orientation]}.png`} />
        {alignment && this.renderFlag(alignment, orientation)}
      </div>
    );
  }

  private renderFlag(alignment: string, orientation: MapObjectOrientation) {
    return (
      <img
        className={styles.flag}
        src={`/assets/alignments/${alignment}/flag/${orientationMap[orientation]}.png`}
      />
    );
  }
}

export {
  Props as HeroMapObjectProps,
};
