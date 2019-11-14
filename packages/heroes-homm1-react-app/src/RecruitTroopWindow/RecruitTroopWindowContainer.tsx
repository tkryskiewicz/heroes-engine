import React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { divideResources, Resources } from "heroes-core";
import { noop } from "heroes-helpers";
import {
  CreatureIcon,
  getCreatureNameMessage,
  RecruitTroopWindow,
  recruitTroopWindowMessages,
  WithGameWindowProps,
} from "heroes-homm1-react";

interface Props extends WithGameWindowProps, InjectedIntlProps {
  readonly resources: Resources;
  readonly creature: string;
  readonly cost: Resources;
  readonly availableCount: number;
  readonly count: number;
  readonly onCountChange: (value: number) => void;
  readonly onOkayClick: (value: number) => void;
  readonly onCancelClick: () => void;
}

type DefaultProp =
  "onCountChange" |
  "onOkayClick" |
  "onCancelClick";

class RecruitTroopWindowContainer extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    onCancelClick: noop,
    onCountChange: noop,
    onOkayClick: noop,
  };

  public render() {
    const { formatMessage } = this.props.intl;

    const creatureName = formatMessage(getCreatureNameMessage(this.props.creature));

    const title = formatMessage(recruitTroopWindowMessages.title, { creature: creatureName });

    return (
      <RecruitTroopWindow
        visible={this.props.visible}
        title={title}
        renderCreature={this.renderCreature}
        cost={this.props.cost}
        availableCount={this.props.availableCount}
        count={this.props.count}
        onCountChange={this.onCountChange}
        onIncrementClick={this.onIncrementClick}
        onDecrementClick={this.onDecrementClick}
        onMaxClick={this.onMaxClick}
        okayDisabled={this.props.availableCount === 0}
        onOkayClick={this.onOkayClick}
        onCancelClick={this.props.onCancelClick}
      />
    );
  }

  private readonly renderCreature = () => {
    return (
      <CreatureIcon
        size="medium"
        creature={this.props.creature}
      />
    );
  }

  private readonly onIncrementClick = () => {
    this.onCountChange(this.props.count + 1);
  }

  private readonly onDecrementClick = () => {
    this.onCountChange(this.props.count - 1);
  }

  private readonly onMaxClick = () => {
    this.onCountChange(this.props.availableCount);
  }

  private readonly onOkayClick = () => {
    // FIXME: should this be handled here?
    if (this.props.count === 0) {
      this.props.onCancelClick();

      return;
    }

    this.props.onOkayClick(this.props.count);
  }

  private readonly onCountChange = (value: number) => {
    const count = Math.min(Math.max(0, value), this.getMaxCount());

    if (count !== this.props.count) {
      this.props.onCountChange(count);
    }
  }

  private getMaxCount() {
    return Math.min(divideResources(this.props.resources, this.props.cost), this.props.availableCount);
  }
}

const ContainerWrapped = injectIntl(RecruitTroopWindowContainer);

type ContainerWrappedProps = ExtractProps<typeof ContainerWrapped>;

export {
  ContainerWrapped as RecruitTroopWindowContainer,
  ContainerWrappedProps as RecruitTroopWindowContainerProps,
};
