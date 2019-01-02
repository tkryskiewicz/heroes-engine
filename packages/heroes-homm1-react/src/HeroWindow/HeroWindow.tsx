import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { getArmySize, Hero, HeroSkills, Troop } from "heroes-core";
import { ArtifactLimit, getCurrentLevel, getNextLevelExperience, SkillIds } from "heroes-homm1";

import "./HeroWindow.scss";

import { ArmyStrip, armyStripMessages, Crest, GameButton, GameModal, HeroPortrait } from "../base";
import { GameParagraph, GameText, GameWindow } from "../core";
import { kingdomOverviewWindowMessages } from "../KingdomOverviewWindow";
import {
  experienceMessages,
  getArtifactDescriptionMessage,
  getArtifactNameMessage,
  getCreatureNameMessage,
  getHeroClassNameMessage,
  getHeroClassTitleMessage,
  getHeroNameMessage,
  getLuckDescriptionMessage,
  getLuckNameMessage,
  getMoraleDescriptionMessage,
  getMoraleNameMessage,
  getSkillDescriptionMessage,
  getSkillNameMessage,
  luckMessages,
  moraleMessages,
} from "../messages";
import { TroopWindow } from "../TroopWindow";
import { ArtifactSlot, artifactSlotMessages } from "./ArtifactSlot";
import { messages } from "./messages";
import { MiscInfo, MiscInfoType } from "./MiscInfo";
import { SkillInfo } from "./SkillInfo";

export interface HeroWindowProps {
  hero: Hero;
  dismissible: boolean;
  visible?: boolean;
  visibleSkillDetails?: string;
  onVisibleSkillDetailsChange: (skill?: string) => void;
  visibleMiscInfoDetails?: string;
  onVisibleMiscInfoDetailsChange: (type?: string) => void;
  onCrestClick: () => void;
  selectedTroopIndex?: number;
  onSelectTroop: (index: number) => void;
  // TODO: should this be onOpenTroopDetails?
  onSelectedTroopClick: (index: number) => void;
  onSwapTroops: (hero: string, index: number, withIndex: number) => void;
  troopDetailsVisible: boolean;
  dismissTroopPromptVisible: boolean;
  onDismissTroopClick: (index: number) => void;
  onCancelDismissTroopClick: (index: number) => void;
  onConfirmDismissTroopClick: (hero: string, index: number) => void;
  onExitTroopDetails: () => void;
  visibleArtifactDescription?: number;
  onVisibleArtifactDescriptionChange: (index?: number) => void;
  dismissHeroPromptVisible: boolean;
  onDismissHeroClick: () => void;
  onCancelDismissHeroClick: () => void;
  onConfirmDismissHeroClick: (hero: string) => void;
  onExitClick: () => void;
}

type DefaultProp =
  "dismissible" |
  "onCrestClick" |
  "onVisibleSkillDetailsChange" |
  "onVisibleMiscInfoDetailsChange" |
  "onSelectTroop" |
  "onSelectedTroopClick" |
  "onSwapTroops" |
  "troopDetailsVisible" |
  "dismissTroopPromptVisible" |
  "onDismissTroopClick" |
  "onCancelDismissTroopClick" |
  "onConfirmDismissTroopClick" |
  "onExitTroopDetails" |
  "onVisibleArtifactDescriptionChange" |
  "dismissHeroPromptVisible" |
  "onDismissHeroClick" |
  "onCancelDismissHeroClick" |
  "onConfirmDismissHeroClick" |
  "onExitClick";

interface HeroWindowState {
  statusText: string;
}

