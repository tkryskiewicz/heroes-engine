import Classnames from "classnames";
import React from "react";

import { MapObjectId, ResourceId } from "heroes-homm1";

import * as styles from "./MineMapObject.module.scss";

import { MapObject } from "../MapObject";

export interface MineMapObjectProps {
  readonly size: "large" | "small";
  readonly resource: string;
  readonly variant: string;
  readonly alignment?: string;
}

export class MineMapObject extends React.Component<MineMapObjectProps> {
  public render() {
    const { size, resource, variant, alignment } = this.props;

    return (
      <div className={Classnames(styles.root, styles[resource])}>
        <MapObject
          size={size}
          type={this.getObjectType(resource)}
          variant={variant}
        />
        {this.renderWagon(size, resource)}
        {alignment && this.renderFlag(resource, alignment)}
      </div>
    );
  }

  private getObjectType(resource: string) {
    switch (resource) {
      case ResourceId.Wood:
        return MapObjectId.Sawmill;
      case ResourceId.Mercury:
        return MapObjectId.Alchemist;
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

  private renderFlag(resource: string, alignment: string) {
    const flag = resource !== ResourceId.Mercury ?
      "mine-flag" :
      "mine-flag-2";

    return (
      <img
        className={styles.flag}
        src={`/assets/alignments/${alignment}/${flag}.png`}
      />
    );
  }
}
