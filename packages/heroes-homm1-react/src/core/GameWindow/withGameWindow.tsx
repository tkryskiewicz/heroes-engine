import * as React from "react";

import { GameWindow } from "./GameWindow";

export interface WithGameWindowProps {
  visible?: boolean;
}

export const withGameWindow = (width?: number) =>
  <TProps extends object>(Component: React.ComponentClass<TProps>) =>
    class extends React.Component<TProps & WithGameWindowProps> {
      public render() {
        const { visible, ...rest } = this.props as WithGameWindowProps;

        return (
          <GameWindow
            width={width}
            visible={visible}
          >
            <Component {...rest as TProps} />
          </GameWindow>
        );
      }
    };
