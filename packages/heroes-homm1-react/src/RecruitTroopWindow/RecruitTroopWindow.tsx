import React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";

import { multiplyResources, Resources } from "heroes-core";
import { noop } from "heroes-helpers";

import * as styles from "./RecruitTroopWindow.module.scss";

import { buttonImages } from "./assets";

import { GameInputNumber, ImageButton, ResourceCost } from "../base";
import { GameText, withGameWindow } from "../core";
import { messages } from "./messages";

interface RecruitTroopWindowProps {
  readonly title: string;
  readonly renderCreature: () => React.ReactNode;
  readonly cost: Resources;
  readonly availableCount: number;
  readonly count: number;
  readonly onCountChange: (value: number) => void;
  readonly onIncrementClick: () => void;
  readonly onDecrementClick: () => void;
  readonly onMaxClick: () => void;
  readonly okayDisabled: boolean;
  readonly onOkayClick: () => void;
  readonly onCancelClick: () => void;
}

type DefaultProp =
  "renderCreature" |
  "onCountChange" |
  "onIncrementClick" |
  "onDecrementClick" |
  "onMaxClick" |
  "okayDisabled" |
  "onOkayClick" |
  "onCancelClick";

class RecruitTroopWindow extends React.Component<RecruitTroopWindowProps> {
  public static readonly defaultProps: Pick<RecruitTroopWindowProps, DefaultProp> = {
    okayDisabled: false,
    onCancelClick: noop,
    onCountChange: noop,
    onDecrementClick: noop,
    onIncrementClick: noop,
    onMaxClick: noop,
    onOkayClick: noop,
    renderCreature: noop,
  };

  public render() {
    return (
      <div className={styles.root}>
        <GameText
          data-test-id="title"
          className={styles.title}
          size="large"
        >
          {this.props.title}
        </GameText>
        <div
          data-test-id="creature"
          className={styles.creature}
        >
          {this.props.renderCreature()}
        </div>
        <div className={styles.availableCount}>
          <GameText
            data-test-id="available-count"
            size="normal"
          >
            <FormattedMessage {...messages.available} />:
            {" "}
            <FormattedNumber value={this.props.availableCount} />
          </GameText>
        </div>
        <div className={styles.cost}>
          <GameText
            className={styles.costTitle}
            size="small"
          >
            <FormattedMessage {...messages.cost} />:
          </GameText>
          <ResourceCost
            data-test-id="cost"
            textSize="small"
            value={this.props.cost}
          />
        </div>
        <div className={styles.count}>
          <GameText size="normal">
            <FormattedMessage {...messages.count} />:
          </GameText>
          {" "}
          <GameInputNumber
            data-test-id="count"
            min={0}
            max={this.props.availableCount}
            value={this.props.count}
            onChange={this.props.onCountChange}
          />
        </div>
        <ImageButton
          data-test-id="increment"
          className={styles.incrementCount}
          images={buttonImages.increment}
          onClick={this.props.onIncrementClick}
        />
        <br/>
        <ImageButton
          data-test-id="decrement"
          className={styles.decrementCount}
          images={buttonImages.decrement}
          onClick={this.props.onDecrementClick}
        />
        <ImageButton
          data-test-id="max"
          className={styles.max}
          images={buttonImages.max}
          onClick={this.props.onMaxClick}
        />
        <div className={styles.totalCost}>
          <GameText size="large">
            <FormattedMessage {...messages.totalCost} />:
          </GameText>
          <br/>
          <ResourceCost
            data-test-id="total-cost"
            textSize="small"
            value={multiplyResources(this.props.cost, this.props.count)}
          />
        </div>
        <ImageButton
          data-test-id="okay"
          className={styles.okay}
          images={buttonImages.okay}
          disabled={this.props.okayDisabled}
          onClick={this.props.onOkayClick}
        />
        <ImageButton
          data-test-id="cancel"
          className={styles.cancel}
          images={buttonImages.cancel}
          onClick={this.props.onCancelClick}
        />
      </div>
    );
  }
}

const ComponentWrapped = withGameWindow(320)(RecruitTroopWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as RecruitTroopWindow,
  ComponentWrappedProps as RecruitTroopWindowProps,
};
