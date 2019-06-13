import * as React from "react";

import { GameData, HeroSkills } from "heroes-core";
import { LuckType, MoraleType } from "heroes-homm1";
import { CreatureIcon, DismissTroopPrompt, TroopWindow, WithGameWindowProps } from "heroes-homm1-react";

export interface TroopWindowContainerProps extends WithGameWindowProps {
  readonly data: Pick<GameData, "creatures">;
  readonly index: number;
  readonly creature: string;
  readonly skillEnhancements?: HeroSkills;
  readonly morale: MoraleType;
  readonly luck: LuckType;
  readonly count: number;
  readonly dismissible: boolean;
  readonly dismissPromptVisible: boolean;
  readonly onDismissClick: () => void;
  readonly onConfirmDismissClick: (index: number) => void;
  readonly onCancelDismissClick: () => void;
  readonly onExitClick: () => void;
}

type DefaultProp =
  "dismissible" |
  "dismissPromptVisible" |
  "onDismissClick" |
  "onConfirmDismissClick" |
  "onCancelDismissClick" |
  "onExitClick";

export class TroopWindowContainer extends React.Component<TroopWindowContainerProps> {
  public static readonly defaultProps: Pick<TroopWindowContainerProps, DefaultProp> = {
    dismissPromptVisible: false,
    dismissible: false,
    onCancelDismissClick: () => undefined,
    onConfirmDismissClick: () => undefined,
    onDismissClick: () => undefined,
    onExitClick: () => undefined,
  };

  public render() {
    return (
      <>
        <TroopWindow
          {...this.props}
          creature={this.props.data.creatures[this.props.creature]}
          renderCreature={this.renderCreature}
          dismissVisible={this.props.dismissible}
        />
        {this.props.dismissPromptVisible && this.renderDismissPrompt()}
      </>
    );
  }

  private readonly renderCreature = () => {
    return (
      <CreatureIcon
        size="large"
        creature={this.props.creature}
      />
    );
  }

  private renderDismissPrompt() {
    return (
      <DismissTroopPrompt
        visible={true}
        onConfirmClick={this.onConfirmDismiss}
        onCancelClick={this.props.onCancelDismissClick}
      />
    );
  }

  private readonly onConfirmDismiss = () => {
    this.props.onConfirmDismissClick(this.props.index);
  }
}
