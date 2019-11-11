import React from "react";

import { noop } from "heroes-helpers";

import * as styles from "./EditorObjectsWindow.module.scss";

import { ScreenWidth, withGameWindow, WithGameWindowProps } from "../../core";
import { EditorObjectSlot } from "../EditorObjectSlot";

const GridWidth = 9;
const GridHeight = 9;

interface EditorObjectsWindowProps extends WithGameWindowProps {
  readonly objects: string[];
  readonly renderObject: (object: string) => React.ReactNode;
  readonly onObjectClick: (object: string) => void;
}

type DefaultProp =
  "renderObject" |
  "onObjectClick";

class EditorObjectsWindow extends React.Component<EditorObjectsWindowProps> {
  public static readonly defaultProps: Pick<EditorObjectsWindowProps, DefaultProp> = {
    onObjectClick: noop,
    renderObject: noop,
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

    // FIXME: get rid of?
    const onClick = () => object && this.props.onObjectClick(object);

    return (
      <div
        key={index}
        className={styles.object}
      >
        <EditorObjectSlot
          size="small"
          onClick={onClick}
        >
          {object && this.props.renderObject(object)}
        </EditorObjectSlot>
      </div>
    );
  }
}

const ComponentWrapped = withGameWindow(ScreenWidth)(EditorObjectsWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as EditorObjectsWindow,
  ComponentWrappedProps as EditorObjectsWindowProps,
};
