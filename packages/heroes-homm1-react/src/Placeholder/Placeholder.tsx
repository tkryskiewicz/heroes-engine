import * as React from "react";
import Measure, { ContentRect, Params } from "react-measure";

import * as styles from "./Placeholder.module.scss";

export interface PlaceholderProps {
  readonly name: string;
}

interface PlaceholderState {
  readonly width: number;
  readonly height: number;
}

export class Placeholder extends React.Component<PlaceholderProps, PlaceholderState> {
  public readonly state: PlaceholderState = {
    height: 0,
    width: 0,
  };

  public render() {
    return (
      <Measure
        bounds={true}
        onResize={this.onResize}
      >
        {this.renderContent}
      </Measure>
    );
  }

  private readonly onResize = (contentRect: ContentRect) => {
    this.setState({
      ...contentRect.bounds || { width: 0, height: 0 },
    });
  }

  private readonly renderContent = (params: Params) => {
    const { width, height } = this.state;

    return (
      <div
        className={styles.root}
        ref={params.measureRef}
      >
        <span className={styles.name}>
          {this.props.name}
        </span>
        <span className={styles.measures}>
          {Math.floor(width)} x {Math.floor(height)}
        </span>
      </div>
    );
  }
}
