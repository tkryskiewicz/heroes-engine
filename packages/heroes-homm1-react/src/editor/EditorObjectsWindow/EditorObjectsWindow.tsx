import * as React from "react";

import * as styles from "./EditorObjectsWindow.module.scss";

import { withGameWindow, WithGameWindowProps } from "../../core";
import { EditorObjectSlot } from "../EditorObjectSlot";

const GridWidth = 9;
const GridHeight = 9;

interface EditorObjectsWindowProps extends WithGameWindowProps {
  readonly objects: string[];
  readonly renderObject: (object: string) => React.ReactNode;
}

type DefaultProp =
  "renderObject";

class EditorObjectsWindow extends React.Component<EditorObjectsWindowProps> {
  public static readonly defaultProps: Pick<EditorObjectsWindowProps, DefaultProp> = {
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
    const object = this.props.objects[index];

    return (
      <div
        key={index}
        className={styles.object}
      >
        <EditorObjectSlot
          size="small"
        >
          {object && this.props.renderObject(object)}
        </EditorObjectSlot>
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
