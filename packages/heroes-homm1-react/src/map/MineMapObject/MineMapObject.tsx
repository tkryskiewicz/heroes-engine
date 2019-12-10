import Classnames from "classnames";
import React from "react";

import { ObjectId, ResourceId } from "heroes-homm1";

import * as styles from "./MineMapObject.module.scss";

import { MapObject } from "../MapObject";

export interface MineMapObjectProps {
  readonly size: "large" | "small";
  readonly resource: string;
  readonly variant: string;
  readonly playerColor?: string;
}

export class MineMapObject extends React.Component<MineMapObjectProps> {
  public render() {
    const { size, resource, variant, playerColor } = this.props;

    return (
      <div className={Classnames(styles.root, styles[resource])}>
        <MapObject
          size={size}
          type={this.getObjectType(resource)}
          variant={variant}
        />
        {this.renderWagon(size, resource)}
        {playerColor && this.renderFlag(resource, playerColor)}
      </div>
    );
  }

  private getObjectType(resource: string) {
    switch (resource) {
      case ResourceId.Wood:
        return ObjectId.Sawmill;
      case ResourceId.Mercury:
        return ObjectId.Alchemist;
      default:
        return "mine";
    }
  }

  private renderWagon(size: string, resource: string) {
    if (resource === ResourceId.Wood || resource === ResourceId.Mercury) {
      return;
    }

    return (
      <img
        className={styles.wagon}
        src={`/assets/resources/${resource}/mine-wagon/${size}.png`}
      />
    );
  }

  private renderFlag(resource: string, playerColor: string) {
    const flag = resource !== ResourceId.Mercury ?
      "mine-flag" :
      "mine-flag-2";

    return (
      <img
        className={styles.flag}
        src={`/assets/playerColors/${playerColor}/${flag}.png`}
      />
    );
  }
}
