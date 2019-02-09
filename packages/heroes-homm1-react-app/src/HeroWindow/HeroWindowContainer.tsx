import * as React from "react";

import { Troop } from "heroes-core";
import { HeroWindow, HeroWindowProps } from "heroes-homm1-react";

import { TroopWindow } from "../TroopWindow";

export interface HeroWindowContainerProps extends
  Pick<HeroWindowProps, Exclude<keyof HeroWindowProps, "renderTroopDetails">> {
  readonly dismissTroopPromptVisible: boolean;
  readonly onDismissTroopClick: (index: number) => void;
  readonly onConfirmDismissTroopClick: (hero: string, index: number) => void;
  readonly onCancelDismissTroopClick: () => void;
}

export class HeroWindowContainer extends React.Component<HeroWindowContainerProps> {
  public render() {
    return (
      <HeroWindow
        {...this.props}
        renderTroopDetails={this.renderTroopDetails}
      />
    );
  }

  private readonly renderTroopDetails = (index: number, troop: Troop, dismissible: boolean) => {
    return (
      <TroopWindow
        visible={true}
        index={index}
        creature={troop.creature}
        count={troop.count}
        dismissible={dismissible}
        dismissPromptVisible={this.props.dismissTroopPromptVisible}
        onDismissClick={this.props.onDismissTroopClick}
        onConfirmDismissClick={this.onConfirmDismissTroopClick}
        onCancelDismissClick={this.props.onCancelDismissTroopClick}
        onExitClick={this.props.onExitTroopDetails}
      />
    );
  }

  private readonly onConfirmDismissTroopClick = (index: number) => {
    this.props.onConfirmDismissTroopClick(this.props.hero.id, index);
  }
}
