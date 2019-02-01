import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { Artifact, getArmySize, Hero, HeroSkills, Troop } from "heroes-core";
import {
  ArtifactId,
  ArtifactLimit,
  getCurrentLevel,
  getNextLevelExperience,
  SkillIds,
  Spell,
  SpellBook,
} from "heroes-homm1";

import * as styles from "./HeroWindow.module.scss";

import { buttonImages } from "./assets";

import { ArmyStrip, Crest, GameModal, getArmyStripStatusTextMessage, HeroPortrait, ImageButton } from "../base";
import { GameParagraph, GameText, withGameWindow, WithGameWindowProps } from "../core";
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
import { SpellBookWindow } from "../SpellBookWindow";
import { TroopWindow } from "../TroopWindow";
import { ArtifactSlot, artifactSlotMessages } from "./ArtifactSlot";
import { messages } from "./messages";
import { MiscInfo, MiscInfoType } from "./MiscInfo";
import { SkillInfo } from "./SkillInfo";

export interface HeroWindowProps extends WithGameWindowProps {
  readonly hero: Hero;
  readonly dismissible: boolean;
  readonly visibleSkillDetails?: string;
  readonly onVisibleSkillDetailsChange: (skill?: string) => void;
  readonly visibleMiscInfoDetails?: string;
  readonly onVisibleMiscInfoDetailsChange: (type?: string) => void;
  readonly onCrestClick: () => void;
  readonly selectedTroopIndex?: number;
  readonly onSelectTroop: (index: number) => void;
  // TODO: should this be onOpenTroopDetails?
  readonly onSelectedTroopClick: (index: number) => void;
  readonly onSwapTroops: (hero: string, index: number, withIndex: number) => void;
  readonly troopDetailsVisible: boolean;
  readonly dismissTroopPromptVisible: boolean;
  readonly onDismissTroopClick: (index: number) => void;
  // TODO: is index needed? adds some complexity
  readonly onCancelDismissTroopClick: (index: number) => void;
  readonly onConfirmDismissTroopClick: (hero: string, index: number) => void;
  readonly onExitTroopDetails: () => void;
  readonly visibleArtifactDetails?: number;
  readonly onVisibleArtifactDetailsChange: (index?: number) => void;
  readonly dismissHeroPromptVisible: boolean;
  readonly onDismissHeroClick: () => void;
  readonly onCancelDismissHeroClick: () => void;
  readonly onConfirmDismissHeroClick: (hero: string) => void;
  readonly onExitClick: () => void;
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
  "onVisibleArtifactDetailsChange" |
  "dismissHeroPromptVisible" |
  "onDismissHeroClick" |
  "onCancelDismissHeroClick" |
  "onConfirmDismissHeroClick" |
  "onExitClick";

interface HeroWindowState {
  readonly statusText: string;
}

class HeroWindow extends React.Component<HeroWindowProps & InjectedIntlProps, HeroWindowState> {
  public static readonly defaultProps: Pick<HeroWindowProps, DefaultProp> = {
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
    onVisibleArtifactDetailsChange: () => undefined,
    onVisibleMiscInfoDetailsChange: () => undefined,
    onVisibleSkillDetailsChange: () => undefined,
    troopDetailsVisible: false,
  };

