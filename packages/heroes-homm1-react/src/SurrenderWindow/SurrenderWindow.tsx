import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import * as styles from "./SurrenderWindow.module.scss";

import { buttonImages } from "./assets";

import { Frame, ImageButton } from "../base";
import { GameText, withGameWindow } from "../core";
import { getHeroNameMessage } from "../messages";
import { messages } from "./messages";

interface SurrenderWindowProps extends InjectedIntlProps {
  readonly hero: string;
  readonly renderHeroPortrait: () => React.ReactNode;
  readonly cost: number;
  readonly onAcceptClick: () => void;
  readonly onDeclineClick: () => void;
}

type DefaultProp =
  "renderHeroPortrait" |
  "onAcceptClick" |
  "onDeclineClick";

class SurrenderWindow extends React.Component<SurrenderWindowProps> {
  public static readonly defaultProps: Pick<SurrenderWindowProps, DefaultProp> = {
    onAcceptClick: () => undefined,
    onDeclineClick: () => undefined,
    renderHeroPortrait: () => undefined,
  };

  public render() {
    const heroName = this.props.intl.formatMessage(getHeroNameMessage(this.props.hero));

    return (
      <div className={styles.root}>
        <div className={styles.heroPortrait}>
          <Frame>
            {this.props.renderHeroPortrait()}
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
