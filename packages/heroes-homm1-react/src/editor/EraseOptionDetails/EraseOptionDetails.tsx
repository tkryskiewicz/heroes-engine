import * as React from "react";

import * as styles from "./EraseOptionDetails.module.scss";

import { typesButton } from "./assets";

import { ImageButton } from "../../base";

export interface EraseOptionDetailsProps {
  readonly onTypesClick?: () => void;
}

export class EraseOptionDetails extends React.Component<EraseOptionDetailsProps> {
  public render() {
    return (
      <div className={styles.root}>
        <div className={styles.types}>
          <ImageButton
            images={typesButton}
            onClick={this.props.onTypesClick}
          />
        </div>
      </div>
    );
  }
}