  public readonly state: HeroWindowState = {
    statusText: "",
  };

  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { hero, selectedTroopIndex } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.name}>
          <GameText size="large">
            {this.getHeroTitle()}
          </GameText>
        </div>
        <div className={styles.portrait}>
          <HeroPortrait
            hero={hero.id}
          />
        </div>
        {this.renderSkills(hero.skills, this.props.visibleSkillDetails)}
        {this.renderMiscInfo(hero, this.props.visibleMiscInfoDetails)}
        <div className={styles.crest}>
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
        {this.renderArtifacts(hero.artifacts, this.props.visibleArtifactDetails)}
        <div className={styles.exit}>
          <ImageButton
            images={buttonImages.exit}
            onMouseEnter={this.onExitMouseEnter}
            onMouseLeave={this.onExitMouseLeave}
            onClick={this.props.onExitClick}
          />
        </div>
        <div className={styles.title}>
          <GameText size="large">
            {this.state.statusText}
          </GameText>
        </div>
      </div>
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
      <div className={styles.skills}>
        {content}
        {visibleSkillDetails && this.renderSkillDetails(visibleSkillDetails)}
      </div>
    );
  }

  private renderSkill(skill: string, value: number) {
    return (
      <div
        className={styles.skill}
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

  private readonly onSkillMouseEnter = (skill: string) => {
    const skillName = this.props.intl.formatMessage(getSkillNameMessage(skill));

    this.setStatInfoStatusText(skillName);
  }

  private readonly onSkillMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onSkillClick = (skill: string) => {
    this.props.onVisibleSkillDetailsChange(skill);
  }

  private renderSkillDetails(skill: string) {
    return (
      <GameModal
        type="okay"
        size={2}
        visible={true}
        onConfirmClick={this.onCloseSkillDetailsClick}
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

  private readonly onCloseSkillDetailsClick = () => {
    this.props.onVisibleSkillDetailsChange();
  }

  private renderMiscInfo(hero: Hero, visibleMiscInfoDetails?: string) {
    const values = {
      [MiscInfoType.Morale]: hero.morale,
      [MiscInfoType.Luck]: hero.luck,
      [MiscInfoType.Experience]: hero.experience,
    };

    return (
      <div className={styles.miscInfo}>
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

  private readonly onMiscInfoMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(messages.miscInfo);

    this.setStatusText(statusText);
  }

  private readonly onMiscInfoMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onInfoMouseEnter = (type: MiscInfoType) => {
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

  private readonly onInfoMouseLeave = () => {
    this.onMiscInfoMouseEnter();
  }

  private readonly onInfoClick = (type: string) => {
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
    return (
      <GameModal
        type="okay"
        size={3}
        visible={true}
        onConfirmClick={this.onCloseMiscInfoDetailsClick}
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
    return (
      <GameModal
        type="okay"
        size={4}
        visible={true}
        onConfirmClick={this.onCloseMiscInfoDetailsClick}
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

    return (
      <GameModal
        type="okay"
        size={2}
        visible={true}
        onConfirmClick={this.onCloseMiscInfoDetailsClick}
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

  private readonly onCloseMiscInfoDetailsClick = () => {
    this.props.onVisibleMiscInfoDetailsChange();
  }

  private readonly onCrestMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(kingdomOverviewWindowMessages.title);

    this.setStatusText(statusText);
  }

  private readonly onCrestMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private renderArmy(hero: Hero, selectedTroopIndex?: number) {
    const selectedTroop = selectedTroopIndex !== undefined ?
      hero.army[selectedTroopIndex] :
      undefined;

    const troopDismissible = getArmySize(hero.army) > 1;

    return (
      <div className={styles.army}>
        <ArmyStrip
          army={hero.army}
          selectedTroopIndex={this.props.selectedTroopIndex}
          onTroopMouseEnter={this.onTroopMouseEnter}
          onTroopMouseLeave={this.onTroopMouseLeave}
          onTroopClick={this.onTroopClick}
        />
        {selectedTroop && this.renderTroopDetails(selectedTroop, troopDismissible, this.props.troopDetailsVisible)}
      </div>
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

    const statusText = formatMessage(getArmyStripStatusTextMessage(selectedTroop, troop), {
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
      this.props.onSelectedTroopClick(index);
    } else if (selectedTroopIndex !== undefined && index !== selectedTroopIndex) {
      this.onSwapTroops(selectedTroopIndex, index);
    }
  }

  private readonly onSelectTroop = (index: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.hero.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(troop, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSelectTroop(index);
  }

  private readonly onSwapTroops = (index: number, withIndex: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.hero.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(undefined, troop), { troopName });

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

  private readonly onDismissTroopClick = (troop: Troop) => {
    const { hero } = this.props;

    const index = hero.army.indexOf(troop);

    this.props.onDismissTroopClick(index);
  }

  private readonly onConfirmDismissTroopClick = (troop: Troop) => {
    const { hero } = this.props;

    const index = hero.army.indexOf(troop);

    this.props.onConfirmDismissTroopClick(hero.id, index);
  }

  private readonly onCancelDismissTroopClick = (troop: Troop) => {
    const { hero } = this.props;

    const index = hero.army.indexOf(troop);

    this.props.onCancelDismissTroopClick(index);
  }

  private renderArtifacts(artifacts: Array<Artifact | undefined>, visibleArtifactDetails?: number) {
    const content = [...new Array(ArtifactLimit).keys()].map((i) => this.renderArtifact(i, artifacts[i]));

    const artifactDetails = visibleArtifactDetails !== undefined ?
      artifacts[visibleArtifactDetails] :
      undefined;

    return (
      <div className={styles.artifacts}>
        {content}
        {artifactDetails && this.renderArtifactDetails(artifactDetails)}
      </div>
    );
  }

  private renderArtifact(index: number, artifact: Artifact | undefined) {
    return (
      <div
        className={styles.artifact}
        key={index}
      >
        <ArtifactSlot
          index={index}
          artifact={artifact ? artifact.id : undefined}
          onMouseEnter={this.onArtifactMouseEnter}
          onMouseLeave={this.onArtifactMouseLeave}
          onClick={this.onArtifactClick}
        />
      </div>
    );
  }

  private readonly onArtifactMouseEnter = (index: number) => {
    const artifact = this.props.hero.artifacts[index];

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
    if (this.props.hero.artifacts[index]) {
      this.props.onVisibleArtifactDetailsChange(index);
    }
  }

  private renderArtifactDetails(artifact: Artifact) {
    if (artifact.id === ArtifactId.Spellbook) {
      const spellBook = artifact as SpellBook;

      if (!spellBook.data.length) {
        return this.renderNoSpellsPrompt();
      }

      return this.renderSpellBook(spellBook.data);
    }

    return (
      <GameModal
        type="okay"
        visible={true}
        onConfirmClick={this.onCloseArtifactDetailsClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getArtifactNameMessage(artifact.id)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getArtifactDescriptionMessage(artifact.id)} />
        </GameParagraph>
      </GameModal>
    );
  }

  private renderNoSpellsPrompt() {
    return (
      <GameModal
        type="okay"
        visible={true}
        onConfirmClick={this.onCloseArtifactDetailsClick}
      >
        <GameText size="large">
          <FormattedMessage {...messages.noSpells} />
        </GameText>
      </GameModal>
    );
  }

  private renderSpellBook(spells: Spell[]) {
    return (
      <SpellBookWindow
        visible={true}
        spells={spells}
        onStatusTextChange={this.onArtifactStatusTextChange}
        onExitClick={this.onCloseArtifactDetailsClick}
      />
    );
  }

  private readonly onArtifactStatusTextChange = (statusText: string) => {
    this.setStatusText(statusText);
  }

  private readonly onCloseArtifactDetailsClick = () => {
    this.props.onVisibleArtifactDetailsChange();
  }

  private renderDismissal(dismissHeroPromptVisible: boolean) {
    return (
      <div className={styles.dismiss}>
        <ImageButton
          images={buttonImages.dismiss}
          onMouseEnter={this.onDismissMouseEnter}
          onMouseLeave={this.onDismissMouseLeave}
          onClick={this.props.onDismissHeroClick}
        />
        {this.renderDismissHeroPrompt(dismissHeroPromptVisible)}
      </div>
    );
  }

  private readonly onDismissMouseEnter = () => {
    const heroTitle = this.getHeroTitle();

    const statusText = this.props.intl.formatMessage(messages.dismiss, { heroName: heroTitle });

    this.setStatusText(statusText);
  }

  private readonly onDismissMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private renderDismissHeroPrompt(visible: boolean) {
    return (
      <GameModal
        type="yesNo"
        visible={visible}
        onConfirmClick={this.onConfirmDismissHeroClick}
        onCancelClick={this.props.onCancelDismissHeroClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...messages.dismissHeroMessage} />
        </GameParagraph>
      </GameModal>
    );
  }

  private readonly onConfirmDismissHeroClick = () => {
    this.props.onConfirmDismissHeroClick(this.props.hero.id);
  }

  private readonly onExitMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(messages.exit);

    this.setStatusText(statusText);
  }

  private readonly onExitMouseLeave = () => {
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

const HeroWindowWrapped = injectIntl(
  withGameWindow(640)(HeroWindow),
);

export {
  HeroWindowWrapped as HeroWindow,
};
