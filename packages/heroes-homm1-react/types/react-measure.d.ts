declare module "react-measure" {
  import * as React from "react";

  export interface ClientOffsetScroll {
    readonly top: number;
    readonly left: number;
    readonly width: number;
    readonly height: number;
  }

  export interface Bounds {
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly left: number;
    readonly width: number;
    readonly height: number;
  }

  export interface Margin {
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly left: number;
  }

  interface Measurements {
    readonly client?: ClientOffsetScroll;
    readonly offset?: ClientOffsetScroll;
    readonly scroll?: ClientOffsetScroll;
    readonly bounds?: Bounds;
    readonly margin?: Margin;
  }

  type Measurement = keyof Measurements;

  export interface ContentRect extends Measurements {
    readonly entry: DOMRectReadOnly;
  }

  export interface Params {
    readonly measureRef: React.Ref<any>;
    readonly measure: () => any;
    readonly contentRect: ContentRect;
  }

  type RenderChildren = (params: Params) => React.ReactNode;

  interface MeasureProps {
    readonly client?: boolean;
    readonly offset?: boolean;
    readonly scroll?: boolean;
    readonly bounds?: boolean;
    readonly margin?: boolean;
    // readonly [m: keyof Measurements]: boolean;
    readonly innerRef?: React.Ref<any>;
    readonly onResize?: (contentRect: ContentRect) => void;
    readonly children: RenderChildren;
  }

  class Measure extends React.Component<MeasureProps> { }

  export const withContentRect: (types: Measurement | Measurement[]) => RenderChildren;

  export default Measure;
}
