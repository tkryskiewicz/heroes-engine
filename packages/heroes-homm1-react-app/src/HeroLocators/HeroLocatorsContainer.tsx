import * as React from "react";

import { HeroLocators, HeroLocatorsProps } from "heroes-homm1-react";

import { HeroWindow } from "../HeroWindow";

export interface HeroLocatorsContainerProps extends HeroLocatorsProps {
  readonly heroWindowVisible?: boolean;
}

export class HeroLocatorsContainer extends React.Component<HeroLocatorsContainerProps> {
  public render() {
    return (
      <>
        <HeroLocators
          {...this.props}
        />
        {this.props.heroWindowVisible && this.renderHeroWindow()}
      </>
    );
  }

  private renderHeroWindow() {
    return (
      <HeroWindow
        visible={true}
        // FIXME: should be optional
        dismissible={false}
      />
    );
  }
}
