import * as Classnames from "classnames";
import * as React from "react";

import { Resource } from "heroes-homm1";

import * as styles from "./MineMapObject.module.scss";

import { MapObject } from "../MapObject";

export interface MineMapObjectProps {
  readonly resource: string;
  readonly alignment?: string;
}

export class MineMapObject extends React.Component<MineMapObjectProps> {
  public render() {
    const { resource, alignment } = this.props;

    return (
      <div className={Classnames(styles.root, styles[resource])}>
        <MapObject
          type={this.getObjectType(resource)}
        />
        {this.renderWagon(resource)}
        {alignment && this.renderFlag(resource, alignment)}
      </div>
    );
  }

  private getObjectType(resource: string) {
    switch (resource) {
      case Resource.Wood:
        return "sawmill";
      case Resource.Mercury:
        return "alchemist";
      default:
        return "mine";
    }
  }

  private renderWagon(resource: string) {
    if (resource === Resource.Wood || resource === Resource.Mercury) {
      return;
    }

    return (
      <img
        className={styles.wagon}
        src={`/assets/resources/${resource}/mine-wagon.png`}
      />
    );
  }

  private renderFlag(resource: string, alignment: string) {
    const flag = resource !== Resource.Mercury ?
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
