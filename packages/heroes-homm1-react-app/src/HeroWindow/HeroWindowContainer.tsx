import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Troop } from "heroes-core";
import {
  getSkillNameMessage,
  HeroPortrait,
  HeroWindow,
  heroWindowMessages,
  HeroWindowProps,
  SkillDetailsPrompt,
  SkillInfo,
} from "heroes-homm1-react";

import { TroopWindow } from "../TroopWindow";

export interface HeroWindowContainerProps extends
  Pick<HeroWindowProps, Exclude<keyof HeroWindowProps, "renderHeroPortrait" | "renderTroopDetails">>,
  InjectedIntlProps {
  readonly visibleSkillDetails?: string;
  readonly onVisibleSkillDetailsChange: (skill?: string) => void;
  readonly dismissTroopPromptVisible: boolean;
  readonly onDismissTroopClick: (index: number) => void;
  readonly onConfirmDismissTroopClick: (hero: string, index: number) => void;
  readonly onCancelDismissTroopClick: () => void;
}

interface HeroWindowContainerState {
  readonly statusText: string;
}

class HeroWindowContainer extends React.Component<HeroWindowContainerProps, HeroWindowContainerState> {
  public readonly state: HeroWindowContainerState = {
    statusText: "",
  };

  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    return (
      <>
        <HeroWindow
          {...this.props}
          renderHeroPortrait={this.renderHeroPortrait}
          renderSkill={this.renderSkill}
          renderTroopDetails={this.renderTroopDetails}
          statusText={this.state.statusText}
        />
        {this.props.visibleSkillDetails && this.renderSkillDetails(this.props.visibleSkillDetails)}
      </>
    );
  }

  private readonly renderHeroPortrait = (hero: string) => {
    return (
      <HeroPortrait
        hero={hero}
      />
    );
  }

  private readonly renderSkill = (skill: string, value: number) => {
    return (
      <SkillInfo
        skill={skill}
        value={value}
        onMouseEnter={this.onSkillMouseEnter}
        onMouseLeave={this.onSkillMouseLeave}
        onClick={this.onSkillClick}
      />
    );
  }

  private readonly onSkillMouseEnter = (skill: string) => {
    const { formatMessage } = this.props.intl;

    const skillName = formatMessage(getSkillNameMessage(skill));

    const statusText = formatMessage(heroWindowMessages.statInfo, { statName: skillName });

    this.setStatusText(statusText);
  }

  private readonly onSkillMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onSkillClick = (skill: string) => {
    this.props.onVisibleSkillDetailsChange(skill);
  }

  private renderSkillDetails(skill: string) {
    return (
      <SkillDetailsPrompt
        visible={true}
        skill={skill}
        onConfirmClick={this.onCloseSkillDetailsClick}
      />
    );
  }

  private readonly onCloseSkillDetailsClick = () => {
    this.props.onVisibleSkillDetailsChange();
  }

  private readonly renderTroopDetails = (index: number, troop: Troop, dismissible: boolean) => {
    return (
      <TroopWindow
        visible={true}
        index={index}
        creature={troop.creature}
        count={troop.count}
        dismissible={dismissible}
        dismissPromptVisible={this.props.dismissTroopPromptVisible}
        onDismissClick={this.props.onDismissTroopClick}
        onConfirmDismissClick={this.onConfirmDismissTroopClick}
        onCancelDismissClick={this.props.onCancelDismissTroopClick}
        onExitClick={this.props.onExitTroopDetails}
      />
    );
  }

  private readonly onConfirmDismissTroopClick = (index: number) => {
    this.props.onConfirmDismissTroopClick(this.props.hero.id, index);
  }

  private setDefaultStatusText() {
    const statusText = this.props.intl.formatMessage(heroWindowMessages.defaultStatusText);

    this.setStatusText(statusText);
  }

  private setStatusText(statusText: string) {
    this.setState({
      statusText,
    });
  }
}

const HeroWindowContainerWrapped = injectIntl(HeroWindowContainer);

export {
  HeroWindowContainerWrapped as HeroWindowContainer,
};
