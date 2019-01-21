import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import * as styles from "./SurrenderWindow.module.scss";

import { buttonImages } from "./assets";

import { Frame, HeroPortrait, ImageButton } from "../base";
import { GameText, withGameWindow } from "../core";
import { getHeroNameMessage } from "../messages";
import { messages } from "./messages";

export interface SurrenderWindowProps {
  hero: string;
  cost: number;
  onAcceptClick: () => void;
  onDeclineClick: () => void;
}

class SurrenderWindow extends React.Component<SurrenderWindowProps & InjectedIntlProps> {
  public render() {
    const heroName = this.props.intl.formatMessage(getHeroNameMessage(this.props.hero));

    return (
      <div className={styles.root}>
        <div className={styles.heroPortrait}>
          <Frame>
            <HeroPortrait
              hero={this.props.hero}
            />
          </Frame>
        </div>
        <div className={styles.title}>
          <GameText size="large">
            <FormattedMessage {...messages.title} values={{ heroName }} />
          </GameText>
        </div>
        <div className={styles.content}>
          <GameText size="large">
            <FormattedMessage {...messages.content} values={{ cost: this.props.cost }} />
          </GameText>
        </div>
        <div className={styles.accept}>
          <ImageButton
            images={buttonImages.accept}
            onClick={this.props.onAcceptClick}
          />
        </div>
        <div className={styles.decline}>
          <ImageButton
            images={buttonImages.decline}
            onClick={this.props.onDeclineClick}
          />
        </div>
      </div>
    );
  }
}

const SurrenderWindowWrapped = injectIntl(
  withGameWindow(470)(SurrenderWindow),
);

export {
  SurrenderWindowWrapped as SurrenderWindow,
};
