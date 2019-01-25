import * as React from "react";

import { GameWindow } from "./GameWindow";

type ExtractProps<C> = C extends React.ComponentType<infer P> ? P : never;

export interface WithGameWindowProps {
  readonly visible?: boolean;
}

export const withGameWindow = (width?: number) =>
  <C extends React.ComponentType<ExtractProps<C>>>(WrappedComponent: C) => {
    type P = JSX.LibraryManagedAttributes<C, ExtractProps<C>>;

    return class WithGameWindow extends React.Component<P & WithGameWindowProps> {
      public render() {
        const { visible, ...rest } = this.props as WithGameWindowProps;

        const Component = WrappedComponent as React.ComponentType<ExtractProps<C>>;

        return (
          <GameWindow
            width={width}
            visible={visible}
          >
            <Component {...rest as P} />
          </GameWindow>
        );
      }
    };
  };
