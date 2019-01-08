import * as React from "react";

import { TownDetailWindow } from "./TownDetailWindow";

export interface WithTownDetailWindowProps {
  visible?: boolean;
  onExitClick?: () => void;
}

export const withTownDetailWindow = () =>
  <TComponent extends React.ComponentType<TProps>, TProps>(Component: React.ComponentClass<TProps>) =>
    class extends React.Component<JSX.LibraryManagedAttributes<TComponent, TProps> & WithTownDetailWindowProps> {
      public render() {
        const { visible, onExitClick, ...rest } = this.props as WithTownDetailWindowProps;

        return (
          <TownDetailWindow
            visible={visible}
            onExitClick={onExitClick}
          >
            <Component {...rest as JSX.LibraryManagedAttributes<TComponent, TProps>} />
          </TownDetailWindow>
        );
      }
    };
