import { Col, Modal, Row } from "antd";
import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { Hero, HeroSkills, Troop } from "heroes-core";
import { ArtifactLimit, getCurrentLevel, getNextLevelExperience, SkillIds } from "heroes-homm1";

import "./HeroWindow.scss";

import { ArmyStrip, armyStripMessages } from "../ArmyStrip";
import { Crest } from "../Crest";
import { GameButton } from "../GameButton";
import { GameModal } from "../GameModal";
import { GameParagraph } from "../GameParagraph";
import { GameText } from "../GameText";
import { HeroPortrait } from "../HeroPortrait";
import { kingdomOverviewWindowMessages } from "../KingdomOverviewWindow";
import {
  experienceMessages,
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
import { ComponentWithDefaultProps } from "../util";
import { ArtifactSlot } from "./ArtifactSlot";
import { messages } from "./messages";
import { MiscInfo, MiscInfoType } from "./MiscInfo";
import { SkillInfo } from "./SkillInfo";

export interface HeroWindowProps {
  hero: Hero;
  visibleSkillDetails?: string;
  onVisibleSkillDetailsChange: (skill?: string) => void;
  visibleMiscInfoDetails?: string;
  onVisibleMiscInfoDetailsChange: (type?: string) => void;
  onCrestClick: () => void;
  selectedTroopIndex?: number;
  onSelectTroop: (index: number) => void;
  onSelectedTroopClick: (index: number) => void;
  onSwapTroops: (hero: string, index: number, withIndex: number) => void;
  troopDetailsVisible: boolean;
  onExitTroopDetails: () => void;
  dismissHeroPromptVisible: boolean;
  onDismissHeroClick: () => void;
  onCancelDismissHeroClick: () => void;
  onConfirmDismissHeroClick: (hero: string) => void;
  statusText: string;
  onStatusTextChange: (value: string) => void;
  onExitClick: () => void;
}

type DefaultProp =
  "onCrestClick" |
  "onVisibleSkillDetailsChange" |
  "onVisibleMiscInfoDetailsChange" |
  "onSelectTroop" |
  "onSelectedTroopClick" |
  "onSwapTroops" |
  "troopDetailsVisible" |
  "onExitTroopDetails" |
  "dismissHeroPromptVisible" |
  "onDismissHeroClick" |
  "onCancelDismissHeroClick" |
  "onConfirmDismissHeroClick" |
  "onStatusTextChange" |
  "onExitClick";

class HeroWindow extends React.Component<HeroWindowProps & InjectedIntlProps> {
  public static defaultProps: Pick<HeroWindowProps, DefaultProp> = {
    dismissHeroPromptVisible: false,
    onCancelDismissHeroClick: () => undefined,
    onConfirmDismissHeroClick: () => undefined,
    onCrestClick: () => undefined,
    onDismissHeroClick: () => undefined,
    onExitClick: () => undefined,
    onExitTroopDetails: () => undefined,
    onSelectTroop: () => undefined,
    onSelectedTroopClick: () => undefined,
    onStatusTextChange: () => undefined,
    onSwapTroops: () => undefined,
    onVisibleMiscInfoDetailsChange: () => undefined,
    onVisibleSkillDetailsChange: () => undefined,
    troopDetailsVisible: false,
  };

  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { hero, selectedTroopIndex } = this.props;

    return (
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
        <div className="hero-window-dismiss">
          <GameButton
            group="hero-window"
            type="dismiss"
            onMouseEnter={this.onDismissMouseEnter}
            onMouseLeave={this.onDismissMouseLeave}
            onClick={this.props.onDismissHeroClick}
          />
          {this.props.dismissHeroPromptVisible && this.renderDismissHeroPrompt(this.props.dismissHeroPromptVisible)}
        </div>
        {this.renderArtifacts()}
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
            {this.props.statusText}
          </GameText>
        </div>
      </div>
    );
  }

  private setStatInfoStatusText(statName: string) {
    const statusText = this.props.intl.formatMessage(messages.statInfo, { statName });

    this.onStatusTextChange(statusText);
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
    return (
      <Modal
        width="40%"
        closable={false}
        footer={null}
        visible={true}
      >
        <GameModal size={2}>
          <div style={{ textAlign: "center" }}>
            <GameParagraph textSize="large">
              <FormattedMessage {...getSkillNameMessage(skill)} />
            </GameParagraph>
            <GameParagraph textSize="large">
              <FormattedMessage {...getSkillDescriptionMessage(skill)} />
            </GameParagraph>
            <GameButton
              group="system"
              type="okay"
              onClick={this.onCloseSkillDetailsClick}
            />
          </div>
        </GameModal>
      </Modal>
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

    this.onStatusTextChange(statusText);
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

    return (
      <Modal
        width="40%"
        closable={false}
        footer={null}
        visible={true}
      >
        {content}
      </Modal>
    );
  }

  private renderMoraleDetails(morale: number) {
    return (
      <GameModal size={3}>
        <div style={{ textAlign: "center" }}>
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
          <GameButton
            group="system"
            type="okay"
            onClick={this.onCloseMiscInfoDetailsClick}
          />
        </div>
      </GameModal>
    );
  }

  private renderLuckDetails(luck: number) {
    return (
      <GameModal size={4}>
        <div style={{ textAlign: "center" }}>
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
          <GameButton
            group="system"
            type="okay"
            onClick={this.onCloseMiscInfoDetailsClick}
          />
        </div>
      </GameModal>
    );
  }

  private renderExperienceDetails(experience: number) {
    const currentLevel = getCurrentLevel(experience);
    const nextLevelExperience = getNextLevelExperience(experience);

    return (
      <GameModal size={2}>
        <div style={{ textAlign: "center" }}>
          <GameParagraph textSize="large">
            <FormattedMessage {...experienceMessages.level} values={{ value: currentLevel }} />
          </GameParagraph>
          <GameParagraph textSize="large">
            <FormattedMessage {...experienceMessages.value} values={{ value: experience }} />
            <br />
            <FormattedMessage {...experienceMessages.nextLevel} values={{ value: nextLevelExperience }} />
          </GameParagraph>
          <GameButton
            group="system"
            type="okay"
            onClick={this.onCloseMiscInfoDetailsClick}
          />
        </div>
      </GameModal>
    );
  }

  private onCloseMiscInfoDetailsClick = () => {
    this.props.onVisibleMiscInfoDetailsChange();
  }

  private onCrestMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(kingdomOverviewWindowMessages.title);

    this.onStatusTextChange(statusText);
  }

  private onCrestMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private renderArmy(hero: Hero, selectedTroopIndex?: number) {
    const selectedTroop = selectedTroopIndex ?
      hero.army[selectedTroopIndex] :
      undefined;

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
        {selectedTroop && this.props.troopDetailsVisible && this.renderTroopDetails(selectedTroop)}
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

    this.onStatusTextChange(statusText);
  }

  private onTroopMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private onSelectTroop = (index: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.hero.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(armyStripMessages.showTroopDetails, { troopName });

    this.onStatusTextChange(statusText);

    this.props.onSelectTroop(index);
  }

  private onSwapTroops = (index: number, withIndex: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.hero.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(armyStripMessages.selectSlot, { troopName });

    this.onStatusTextChange(statusText);

    this.props.onSwapTroops(this.props.hero.id, index, withIndex);
  }

  private renderTroopDetails(troop: Troop) {
    return (
      <Modal
        visible={true}
      >
        <TroopWindow
          troop={troop}
        />
      </Modal>
    );
  }

  private renderArtifacts() {
    const content = [...new Array(ArtifactLimit).keys()].map((i) => this.renderArtifact(i));

    return (
      <div className="hero-window-artifacts">
        {content}
      </div>
    );
  }

  private renderArtifact(index: number) {
    return (
      <div
        className="hero-window-artifact"
        key={index}
      >
        <ArtifactSlot
          index={index}
        />
      </div>
    );
  }

  private onDismissMouseEnter = () => {
    const heroTitle = this.getHeroTitle();

    const statusText = this.props.intl.formatMessage(messages.dismiss, { heroName: heroTitle });

    this.onStatusTextChange(statusText);
  }

  private onDismissMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private renderDismissHeroPrompt(visible: boolean) {
    return (
      <Modal
        closable={false}
        footer={null}
        visible={visible}
      >
        <GameModal>
          <Row style={{ textAlign: "center" }}>
            <GameParagraph textSize="large">
              <FormattedMessage {...messages.dismissHeroMessage} />
            </GameParagraph>
          </Row>
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
        </GameModal>
      </Modal>
    );
  }

  private onDismissHero = () => {
    this.props.onConfirmDismissHeroClick(this.props.hero.id);
  }

  private onExitMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(messages.exit);

    this.onStatusTextChange(statusText);
  }

  private onExitMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private onStatusTextChange(text: string) {
    this.props.onStatusTextChange(text);
  }

  private setDefaultStatusText() {
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.onStatusTextChange(statusText);
  }
}

const HeroWindowWrapped: ComponentWithDefaultProps<HeroWindowProps, typeof HeroWindow.defaultProps> =
  injectIntl(HeroWindow) as any;

export { HeroWindowWrapped as HeroWindow };
