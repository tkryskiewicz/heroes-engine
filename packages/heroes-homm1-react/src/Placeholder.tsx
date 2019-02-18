import * as React from "react";
import Measure, { ContentRect, Params } from "react-measure";

import { GameText } from "./core";

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

    const styles: React.CSSProperties = {
      backgroundColor: "darkgrey",
      height: "100%",
      textAlign: "center",
      width: "100%",
    };

    return (
      <div
        ref={params.measureRef}
        style={styles}
      >
        <GameText size="normal">
          {this.props.name}
          <br />
          {Math.floor(width)}px x {Math.floor(height)}px
        </GameText>
      </div>
    );
  }
}
