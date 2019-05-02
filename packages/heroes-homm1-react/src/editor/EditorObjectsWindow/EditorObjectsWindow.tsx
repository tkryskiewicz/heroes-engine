import * as React from "react";

import * as styles from "./EditorObjectsWindow.module.scss";

import { withGameWindow, WithGameWindowProps } from "../../core";

const GridWidth = 9;
const GridHeight = 9;

interface EditorObjectsWindowProps extends WithGameWindowProps {
  readonly renderObject: (index: number) => React.ReactNode;
}

class EditorObjectsWindow extends React.Component<EditorObjectsWindowProps> {
  public static readonly defaultProps: EditorObjectsWindowProps = {
    renderObject: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        {[...new Array(GridWidth * GridHeight).keys()].map((i) => this.renderObject(i))}
      </div>
    );
  }

  private renderObject(index: number) {
    return (
      <div
        key={index}
        className={styles.object}
      >
        {this.props.renderObject(index)}
      </div>
    );
  }
}

const ComponentWrapped = withGameWindow(640)(EditorObjectsWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as EditorObjectsWindow,
  ComponentWrappedProps as EditorObjectsWindowProps,
};
