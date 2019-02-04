import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { GameText, withGameWindow } from "heroes-homm1-react-components";

import * as styles from "./SurrenderWindow.module.scss";

import { buttonImages } from "./assets";

import { Frame, HeroPortrait, ImageButton } from "../base";
import { getHeroNameMessage } from "../messages";
import { messages } from "./messages";

interface SurrenderWindowProps extends InjectedIntlProps {
  readonly hero: string;
  readonly cost: number;
  readonly onAcceptClick: () => void;
  readonly onDeclineClick: () => void;
}

class SurrenderWindow extends React.Component<SurrenderWindowProps> {
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

type SurrenderWindowWrappedProps = ExtractProps<typeof SurrenderWindowWrapped>;

export {
  SurrenderWindowWrapped as SurrenderWindow,
  SurrenderWindowWrappedProps as SurrenderWindowProps,
};
