import { Row } from "antd";
import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { Army } from "heroes-core";

import * as styles from "./CombatLostWindow.module.scss";

import { AnimationImage, buttonImages } from "./assets";

import { ImageButton } from "../base";
import { CombatSummaryWindow } from "../CombatSummaryWindow";
import { GameText } from "../core";
import { getHeroNameMessage } from "../messages";
import { messages } from "./messages";

interface CombatLostWindowProps extends InjectedIntlProps {
  readonly hero: string;
  readonly isRetreat: boolean;
  readonly attackerCasualties: Army;
  readonly defenderCasualties: Army;
  readonly onOkayClick?: () => void;
}

class CombatLostWindow extends React.Component<CombatLostWindowProps> {
  public static readonly defaultProps: Pick<CombatLostWindowProps, "isRetreat"> = {
    isRetreat: false,
  };

  public render() {
    return (
      <CombatSummaryWindow
        attackerCasualties={this.props.attackerCasualties}
        defenderCasualties={this.props.defenderCasualties}
        actions={this.renderActions(this.props.onOkayClick)}
      >
        {this.renderAnimation()}
        <Row>
          {this.renderTitle(this.props.hero, this.props.isRetreat)}
        </Row>
      </CombatSummaryWindow>
    );
  }

  private renderAnimation() {
    return (
      <div className={styles.animationBackground}>
        <img
          className={styles.animation}
          src={AnimationImage}
        />
      </div>
    );
  }

  private renderTitle(hero: string, isRetreat: boolean) {
    const heroName = this.props.intl.formatMessage(getHeroNameMessage(hero));

    return (
      <GameText size="large">
        <FormattedMessage {...isRetreat ? messages.retreatTitle : messages.title} values={{ heroName }} />
      </GameText>
    );
  }

  private renderActions(onOkayClick?: () => void) {
    return (
      <ImageButton
        images={buttonImages.okay}
        onClick={onOkayClick}
      />
    );
  }
}

const CombatLostWindowWrapped = injectIntl(CombatLostWindow);

type CombatLostWindowWrappedProps = ExtractProps<typeof CombatLostWindowWrapped>;

export {
  CombatLostWindowWrapped as CombatLostWindow,
  CombatLostWindowWrappedProps as CombatLostWindowProps,
};
