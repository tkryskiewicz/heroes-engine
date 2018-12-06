import { Col, Modal, Row } from "antd";
import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { Hero, HeroSkills, Troop } from "heroes-core";
import { ArtifactLimit, SkillIds } from "heroes-homm1";

import "./HeroWindow.scss";

import { ArmyStrip, armyStripMessages } from "../ArmyStrip";
import { Crest } from "../Crest";
import { GameButton } from "../GameButton";
import { GameText } from "../GameText";
import { HeroPortrait } from "../HeroPortrait";
import { kingdomOverviewWindowMessages } from "../KingdomOverviewWindow";
import {
  getCreatureNameMessage,
  getHeroClassTitleMessage,
  getHeroNameMessage,
  getLuckNameMessage,
  getMoraleNameMessage,
  getSkillDescriptionMessage,
  getSkillNameMessage,
} from "../messages";
import { TroopWindow } from "../TroopWindow";
import { ArtifactSlot } from "./ArtifactSlot";
import { messages } from "./messages";
import { MiscInfo } from "./MiscInfo";
import { SkillInfo } from "./SkillInfo";

export interface HeroWindowProps {
  hero: Hero;
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
        {this.renderSkills(hero.skills)}
        {this.renderMiscInfo(hero)}
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

  private renderSkills(skills: HeroSkills) {
    const content = SkillIds.map((s) => this.renderSkill(s, skills[s] || 0));

    return (
      <div className="hero-window-skills">
        {content}
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
    Modal.info({
      content: <FormattedMessage {...getSkillDescriptionMessage(skill)} />,
      title: <FormattedMessage {...getSkillNameMessage(skill)} />,
    });
  }

  private renderMiscInfo(hero: Hero) {
    return (
      <div className="hero-window-misc-info">
        <MiscInfo
          onMouseEnter={this.onMiscInfoMouseEnter}
          onMouseLeave={this.onMiscInfoMouseLeave}
          morale={hero.morale}
          onMoraleMouseEnter={this.onMoraleMouseEnter}
          onMoraleMouseLeave={this.onMoraleMouseLeave}
          luck={hero.luck}
          onLuckMouseEnter={this.onLuckMouseEnter}
          onLuckMouseLeave={this.onLuckMouseLeave}
          onExperienceMouseEnter={this.onExperienceMouseEnter}
          onExperienceMouseLeave={this.onExperienceMouseLeave}
          experience={hero.experience}
        />
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

  private onMoraleMouseEnter = () => {
    const moraleText = this.props.intl.formatMessage(getMoraleNameMessage(this.props.hero.morale));

    this.setStatInfoStatusText(moraleText);
  }

  private onMoraleMouseLeave = () => {
    this.onMiscInfoMouseEnter();
  }

  private onLuckMouseEnter = () => {
    const luckText = this.props.intl.formatMessage(getLuckNameMessage(this.props.hero.luck));

    this.setStatInfoStatusText(luckText);
  }

  private onLuckMouseLeave = () => {
    this.onMiscInfoMouseEnter();
  }

  private onExperienceMouseEnter = () => {
    const experienceText = this.props.intl.formatMessage(messages.experience);

    this.setStatInfoStatusText(experienceText);
  }

  private onExperienceMouseLeave = () => {
    this.onMiscInfoMouseEnter();
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
          onSelectTroop={this.props.onSelectTroop}
          onSelectedTroopClick={this.props.onSelectedTroopClick}
          onSwapTroops={this.onSwapTroops}
        />
        {selectedTroop && this.props.troopDetailsVisible && this.renderTroopDetails(selectedTroop)}
      </div>
    );
  }

  private onTroopMouseEnter = (index: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.hero.army[index];

    let statusText = formatMessage(armyStripMessages.slotEmpty);

    if (troop) {
      const creatureName = formatMessage(getCreatureNameMessage(troop.creature));

      statusText = formatMessage(armyStripMessages.selectSlot, { creatureName });
    }

    this.onStatusTextChange(statusText);
  }

  private onTroopMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private onSwapTroops = (index: number, withIndex: number) => {
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
        footer={[]}
        visible={visible}
      >
        <Row>
          <FormattedMessage {...messages.dismissHeroMessage} />
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

// FIXME: simpler way to do it? react-intl fixed HOC?
type ComponentWithDefaultProps<TProps extends TDefaultProps, TDefaultProps> = React.ComponentClass<
  Partial<Pick<TProps, keyof TDefaultProps>> &
  Pick<TProps, Exclude<keyof TProps, keyof TDefaultProps>>>;

const HeroWindowWrapped: ComponentWithDefaultProps<HeroWindowProps, typeof HeroWindow.defaultProps> =
  injectIntl(HeroWindow) as any;

export { HeroWindowWrapped as HeroWindow };
