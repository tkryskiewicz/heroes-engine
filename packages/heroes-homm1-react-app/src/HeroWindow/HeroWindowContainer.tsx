import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Troop } from "heroes-core";
import {
  AdditionalStatsInfo,
  AdditionalStatType,
  Crest,
  DismissHeroPrompt,
  ExperienceDetailsPrompt,
  experienceMessages,
  getHeroClassTitleMessage,
  getHeroNameMessage,
  getLuckNameMessage,
  getMoraleNameMessage,
  getSkillNameMessage,
  HeroPortrait,
  HeroWindow,
  heroWindowMessages,
  HeroWindowProps,
  kingdomOverviewWindowMessages,
  LuckDetailsPrompt,
  MoraleDetailsPrompt,
  SkillDetailsPrompt,
  SkillInfo,
} from "heroes-homm1-react";

import { TroopWindow } from "../TroopWindow";

interface HeroWindowContainerProps extends
  HeroWindowProps,
  InjectedIntlProps {
  readonly visibleSkillDetails?: string;
  readonly onVisibleSkillDetailsChange: (skill?: string) => void;
  readonly visibleAdditionalStatDetails?: string;
  readonly onVisibleAdditionalStatDetailsChange: (type?: string) => void;
  readonly onCrestClick: () => void;
  readonly dismissTroopPromptVisible: boolean;
  readonly onDismissTroopClick: (index: number) => void;
  readonly onConfirmDismissTroopClick: (hero: string, index: number) => void;
  readonly onCancelDismissTroopClick: () => void;
  readonly dismissible: boolean;
  readonly onDismissHeroClick: () => void;
  readonly dismissHeroPromptVisible: boolean;
  readonly onConfirmDismissHeroClick: (hero: string) => void;
  readonly onCancelDismissHeroClick: () => void;
}

type DefaultProp =
  "dismissible";

interface HeroWindowContainerState {
  readonly statusText: string;
}

