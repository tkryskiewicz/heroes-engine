import * as React from "react";
import { Omit } from "react-redux";

import { TownDetailWindow } from "./TownDetailWindow";

// FIXME: is this the best option??
interface Ref {
  onExitMouseEnter?: () => void;
  onExitMouseLeave?: () => void;
}

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
  <C extends React.ComponentType<P>, P extends InjectedProps>(Component: React.ComponentClass<P> & Ref) =>
    class extends React.Component<Omit<JSX.LibraryManagedAttributes<C, P>, keyof InjectedProps> & Props, State> {
      public state: State = {
        statusText: "",
      };

      private ref = React.createRef<React.Component<P> & Ref>();

      public render() {
        const { visible, onExitClick, ...rest } = this.props as Props;

        return (
          <TownDetailWindow
            visible={visible}
            statusText={this.state.statusText}
            onExitMouseEnter={this.onExitMouseEnter}
            onExitMouseLeave={this.onExitMouseLeave}
            onExitClick={onExitClick}
          >
            <Component
              ref={this.ref}
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

      private onExitMouseEnter = () => {
        if (this.ref.current && this.ref.current.onExitMouseEnter) {
          this.ref.current.onExitMouseEnter();
        }
      }

      private onExitMouseLeave = () => {
        if (this.ref.current && this.ref.current.onExitMouseLeave) {
          this.ref.current.onExitMouseLeave();
        }
      }
    };
