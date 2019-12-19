import React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";

import { GameData, getArmySize, Hero } from "heroes-core";
import { noop } from "heroes-helpers";
import { Artifact, getLuckType, getMoraleType, isUltimateObjectData, LuckType, MoraleType } from "heroes-homm1";
import {
  AdditionalStatsInfo,
  AdditionalStatType,
  ArtifactSlot,
  artifactSlotMessages,
  Crest,
  DismissHeroPrompt,
  ExperienceDetailsPrompt,
  experienceMessages,
  getArmyStripStatusTextMessage,
  getArtifactNameMessage,
  getCreatureNameMessage,
  getHeroWindowTitle,
  getLuckNameMessage,
  getMoraleTypeNameMessage,
  getSkillNameMessage,
  HeroPortrait,
  HeroWindow,
  heroWindowMessages,
  kingdomOverviewWindowMessages,
  LuckDetailsPrompt,
  MoraleDetailsPrompt,
  SkillDetailsPrompt,
  SkillInfo,
  WithGameWindowProps,
} from "heroes-homm1-react";

import { KingdomOverviewWindow } from "../KingdomOverviewWindow";
import { TroopSlot } from "../TroopSlot";
import { TroopWindow } from "../TroopWindow";

interface HeroWindowContainerProps extends InjectedIntlProps, RouteComponentProps, WithGameWindowProps {
  readonly data: Pick<GameData, "objects">;
  readonly hero: Hero;
  readonly playerColor: string;

  readonly visibleSkillDetails?: string;
  readonly onVisibleSkillDetailsChange: (skill?: string) => void;
  readonly visibleAdditionalStatDetails?: string;
  readonly onVisibleAdditionalStatDetailsChange: (type?: string) => void;

  readonly selectedTroopIndex?: number;
  readonly onSelectTroop: (index: number) => void;
  readonly onSwapTroops: (index: number, withIndex: number) => void;

  readonly troopDetailsVisible: boolean;
  readonly onOpenTroopDetailsClick: () => void;
  readonly onCloseTroopDetailsClick: () => void;
  readonly onConfirmDismissTroopClick: (index: number) => void;

  readonly getArtifactDetails: (artifact: Artifact, props: {
    readonly onCloseClick: () => void;
    readonly onStatusTextChange: (statusText: string) => void;
  }) => React.ReactNode;
  readonly visibleArtifactDetails?: number;
  readonly onVisibleArtifactDetailsChange: (index?: number) => void;

  readonly dismissible: boolean;
  readonly onDismissHeroClick: () => void;
  readonly dismissHeroPromptVisible: boolean;
  readonly onConfirmDismissHeroClick: () => void;
  readonly onCancelDismissHeroClick: () => void;

  readonly onExitClick: () => void;
}

type DefaultProp =
  "dismissible" |
  "onConfirmDismissHeroClick";

interface HeroWindowContainerState {
  readonly statusText: string;
}

class HeroWindowContainer extends React.Component<HeroWindowContainerProps, HeroWindowContainerState> {
  public static readonly defaultProps: Pick<HeroWindowContainerProps, DefaultProp> = {
    dismissible: false,
    onConfirmDismissHeroClick: noop,
  };

  public readonly state: HeroWindowContainerState = {
    statusText: "",
  };

  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { hero, visibleSkillDetails, selectedTroopIndex, troopDetailsVisible, visibleArtifactDetails } = this.props;

