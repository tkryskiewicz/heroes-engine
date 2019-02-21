declare module "react-measure" {
  import * as React from "react";

  export interface SizeRect {
    readonly width: number;
    readonly height: number;
  }

  export interface SimplePositionRect {
    readonly top: number;
    readonly left: number;
  }

  export interface PositionRect {
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly left: number;
  }

  export type ClientRect = SizeRect & SimplePositionRect;
  export type OffsetRect = SizeRect & SimplePositionRect;
  export type ScrollRect = SizeRect & SimplePositionRect;
  export type BoundsRect = SizeRect & PositionRect;
  export type MarginRect = PositionRect;

  export interface Measures {
    readonly client?: ClientRect;
    readonly offset?: OffsetRect;
    readonly scroll?: ScrollRect;
    readonly bounds?: BoundsRect;
    readonly margin?: MarginRect;
  }

  export interface ContentRect extends Measures {
    readonly entry: DOMRectReadOnly;
  }

  export interface InjectedMeasureProps {
    readonly measureRef: React.Ref<any>;
    readonly measure: () => void;
    readonly contentRect: ContentRect;
  }

  export interface MeasureProps {
    readonly client?: boolean;
    readonly offset?: boolean;
    readonly scroll?: boolean;
    readonly bounds?: boolean;
    readonly margin?: boolean;
    readonly innerRef?: React.Ref<any>;
    readonly onResize?: (contentRect: ContentRect) => void;
    readonly children: (props: InjectedMeasureProps) => React.ReactNode;
  }

  class Measure extends React.Component<MeasureProps> { }

  export default Measure;

  type ExtractProps<C> = C extends React.ComponentType<infer P> ? P : never;

  type HocFunc = <C extends React.ComponentType<ExtractProps<C> & InjectedMeasureProps>, P = ExtractProps<C>>(
    component: C,
  ) => React.ComponentClass<Pick<JSX.LibraryManagedAttributes<C, P>, Exclude<keyof P, keyof InjectedMeasureProps>>>;

  export function withContentRect(
    types: keyof Measures | keyof Measures[],
  ): HocFunc;
}
