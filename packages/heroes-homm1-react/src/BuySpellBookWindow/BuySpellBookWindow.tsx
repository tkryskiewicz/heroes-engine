import React from "react";
import { FormattedMessage } from "react-intl";

import { Resources } from "heroes-core";
import { ArtifactId } from "heroes-homm1";

import { ArtifactIcon, GameModal, ResourceCost } from "../base";
import { GameText } from "../core";
import { messages } from "./messages";

export interface BuySpellBookWindowProps {
  readonly visible?: boolean;
  readonly cost: Resources;
  readonly confirmDisabled?: boolean;
  readonly onConfirmClick?: () => void;
  readonly onCancelClick?: () => void;
}

export class BuySpellBookWindow extends React.Component<BuySpellBookWindowProps> {
  public render() {
    return (
      <GameModal
        type="okayCancel"
        size={3}
        visible={this.props.visible}
        confirmDisabled={this.props.confirmDisabled}
        onConfirmClick={this.props.onConfirmClick}
        onCancelClick={this.props.onCancelClick}
      >
        <GameText size="large">
          <FormattedMessage {...messages.title} />
        </GameText>
        <br />
        <ArtifactIcon
          size="large"
          artifact={ArtifactId.Spellbook}
        />
        <br />
        <GameText size="large">
          <FormattedMessage {...messages.cost} />
        </GameText>
        <br />
        <ResourceCost
          cost={this.props.cost}
        />
      </GameModal>
    );
  }
}
