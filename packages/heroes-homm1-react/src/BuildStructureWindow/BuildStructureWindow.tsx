import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Resources } from "heroes-core";

import { GameModal, ResourceCost } from "../base";
import { CastleOptionIcon } from "../CastleOptionIcon";
import { GameText } from "../core";
import { getStructureDescriptionMessage } from "../messages";
import { messages } from "./messages";

export interface BuildStructureWindowProps {
  readonly town: string;
  readonly structure: string;
  readonly cost: Resources;
  readonly canBuild: boolean;
  readonly visible?: boolean;
  readonly onOkayClick: (town: string, structure: string) => void;
  readonly onCancelClick: () => void;
}

export class BuildStructureWindow extends React.Component<BuildStructureWindowProps> {
  public static readonly defaultProps: Pick<BuildStructureWindowProps, "onOkayClick" | "onCancelClick"> = {
    onCancelClick: () => undefined,
    onOkayClick: () => undefined,
  };

  public render() {
    return (
      <GameModal
        type="okayCancel"
        size={5}
        confirmDisabled={!this.props.canBuild}
        visible={this.props.visible}
        onConfirmClick={this.onOkayClick}
        onCancelClick={this.props.onCancelClick}
      >
        <div>
          <GameText size="large">
            <FormattedMessage {...messages.title} />
          </GameText>
        </div>
        <div>
          <CastleOptionIcon
            town={this.props.town}
            option={this.props.structure}
          />
        </div>
        <div>
          <GameText size="large">
            <FormattedMessage {...getStructureDescriptionMessage(this.props.structure)} />
          </GameText>
        </div>
        <div>
          <ResourceCost
            cost={this.props.cost}
          />
        </div>
      </GameModal>
    );
  }

  private readonly onOkayClick = () => {
    this.props.onOkayClick(this.props.town, this.props.structure);
  }
}