class HeroWindow extends React.Component<HeroWindowProps & InjectedIntlProps, HeroWindowState> {
  public static defaultProps: Pick<HeroWindowProps, DefaultProp> = {
    dismissHeroPromptVisible: false,
    dismissTroopPromptVisible: false,
    dismissible: false,
    onCancelDismissHeroClick: () => undefined,
    onCancelDismissTroopClick: () => undefined,
    onConfirmDismissHeroClick: () => undefined,
    onConfirmDismissTroopClick: () => undefined,
    onCrestClick: () => undefined,
    onDismissHeroClick: () => undefined,
    onDismissTroopClick: () => undefined,
    onExitClick: () => undefined,
    onExitTroopDetails: () => undefined,
    onSelectTroop: () => undefined,
    onSelectedTroopClick: () => undefined,
    onSwapTroops: () => undefined,
    onVisibleArtifactDescriptionChange: () => undefined,
    onVisibleMiscInfoDetailsChange: () => undefined,
    onVisibleSkillDetailsChange: () => undefined,
    troopDetailsVisible: false,
  };

  public state: HeroWindowState = {
    statusText: "",
  };

  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { hero, selectedTroopIndex } = this.props;

    return (
      <GameWindow
        width={640}
        visible={this.props.visible}
      >
        <div className="hero-window">
          <div className="hero-window-name">
            <GameText size="large">
              {this.getHeroTitle()}
            </GameText>
          </div>
          <div className="hero-window-portrait">
            <HeroPortrait
              hero={hero.id}
            />
          </div>
          {this.renderSkills(hero.skills, this.props.visibleSkillDetails)}
          {this.renderMiscInfo(hero, this.props.visibleMiscInfoDetails)}
          <div className="hero-window-crest">
            <Crest
              alignment={hero.alignment}
              heroClass={hero.heroClass}
              onMouseEnter={this.onCrestMouseEnter}
              onMouseLeave={this.onCrestMouseLeave}
              onClick={this.props.onCrestClick}
            />
          </div>
          {this.renderArmy(hero, selectedTroopIndex)}
          {this.props.dismissible && this.renderDismissal(this.props.dismissHeroPromptVisible)}
          {this.renderArtifacts(hero.artifacts, this.props.visibleArtifactDescription)}
          <div className="hero-window-exit">
            <GameButton
              group="hero-window"
              type="exit"
              onMouseEnter={this.onExitMouseEnter}
              onMouseLeave={this.onExitMouseLeave}
              onClick={this.props.onExitClick}
            />
          </div>
          <div className="hero-window-title">
            <GameText size="large">
              {this.state.statusText}
            </GameText>
          </div>
        </div>
      </GameWindow>
    );
  }

  private setStatInfoStatusText(statName: string) {
    const statusText = this.props.intl.formatMessage(messages.statInfo, { statName });

    this.setStatusText(statusText);
  }

  private getHeroTitle() {
    const { formatMessage } = this.props.intl;

    const heroName = formatMessage(getHeroNameMessage(this.props.hero.id));

    const heroTitle = formatMessage(getHeroClassTitleMessage(this.props.hero.heroClass), { heroName });

    return heroTitle;
  }

  private renderSkills(skills: HeroSkills, visibleSkillDetails?: string) {
    const content = SkillIds.map((s) => this.renderSkill(s, skills[s] || 0));

    return (
      <div className="hero-window-skills">
        {content}
        {visibleSkillDetails && this.renderSkillDetails(visibleSkillDetails)}
      </div>
    );
  }

  private renderSkill(skill: string, value: number) {
    return (
      <div
        className="hero-window-skill"
        key={skill}
      >
        <SkillInfo
          skill={skill}
          value={value}
          onMouseEnter={this.onSkillMouseEnter}
          onMouseLeave={this.onSkillMouseLeave}
          onClick={this.onSkillClick}
        />
      </div>
    );
  }

  private onSkillMouseEnter = (skill: string) => {
    const skillName = this.props.intl.formatMessage(getSkillNameMessage(skill));

    this.setStatInfoStatusText(skillName);
  }

  private onSkillMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private onSkillClick = (skill: string) => {
    this.props.onVisibleSkillDetailsChange(skill);
  }

  private renderSkillDetails(skill: string) {
    const actions = (
      <GameButton
        group="system"
        type="okay"
        onClick={this.onCloseSkillDetailsClick}
      />
    );

    return (
      <GameModal
        size={2}
        actions={actions}
        visible={true}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getSkillNameMessage(skill)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getSkillDescriptionMessage(skill)} />
        </GameParagraph>
      </GameModal>
    );
  }

  private onCloseSkillDetailsClick = () => {
    this.props.onVisibleSkillDetailsChange();
  }

  private renderMiscInfo(hero: Hero, visibleMiscInfoDetails?: string) {
    const values = {
      [MiscInfoType.Morale]: hero.morale,
      [MiscInfoType.Luck]: hero.luck,
      [MiscInfoType.Experience]: hero.experience,
    };

    return (
      <div className="hero-window-misc-info">
        <MiscInfo
          values={values}
          onMouseEnter={this.onMiscInfoMouseEnter}
          onMouseLeave={this.onMiscInfoMouseLeave}
          onInfoMouseEnter={this.onInfoMouseEnter}
          onInfoMouseLeave={this.onInfoMouseLeave}
          onInfoClick={this.onInfoClick}
        />
        {visibleMiscInfoDetails && this.renderMiscInfoDetails(visibleMiscInfoDetails)}
      </div>
    );
  }

  private onMiscInfoMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(messages.miscInfo);

    this.setStatusText(statusText);
  }

  private onMiscInfoMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private onInfoMouseEnter = (type: MiscInfoType) => {
    const { formatMessage } = this.props.intl;

    let infoText = "";

    switch (type) {
      case MiscInfoType.Morale:
        infoText = formatMessage(getMoraleNameMessage(this.props.hero.morale));
        break;
      case MiscInfoType.Luck:
        infoText = formatMessage(getLuckNameMessage(this.props.hero.luck));
        break;
      case MiscInfoType.Experience:
        infoText = formatMessage(experienceMessages.title);
        break;
    }

    this.setStatInfoStatusText(infoText);
  }

  private onInfoMouseLeave = () => {
    this.onMiscInfoMouseEnter();
  }

  private onInfoClick = (type: string) => {
    this.props.onVisibleMiscInfoDetailsChange(type);
  }

  private renderMiscInfoDetails(type: string) {
    const { hero } = this.props;

    let content;

    switch (type) {
      case MiscInfoType.Morale:
        content = this.renderMoraleDetails(hero.morale);
        break;
      case MiscInfoType.Luck:
        content = this.renderLuckDetails(hero.luck);
        break;
      case MiscInfoType.Experience:
        content = this.renderExperienceDetails(hero.experience);
        break;
    }

    return content;
  }

  private renderMoraleDetails(morale: number) {
    const actions = (
      <GameButton
        group="system"
        type="okay"
        onClick={this.onCloseMiscInfoDetailsClick}
      />
    );

    return (
      <GameModal
        size={3}
        actions={actions}
        visible={true}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getMoraleNameMessage(morale)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getMoraleDescriptionMessage(morale)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...moraleMessages.modifiers} />:
            <br />
          <FormattedMessage {...getHeroClassNameMessage(this.props.hero.heroClass)}>
            {(className) => (<FormattedMessage {...moraleMessages.heroClassBonus} values={{ className }} />)}
          </FormattedMessage>
          <br />
          <FormattedMessage {...moraleMessages.humanTroopsBonus} />
        </GameParagraph>
      </GameModal>
    );
  }

  private renderLuckDetails(luck: number) {
    const actions = (
      <GameButton
        group="system"
        type="okay"
        onClick={this.onCloseMiscInfoDetailsClick}
      />
    );

    return (
      <GameModal
        size={4}
        actions={actions}
        visible={true}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getLuckNameMessage(luck)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getLuckDescriptionMessage(luck)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...luckMessages.modifiers} />:
            <br />
          <FormattedMessage {...messages.noModifiers} />
        </GameParagraph>
      </GameModal>
    );
  }

  private renderExperienceDetails(experience: number) {
    const currentLevel = getCurrentLevel(experience);
    const nextLevelExperience = getNextLevelExperience(experience);

    const actions = (
      <GameButton
        group="system"
        type="okay"
        onClick={this.onCloseMiscInfoDetailsClick}
      />
    );

    return (
      <GameModal
        size={2}
        actions={actions}
        visible={true}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...experienceMessages.level} values={{ value: currentLevel }} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...experienceMessages.value} values={{ value: experience }} />
          <br />
          <FormattedMessage {...experienceMessages.nextLevel} values={{ value: nextLevelExperience }} />
        </GameParagraph>
      </GameModal>
    );
  }

  private onCloseMiscInfoDetailsClick = () => {
    this.props.onVisibleMiscInfoDetailsChange();
  }

  private onCrestMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(kingdomOverviewWindowMessages.title);

    this.setStatusText(statusText);
  }

  private onCrestMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private renderArmy(hero: Hero, selectedTroopIndex?: number) {
    const selectedTroop = selectedTroopIndex !== undefined ?
      hero.army[selectedTroopIndex] :
      undefined;

    const troopDismissible = getArmySize(hero.army) > 1;

    return (
      <div className="hero-window-army">
        <ArmyStrip
          army={hero.army}
          onTroopMouseEnter={this.onTroopMouseEnter}
          onTroopMouseLeave={this.onTroopMouseLeave}
          selectedTroopIndex={this.props.selectedTroopIndex}
          onSelectTroop={this.onSelectTroop}
          onSelectedTroopClick={this.props.onSelectedTroopClick}
          onSwapTroops={this.onSwapTroops}
        />
        {selectedTroop && this.renderTroopDetails(selectedTroop, troopDismissible, this.props.troopDetailsVisible)}
      </div>
    );
  }

  private onTroopMouseEnter = (index: number) => {
    const { formatMessage } = this.props.intl;

    const selectedTroop = this.props.selectedTroopIndex !== undefined &&
      this.props.hero.army[this.props.selectedTroopIndex];
    const troop = this.props.hero.army[index];

    const selectedTroopName = selectedTroop && formatMessage(getCreatureNameMessage(selectedTroop.creature));
    const troopName = troop && formatMessage(getCreatureNameMessage(troop.creature));

    // TODO: simplify??
    let statusText = "";

    if (selectedTroop) {
      if (troop) {
        if (troop === selectedTroop) {
          statusText = formatMessage(armyStripMessages.showTroopDetails, { troopName });
        } else {
          statusText = formatMessage(armyStripMessages.swapTroops, {
            troopName: selectedTroopName,
            withTroopName: troopName,
          });
        }
      } else {
        statusText = formatMessage(armyStripMessages.moveTroop, { troopName: selectedTroopName });
      }
    } else {
      if (troop) {
        statusText = formatMessage(armyStripMessages.selectSlot, { troopName });
      } else {
        statusText = formatMessage(armyStripMessages.slotEmpty);
      }
    }

    this.setStatusText(statusText);
  }

  private onTroopMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private onSelectTroop = (index: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.hero.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(armyStripMessages.showTroopDetails, { troopName });

    this.setStatusText(statusText);

    this.props.onSelectTroop(index);
  }

  private onSwapTroops = (index: number, withIndex: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.hero.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(armyStripMessages.selectSlot, { troopName });

    this.setStatusText(statusText);

    this.props.onSwapTroops(this.props.hero.id, index, withIndex);
  }

  private renderTroopDetails(troop: Troop, dismissible: boolean, visible: boolean) {
    return (
      <TroopWindow
        troop={troop}
        dismissible={dismissible}
        visible={visible}
        dismissPromptVisible={this.props.dismissTroopPromptVisible}
        onDismissClick={this.onDismissTroopClick}
        onConfirmDismissClick={this.onConfirmDismissTroopClick}
        onCancelDismissClick={this.onCancelDismissTroopClick}
        onExitClick={this.props.onExitTroopDetails}
      />
    );
  }

  private onDismissTroopClick = (troop: Troop) => {
    const { hero } = this.props;

    const index = hero.army.indexOf(troop);

    this.props.onDismissTroopClick(index);
  }

  private onConfirmDismissTroopClick = (troop: Troop) => {
    const { hero } = this.props;

    const index = hero.army.indexOf(troop);

    this.props.onConfirmDismissTroopClick(hero.id, index);
  }

  private onCancelDismissTroopClick = (troop: Troop) => {
    const { hero } = this.props;

    const index = hero.army.indexOf(troop);

    this.props.onCancelDismissTroopClick(index);
  }

  private renderArtifacts(artifacts: string[], visibleArtifactDescription?: number) {
    const content = [...new Array(ArtifactLimit).keys()].map((i) => this.renderArtifact(i, artifacts[i]));

    const description = visibleArtifactDescription !== undefined &&
      artifacts[visibleArtifactDescription] &&
      this.renderArtifactDescription(artifacts[visibleArtifactDescription]);

    return (
      <div className="hero-window-artifacts">
        {content}
        {description}
      </div>
    );
  }

  private renderArtifact(index: number, artifact: string) {
    return (
      <div
        className="hero-window-artifact"
        key={index}
      >
        <ArtifactSlot
          index={index}
          artifact={artifact}
          onMouseEnter={this.onArtifactMouseEnter}
          onMouseLeave={this.onArtifactMouseLeave}
          onClick={this.onArtifactClick}
        />
      </div>
    );
  }

  private onArtifactMouseEnter = (index: number) => {
    const artifact = this.props.hero.artifacts[index];

    const message = artifact ?
      getArtifactNameMessage(artifact) :
      artifactSlotMessages.empty;

    const statusText = this.props.intl.formatMessage(message);

    this.setStatusText(statusText);
  }

  private onArtifactMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private onArtifactClick = (index: number) => {
    if (this.props.hero.artifacts[index]) {
      this.props.onVisibleArtifactDescriptionChange(index);
    }
  }

  private renderArtifactDescription(artifact: string) {
    const actions = (
      <GameButton
        group="system"
        type="okay"
        onClick={this.onCloseArtifactDescriptionClick}
      />
    );

    return (
      <GameModal
        actions={actions}
        visible={true}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getArtifactNameMessage(artifact)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getArtifactDescriptionMessage(artifact)} />
        </GameParagraph>
      </GameModal>
    );
  }

  private onCloseArtifactDescriptionClick = () => {
    this.props.onVisibleArtifactDescriptionChange();
  }

  private renderDismissal(dismissHeroPromptVisible: boolean) {
    return (
      <div className="hero-window-dismiss">
        <GameButton
          group="hero-window"
          type="dismiss"
          onMouseEnter={this.onDismissMouseEnter}
          onMouseLeave={this.onDismissMouseLeave}
          onClick={this.props.onDismissHeroClick}
        />
        {this.renderDismissHeroPrompt(dismissHeroPromptVisible)}
      </div>
    );
  }

  private onDismissMouseEnter = () => {
    const heroTitle = this.getHeroTitle();

    const statusText = this.props.intl.formatMessage(messages.dismiss, { heroName: heroTitle });

    this.setStatusText(statusText);
  }

  private onDismissMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private renderDismissHeroPrompt(visible: boolean) {
    const actions = (
      <Row>
        <Col
          className="hero-window-dismiss-yes"
          span={12}
        >
          <GameButton
            group="system"
            type="yes"
            onClick={this.onDismissHero}
          />
        </Col>
        <Col
          className="hero-window-dismiss-no"
          span={12}
        >
          <GameButton
            group="system"
            type="no"
            onClick={this.props.onCancelDismissHeroClick}
          />
        </Col>
      </Row>
    );

    return (
      <GameModal
        actions={actions}
        visible={visible}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...messages.dismissHeroMessage} />
        </GameParagraph>
      </GameModal>
    );
  }

  private onDismissHero = () => {
    this.props.onConfirmDismissHeroClick(this.props.hero.id);
  }

  private onExitMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(messages.exit);

    this.setStatusText(statusText);
  }

  private onExitMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private setStatusText(statusText: string) {
    this.setState({
      statusText,
    });
  }

  private setDefaultStatusText() {
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.setStatusText(statusText);
  }
}

const HeroWindowWrapped = injectIntl<typeof HeroWindow, HeroWindowProps>(HeroWindow);

export { HeroWindowWrapped as HeroWindow };
