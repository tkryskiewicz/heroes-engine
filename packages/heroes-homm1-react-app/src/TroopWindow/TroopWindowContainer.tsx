import * as React from "react";

import { Creature } from "heroes-core";
import { CreatureIcon, DismissTroopPrompt, TroopWindow, TroopWindowProps } from "heroes-homm1-react";

export interface TroopWindowContainerProps extends
  Pick<TroopWindowProps, Exclude<keyof TroopWindowProps, "creature" | "renderCreature" | "dismissVisible">> {
  readonly creatureById: { readonly [id: string]: Creature; };
  readonly creature: string;
  readonly dismissible: boolean;
  readonly dismissPromptVisible: boolean;
  readonly onConfirmDismissClick: (index: number) => void;
  readonly onCancelDismissClick: () => void;
}

export class TroopWindowContainer extends React.Component<TroopWindowContainerProps> {
  public render() {
    const { creatureById, creature, dismissible, dismissPromptVisible, ...rest } = this.props;

    return (
      <>
        <TroopWindow
          {...rest}
          creature={creatureById[creature]}
          renderCreature={this.renderCreature}
        />
        {dismissPromptVisible && this.renderDismissPrompt()}
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
