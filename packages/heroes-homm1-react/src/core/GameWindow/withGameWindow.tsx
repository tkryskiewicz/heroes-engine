import * as React from "react";

import { GameWindow } from "./GameWindow";

export interface WithGameWindowProps {
  visible?: boolean;
}

export const withGameWindow = (width?: number) =>
  <TComponent extends React.ComponentType<TProps>, TProps>(Component: React.ComponentClass<TProps>) =>
    class extends React.Component<JSX.LibraryManagedAttributes<TComponent, TProps> & WithGameWindowProps> {
      public render() {
        const { visible, ...rest } = this.props as WithGameWindowProps;

        return (
          <GameWindow
            width={width}
            visible={visible}
          >
            <Component {...rest as JSX.LibraryManagedAttributes<TComponent, TProps>} />
          </GameWindow>
        );
      }
    };