    return (
      <>
        <HeroWindow
          visible={this.props.visible}
          title={getHeroWindowTitle(this.props.intl, hero.heroId, hero.heroClass)}
          renderHeroPortrait={this.renderHeroPortrait}
          renderSkill={this.renderSkill}
          renderAdditionalStats={this.renderAdditionalStats}
          renderCrest={this.renderCrest}
          renderTroop={this.renderTroop}
          renderArtifact={this.renderArtifact}
          dismissVisible={this.props.dismissible}
          onDismissMouseEnter={this.onDismissHeroMouseEnter}
          onDismissMouseLeave={this.onDismissHeroMouseLeave}
          onDismissClick={this.props.onDismissHeroClick}
          onExitMouseEnter={this.onExitMouseEnter}
          onExitMouseLeave={this.onExitMouseLeave}
          onExitClick={this.props.onExitClick}
          statusText={this.state.statusText}
        />
        {visibleSkillDetails && this.renderSkillDetails(visibleSkillDetails)}
        {selectedTroopIndex !== undefined && troopDetailsVisible && this.renderTroopDetails(selectedTroopIndex)}
        {visibleArtifactDetails !== undefined && this.renderArtifactDetails(visibleArtifactDetails)}
        {this.props.dismissible && this.renderDismissHeroPrompt(this.props.dismissHeroPromptVisible)}
        <Switch>
          <Route
            path={`${this.props.match.path}/kingdom-overview`}
            render={this.renderKingdomOverviewWindow}
          />
        </Switch>
      </>
    );
  }

  private readonly renderHeroPortrait = () => {
    return (
      <HeroPortrait
        hero={this.props.hero.heroId}
      />
    );
  }

  private readonly renderSkill = (index: number) => {
    const skill = Object.keys(this.props.hero.skills)[index];

    return (
      <SkillInfo
        skill={skill}
        value={this.props.hero.skills[skill] || 0}
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
    const { hero, playerColor } = this.props;

    return (
      <Crest
        playerColor={playerColor}
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
    const { hero } = this.props;
    const { formatMessage } = this.props.intl;

    let infoText = "";

    switch (type) {
      case AdditionalStatType.Morale:
        infoText = formatMessage(getMoraleTypeNameMessage(getMoraleType(hero.morale)));
        break;
      case AdditionalStatType.Luck:
        infoText = formatMessage(getLuckNameMessage(getLuckType(hero.luck)));
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
        content = this.renderMoraleDetails(getMoraleType(hero.morale));
        break;
      case AdditionalStatType.Luck:
        content = this.renderLuckDetails(getLuckType(hero.luck));
        break;
      case AdditionalStatType.Experience:
        content = this.renderExperienceDetails(hero.experience);
        break;
    }

    return content;
  }

  private renderMoraleDetails(value: MoraleType) {
    return (
      <MoraleDetailsPrompt
        visible={true}
        type={value}
        onConfirmClick={this.onCloseAdditionalStatDetailsClick}
      />
    );
  }

  private renderLuckDetails(value: LuckType) {
    return (
      <LuckDetailsPrompt
        visible={true}
        type={value}
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
    this.props.history.push(`${this.props.match.path}/kingdom-overview`);
  }

  private readonly renderKingdomOverviewWindow = () => {
    return (
      <KingdomOverviewWindow
        visible={true}
        onExitClick={this.onExitKingdomOverviewClick}
      />
    );
  }

  private readonly onExitKingdomOverviewClick = () => {
    this.props.history.push(this.props.match.path);
  }

  private readonly renderTroop = (index: number) => {
    const { army } = this.props.hero;

    const troop = army[index];

    return (
      <TroopSlot
        index={index}
        troop={troop}
        selected={this.props.selectedTroopIndex === index}
        onMouseEnter={this.onTroopMouseEnter}
        onMouseLeave={this.onTroopMouseLeave}
        onClick={this.onTroopClick}
      />
    );
  }

  private readonly onTroopMouseEnter = (index: number) => {
    const { formatMessage } = this.props.intl;

    const selectedTroop = this.props.selectedTroopIndex !== undefined ?
      this.props.hero.army[this.props.selectedTroopIndex] :
      undefined;
    const troop = this.props.hero.army[index];

    const selectedTroopName = selectedTroop && formatMessage(getCreatureNameMessage(selectedTroop.creature));
    const troopName = troop && formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(selectedTroop, troop, false), {
      selectedTroopName,
      troopName,
    });

    this.setStatusText(statusText);
  }

  private readonly onTroopMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onTroopClick = (index: number) => {
    const { selectedTroopIndex } = this.props;

    if (selectedTroopIndex === undefined && this.props.hero.army[index]) {
      this.onSelectTroop(index);
    } else if (index === selectedTroopIndex) {
      this.props.onOpenTroopDetailsClick();
    } else if (selectedTroopIndex !== undefined && index !== selectedTroopIndex) {
      this.onSwapTroops(selectedTroopIndex, index);
    }
  }

  private readonly onSelectTroop = (index: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.hero.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(troop, troop, false), { troopName });

    this.setStatusText(statusText);

    this.props.onSelectTroop(index);
  }

  private readonly onSwapTroops = (index: number, withIndex: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.hero.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(undefined, troop, false), { troopName });

    this.setStatusText(statusText);

    this.props.onSwapTroops(index, withIndex);
  }

  private readonly renderTroopDetails = (index: number) => {
    const { hero } = this.props;

    const troop = hero.army[index]!;

    const dismissible = getArmySize(hero.army) > 1;

    return (
      <TroopWindow
        visible={true}
        index={index}
        creature={troop.creature}
        skillEnhancements={hero.skills}
        count={troop.count}
        dismissible={dismissible}
        onConfirmDismissClick={this.props.onConfirmDismissTroopClick}
        onExitClick={this.props.onCloseTroopDetailsClick}
      />
    );
  }

  private readonly renderArtifact = (index: number) => {
    const artifact = this.props.hero.items[index];

    const artifactData = artifact ?
      this.props.data.objects[artifact.id] :
      undefined;

    return (
      <ArtifactSlot
        index={index}
        artifact={artifact ? artifact.id : undefined}
        isUltimate={artifactData && isUltimateObjectData(artifactData) ? artifactData.isUltimate : false}
        onMouseEnter={this.onArtifactMouseEnter}
        onMouseLeave={this.onArtifactMouseLeave}
        onClick={this.onArtifactClick}
      />
    );
  }

  private readonly onArtifactMouseEnter = (index: number) => {
    const artifact = this.props.hero.items[index];

    const message = artifact ?
      getArtifactNameMessage(artifact.id) :
      artifactSlotMessages.empty;

    const statusText = this.props.intl.formatMessage(message);

    this.setStatusText(statusText);
  }

  private readonly onArtifactMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onArtifactClick = (index: number) => {
    if (this.props.hero.items[index]) {
      this.props.onVisibleArtifactDetailsChange(index);
    }
  }

  private renderArtifactDetails(visibleArtifactDetails: number) {
    const artifact = this.props.hero.items[visibleArtifactDetails]!;

    return this.props.getArtifactDetails(artifact, {
      onCloseClick: this.onCloseArtifactDetailsClick,
      onStatusTextChange: this.onArtifactStatusTextChange,
    });
  }

  private readonly onArtifactStatusTextChange = (statusText: string) => {
    this.setStatusText(statusText);
  }

  private readonly onCloseArtifactDetailsClick = () => {
    this.setDefaultStatusText();

    this.props.onVisibleArtifactDetailsChange();
  }

  private readonly onDismissHeroMouseEnter = () => {
    const { intl, hero } = this.props;

    const title = getHeroWindowTitle(intl, hero.heroId, hero.heroClass);

    const statusText = this.props.intl.formatMessage(heroWindowMessages.dismiss, { heroName: title });

    this.setStatusText(statusText);
  }

  private readonly onDismissHeroMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private renderDismissHeroPrompt(visible: boolean) {
    return (
      <DismissHeroPrompt
        visible={visible}
        onConfirmClick={this.props.onConfirmDismissHeroClick}
        onCancelClick={this.props.onCancelDismissHeroClick}
      />
    );
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

const ContainerWrapped = withRouter(injectIntl(HeroWindowContainer));

type ContainerWrappedProps = ExtractProps<typeof ContainerWrapped>;

export {
  ContainerWrapped as HeroWindowContainer,
  ContainerWrappedProps as HeroWindowContainerProps,
};
