import React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { Resources } from "heroes-core";
import { noop } from "heroes-helpers";

import { GameModal, ResourceCost } from "../base";
import { CastleOptionIcon } from "../CastleOptionIcon";
import { GameText } from "../core";
import { getCreaturePluralNameMessage, getStructureDescriptionMessage, getStructureNameMessage } from "../messages";
import { messages } from "./messages";

interface BuildStructureWindowProps extends InjectedIntlProps {
  readonly town: string;
  readonly structure: string;
  // FIXME: should this be here? resolve somehow else? inject from state?
  readonly dwellingCreature?: string;
  readonly cost: Resources;
  readonly canBuild: boolean;
  readonly visible?: boolean;
  readonly onOkayClick: (town: string, structure: string) => void;
  readonly onCancelClick: () => void;
}

type DefaultProp =
  "onOkayClick" |
  "onCancelClick";

class BuildStructureWindow extends React.Component<BuildStructureWindowProps> {
  public static readonly defaultProps: Pick<BuildStructureWindowProps, DefaultProp> = {
    onCancelClick: noop,
    onOkayClick: noop,
  };

  public render() {
    const { structure, dwellingCreature } = this.props;
    const { formatMessage } = this.props.intl;

    const structureName = formatMessage(getStructureNameMessage(structure));
    const creatureName = dwellingCreature ?
      formatMessage(getCreaturePluralNameMessage(dwellingCreature)) :
      undefined;

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
            option={structure}
          />
        </div>
        <div>
          <GameText size="large">
            <FormattedMessage {...getStructureDescriptionMessage(structure)} values={{ structureName, creatureName }} />
          </GameText>
        </div>
        <div>
          <ResourceCost
            value={this.props.cost}
          />
        </div>
      </GameModal>
    );
  }

  private readonly onOkayClick = () => {
    this.props.onOkayClick(this.props.town, this.props.structure);
  }
}

const ComponentWrapped = injectIntl(BuildStructureWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as BuildStructureWindow,
  ComponentWrappedProps as BuildStructureWindowProps,
};
