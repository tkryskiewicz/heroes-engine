import * as React from "react";

import { Troop } from "heroes-core";
import { HeroPortrait, HeroWindow, HeroWindowProps } from "heroes-homm1-react";

import { TroopWindow } from "../TroopWindow";

export interface HeroWindowContainerProps extends
  Pick<HeroWindowProps, Exclude<keyof HeroWindowProps, "renderHeroPortrait" | "renderTroopDetails">> {
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
        renderHeroPortrait={this.renderHeroPortrait}
        renderTroopDetails={this.renderTroopDetails}
      />
    );
  }

  private readonly renderHeroPortrait = (hero: string) => {
    return (
      <HeroPortrait
        hero={hero}
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