class HeroWindowContainer extends React.Component<HeroWindowContainerProps, HeroWindowContainerState> {
  public static readonly defaultProps: Pick<HeroWindowContainerProps, DefaultProp> = {
    dismissible: false,
  };

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
          title={this.getHeroTitle()}
          renderHeroPortrait={this.renderHeroPortrait}
          renderSkill={this.renderSkill}
          renderAdditionalStats={this.renderAdditionalStats}
          renderCrest={this.renderCrest}
          renderTroopDetails={this.renderTroopDetails}
          dismissVisible={this.props.dismissible}
          onDismissMouseEnter={this.onDismissHeroMouseEnter}
          onDismissMouseLeave={this.onDismissHeroMouseLeave}
          onDismissClick={this.props.onDismissHeroClick}
          onExitMouseEnter={this.onExitMouseEnter}
          onExitMouseLeave={this.onExitMouseLeave}
          onExitClick={this.props.onExitClick}
          statusText={this.state.statusText}
        />
        {this.props.visibleSkillDetails && this.renderSkillDetails(this.props.visibleSkillDetails)}
        {this.props.dismissible && this.renderDismissHeroPrompt(this.props.dismissHeroPromptVisible)}
      </>
    );
  }

  private getHeroTitle() {
    const { hero } = this.props;
    const { formatMessage } = this.props.intl;

    const heroName = formatMessage(getHeroNameMessage(hero.id));

    const heroTitle = formatMessage(getHeroClassTitleMessage(hero.heroClass), { heroName });

    return heroTitle;
  }

  private readonly renderHeroPortrait = () => {
    return (
      <HeroPortrait
        hero={this.props.hero.id}
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

  private readonly renderCrest = () => {
    const { hero } = this.props;

    return (
      <Crest
        alignment={hero.alignment}
        heroClass={hero.heroClass}
        onMouseEnter={this.onCrestMouseEnter}
        onMouseLeave={this.onCrestMouseLeave}
        onClick={this.onCrestClick}
      />
    );
  }

  private readonly renderAdditionalStats = () => {
    const { hero, visibleAdditionalStatDetails } = this.props;

    const values = {
      [AdditionalStatType.Morale]: hero.morale,
      [AdditionalStatType.Luck]: hero.luck,
      [AdditionalStatType.Experience]: hero.experience,
    };

    return (
      <>
        <AdditionalStatsInfo
          values={values}
          onMouseEnter={this.onAdditionalStatMouseEnter}
          onMouseLeave={this.onAdditionalStatMouseLeave}
          onInfoMouseEnter={this.onInfoMouseEnter}
          onInfoMouseLeave={this.onInfoMouseLeave}
          onInfoClick={this.onInfoClick}
        />
        {visibleAdditionalStatDetails && this.renderAdditionalStatDetails(visibleAdditionalStatDetails)}
      </>
    );
  }

  private readonly onAdditionalStatMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(heroWindowMessages.additionalStats);

    this.setStatusText(statusText);
  }

  private readonly onAdditionalStatMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onInfoMouseEnter = (type: AdditionalStatType) => {
    const { formatMessage } = this.props.intl;

    let infoText = "";

    switch (type) {
      case AdditionalStatType.Morale:
        infoText = formatMessage(getMoraleNameMessage(this.props.hero.morale));
        break;
      case AdditionalStatType.Luck:
        infoText = formatMessage(getLuckNameMessage(this.props.hero.luck));
        break;
      case AdditionalStatType.Experience:
        infoText = formatMessage(experienceMessages.title);
        break;
    }

    const statusText = formatMessage(heroWindowMessages.statInfo, { statName: infoText });

    this.setStatusText(statusText);
  }

  private readonly onInfoMouseLeave = () => {
    this.onAdditionalStatMouseEnter();
  }

  private readonly onInfoClick = (type: string) => {
    this.props.onVisibleAdditionalStatDetailsChange(type);
  }

  private renderAdditionalStatDetails(type: string) {
    const { hero } = this.props;

    let content;

    switch (type) {
      case AdditionalStatType.Morale:
        content = this.renderMoraleDetails(hero.morale);
        break;
      case AdditionalStatType.Luck:
        content = this.renderLuckDetails(hero.luck);
        break;
      case AdditionalStatType.Experience:
        content = this.renderExperienceDetails(hero.experience);
        break;
    }

    return content;
  }

  private renderMoraleDetails(value: number) {
    return (
      <MoraleDetailsPrompt
        visible={true}
        value={value}
        onConfirmClick={this.onCloseAdditionalStatDetailsClick}
      />
    );
  }

  private renderLuckDetails(value: number) {
    return (
      <LuckDetailsPrompt
        visible={true}
        value={value}
        onConfirmClick={this.onCloseAdditionalStatDetailsClick}
      />
    );
  }

  private renderExperienceDetails(value: number) {
    return (
      <ExperienceDetailsPrompt
        visible={true}
        value={value}
        onConfirmClick={this.onCloseAdditionalStatDetailsClick}
      />
    );
  }

  private readonly onCloseAdditionalStatDetailsClick = () => {
    this.props.onVisibleAdditionalStatDetailsChange();
  }

  private readonly onCrestMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(kingdomOverviewWindowMessages.title);

    this.setStatusText(statusText);
  }

  private readonly onCrestMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onCrestClick = () => {
    this.props.onCrestClick();
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

  private readonly onDismissHeroMouseEnter = () => {
    const heroTitle = this.getHeroTitle();

    const statusText = this.props.intl.formatMessage(heroWindowMessages.dismiss, { heroName: heroTitle });

    this.setStatusText(statusText);
  }

  private readonly onDismissHeroMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private renderDismissHeroPrompt(visible: boolean) {
    return (
      <DismissHeroPrompt
        visible={visible}
        onConfirmClick={this.onConfirmDismissHeroClick}
        onCancelClick={this.props.onCancelDismissHeroClick}
      />
    );
  }

  private readonly onConfirmDismissHeroClick = () => {
    this.props.onConfirmDismissHeroClick(this.props.hero.id);
  }

  private readonly onExitMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(heroWindowMessages.exit);

    this.setStatusText(statusText);
  }

  private readonly onExitMouseLeave = () => {
    this.setDefaultStatusText();
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

type HeroWindowContainerWrappedProps = ExtractProps<typeof HeroWindowContainerWrapped>;

export {
  HeroWindowContainerWrapped as HeroWindowContainer,
  HeroWindowContainerWrappedProps as HeroWindowContainerProps,
};
