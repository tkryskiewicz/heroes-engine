import * as React from "react";
import { Omit } from "react-redux";

import { TownDetailWindow } from "./TownDetailWindow";

export interface InjectedProps {
  onStatusTextChange: (value: string) => void;
}

export interface Props {
  visible?: boolean;
  onExitClick?: () => void;
}

interface State {
  statusText: string;
}

export const withTownDetailWindow = () =>
  <C extends React.ComponentType<P>, P extends InjectedProps>(Component: React.ComponentClass<P>) =>
    class extends React.Component<Omit<JSX.LibraryManagedAttributes<C, P>, keyof InjectedProps> & Props, State> {
      public state: State = {
        statusText: "",
      };

      public render() {
        const { visible, onExitClick, ...rest } = this.props as Props;

        return (
          <TownDetailWindow
            visible={visible}
            statusText={this.state.statusText}
            onExitClick={onExitClick}
          >
            <Component
              {...rest as JSX.LibraryManagedAttributes<C, P>}
              onStatusTextChange={this.onStatusTextChange}
            />
          </TownDetailWindow>
        );
      }

      private onStatusTextChange = (value: string) => {
        this.setState({
          statusText: value,
        });
      }
    };
