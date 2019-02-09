import * as React from "react";

import { TownLocators, TownLocatorsProps } from "heroes-homm1-react";

import { TownWindow } from "../TownWindow";

export interface TownLocatorsContainerProps extends TownLocatorsProps {
  readonly townWindowVisible?: boolean;
}

export class TownLocatorsContainer extends React.Component<TownLocatorsContainerProps> {
  public render() {
    return (
      <>
        <TownLocators
          {...this.props}
        />
        {this.props.townWindowVisible && this.renderTownWindow()}
      </>
    );
  }

  private renderTownWindow() {
    return (
      <TownWindow
        visible={true}
      />
    );
  }
}
