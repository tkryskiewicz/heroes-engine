import * as React from "react";

import { TownDetailWindow } from "./TownDetailWindow";

// NOTE: used React.ComponentClass, because we use ref
type ExtractProps<C> = C extends React.ComponentClass<infer P> ? P : never;

export interface Ref {
  readonly onExitMouseEnter?: () => void;
  readonly onExitMouseLeave?: () => void;
}

export interface InjectedProps {
  readonly onStatusTextChange: (value: string) => void;
}

export interface Props {
  readonly visible?: boolean;
  readonly onExitClick?: () => void;
}

interface State {
  readonly statusText: string;
}

export const withTownDetailWindow = () =>
  <C extends React.ComponentClass<ExtractProps<C> & InjectedProps> & Ref>(WrappedComponent: C) => {
    type P = JSX.LibraryManagedAttributes<C, ExtractProps<C>>;

    return class extends React.Component<Pick<P, Exclude<keyof P, keyof InjectedProps>> & Props, State> {
      public readonly state: State = {
        statusText: "",
      };

      private readonly ref = React.createRef<C>();

      public render() {
        const { visible, onExitClick, ...rest } = this.props as Props;

        const Component = WrappedComponent as React.ComponentClass<ExtractProps<C> & InjectedProps>;

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
              {...rest as P}
              onStatusTextChange={this.onStatusTextChange}
            />
          </TownDetailWindow>
        );
      }

      private readonly onStatusTextChange = (value: string) => {
        this.setState({
          statusText: value,
        });
      }

      private readonly onExitMouseEnter = () => {
        if (this.ref.current && this.ref.current.onExitMouseEnter) {
          this.ref.current.onExitMouseEnter();
        }
      }

      private readonly onExitMouseLeave = () => {
        if (this.ref.current && this.ref.current.onExitMouseLeave) {
          this.ref.current.onExitMouseLeave();
        }
      }
    };
  };
