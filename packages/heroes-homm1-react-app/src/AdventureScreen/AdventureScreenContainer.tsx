import * as React from "react";
import { FormattedMessage } from "react-intl";

import { AdventureButtons, AdventureScreen, AdventureScreenProps, GameModal, GameText } from "heroes-homm1-react";

import { messages } from "./messages";

interface Hero {
  readonly mobility: number;
}

export interface AdventureScreenContainerProps extends
  Pick<AdventureScreenProps, Exclude<keyof AdventureScreenProps, "renderAdventureButtons">> {
  readonly heroes: Hero[];
  readonly endTurnPromptVisible: boolean;
  readonly onEndTurnPromptVisibleChange: (value: boolean) => void;
  readonly onEndTurn: () => void;
}

type DefaultProp =
  "endTurnPromptVisible" |
  "onEndTurnPromptVisibleChange" |
  "onEndTurn";

export class AdventureScreenContainer extends React.Component<AdventureScreenContainerProps> {
  public static readonly defaultProps: Pick<AdventureScreenContainerProps, DefaultProp> = {
    endTurnPromptVisible: false,
    onEndTurn: () => undefined,
    onEndTurnPromptVisibleChange: () => undefined,
  };

  public render() {
    return (
      <>
        <AdventureScreen
          {...this.props}
          renderAdventureButtons={this.renderAdventureButtons}
        />
        {this.props.endTurnPromptVisible && this.renderEndTurnPrompt()}
      </>
    );
  }

  private readonly renderAdventureButtons = () => {
    return (
      <AdventureButtons
        onEndTurnClick={this.onEndTurnClick}
      />
    );
  }

  private readonly onEndTurnClick = () => {
    if (this.props.heroes.some((h) => h.mobility !== 0)) {
      this.props.onEndTurnPromptVisibleChange(true);

      return;
    }

    this.props.onEndTurn();
  }

  private renderEndTurnPrompt() {
    return (
      <GameModal
        type="yesNo"
        onConfirmClick={this.onConfirmEndTurnClick}
        onCancelClick={this.onCancelEndTurnClick}
        visible={true}
      >
        <GameText size="large">
          <FormattedMessage {...messages.endTurnWarning} />
        </GameText>
      </GameModal>
    );
  }

  private readonly onConfirmEndTurnClick = () => {
    this.props.onEndTurn();
  }

  private readonly onCancelEndTurnClick = () => {
    this.props.onEndTurnPromptVisibleChange(false);
  }
}
