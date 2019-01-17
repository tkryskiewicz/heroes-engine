import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import "./SurrenderWindow.scss";

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
      <div className="surrender-window">
        <div className="surrender-window-hero-portrait">
          <Frame>
            <HeroPortrait
              hero={this.props.hero}
            />
          </Frame>
        </div>
        <div className="surrender-window-title">
          <GameText size="large">
            <FormattedMessage {...messages.title} values={{ heroName }} />
          </GameText>
        </div>
        <div className="surrender-window-content">
          <GameText size="large">
            <FormattedMessage {...messages.content} values={{ cost: this.props.cost }} />
          </GameText>
        </div>
        <div className="surrender-window-accept">
          <ImageButton
            images={buttonImages.accept}
            onClick={this.props.onAcceptClick}
          />
        </div>
        <div className="surrender-window-decline">
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
