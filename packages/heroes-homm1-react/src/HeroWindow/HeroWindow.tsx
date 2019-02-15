import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Artifact, getArmySize, Hero, HeroSkills, Troop } from "heroes-core";
import { ArtifactLimit, SkillIds } from "heroes-homm1";

import * as styles from "./HeroWindow.module.scss";

import { buttonImages } from "./assets";

import {
  ArmyStrip,
  ArtifactSlot,
  artifactSlotMessages,
  getArmyStripStatusTextMessage,
  ImageButton,
} from "../base";
import { GameText, withGameWindow, WithGameWindowProps } from "../core";
import {
  getArtifactNameMessage,
  getCreatureNameMessage,
  getHeroClassTitleMessage,
  getHeroNameMessage,
} from "../messages";
import {
  DismissHeroPrompt,
} from "../prompt";
import { messages } from "./messages";

interface HeroWindowProps extends InjectedIntlProps, WithGameWindowProps {
  readonly hero: Hero;
  readonly renderHeroPortrait: (hero: string) => React.ReactNode;
  readonly renderSkill: (skill: string, value: number) => React.ReactNode;
  readonly renderAdditionalStats: () => React.ReactNode;
  readonly renderCrest: (alignment: string, heroClass: string) => React.ReactNode;
  readonly dismissible: boolean;
  readonly selectedTroopIndex?: number;
  readonly onSelectTroop: (index: number) => void;
  // TODO: should this be onOpenTroopDetails?
  readonly onSelectedTroopClick: (index: number) => void;
  readonly onSwapTroops: (hero: string, index: number, withIndex: number) => void;
  readonly renderTroopDetails: (index: number, troop: Troop, dismissible: boolean) => React.ReactNode | undefined;
  readonly troopDetailsVisible: boolean;
  readonly onExitTroopDetails: () => void;
  readonly getArtifactDetails: (artifact: Artifact, props: {
    readonly onCloseClick: () => void;
    readonly onStatusTextChange: (statusText: string) => void;
  }) => React.ReactNode | undefined;
  readonly visibleArtifactDetails?: number;
  readonly onVisibleArtifactDetailsChange: (index?: number) => void;
  readonly statusText: string;
  readonly dismissHeroPromptVisible: boolean;
  readonly onDismissHeroClick: () => void;
  readonly onCancelDismissHeroClick: () => void;
  readonly onConfirmDismissHeroClick: (hero: string) => void;
  readonly onExitClick: () => void;
}

type DefaultProp =
  "renderHeroPortrait" |
  "renderSkill" |
  "renderAdditionalStats" |
  "renderCrest" |
  "dismissible" |
  "onSelectTroop" |
  "onSelectedTroopClick" |
  "onSwapTroops" |
  "renderTroopDetails" |
  "troopDetailsVisible" |
  "onExitTroopDetails" |
  "getArtifactDetails" |
  "onVisibleArtifactDetailsChange" |
  "statusText" |
  "dismissHeroPromptVisible" |
  "onDismissHeroClick" |
  "onCancelDismissHeroClick" |
  "onConfirmDismissHeroClick" |
  "onExitClick";

interface HeroWindowState {
  readonly statusText: string;
}

class HeroWindow extends React.Component<HeroWindowProps, HeroWindowState> {
  public static readonly defaultProps: Pick<HeroWindowProps, DefaultProp> = {
    dismissHeroPromptVisible: false,
    dismissible: false,
    getArtifactDetails: () => undefined,
    onCancelDismissHeroClick: () => undefined,
    onConfirmDismissHeroClick: () => undefined,
    onDismissHeroClick: () => undefined,
    onExitClick: () => undefined,
    onExitTroopDetails: () => undefined,
    onSelectTroop: () => undefined,
    onSelectedTroopClick: () => undefined,
    onSwapTroops: () => undefined,
    onVisibleArtifactDetailsChange: () => undefined,
    renderAdditionalStats: () => undefined,
    renderCrest: () => undefined,
    renderHeroPortrait: () => undefined,
    renderSkill: () => undefined,
    renderTroopDetails: () => undefined,
    statusText: "",
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
          {this.props.renderHeroPortrait(hero.id)}
        </div>
        {this.renderSkills(hero.skills)}
        {this.renderMiscInfo()}
        <div className={styles.crest}>
          {this.props.renderCrest(hero.alignment, hero.heroClass)}
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
            {this.props.statusText || this.state.statusText}
          </GameText>
        </div>
      </div>
    );
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
      <div className={styles.skills}>
        {content}
      </div>
    );
  }

  private renderSkill(skill: string, value: number) {
    return (
      <div
        className={styles.skill}
        key={skill}
      >
        {this.props.renderSkill(skill, value)}
      </div>
    );
  }

  private renderMiscInfo() {
    return (
      <div className={styles.miscInfo}>
        {this.props.renderAdditionalStats()}
      </div>
    );
  }

  private renderArmy(hero: Hero, selectedTroopIndex?: number) {
    const selectedTroop = selectedTroopIndex !== undefined ?
      hero.army[selectedTroopIndex] :
      undefined;

    const troopDismissible = getArmySize(hero.army) > 1;

    const troopDetails = selectedTroopIndex !== undefined &&
      selectedTroop &&
      this.props.troopDetailsVisible &&
      this.props.renderTroopDetails(selectedTroopIndex, selectedTroop, troopDismissible);

    return (
      <div className={styles.army}>
        <ArmyStrip
          army={hero.army}
          selectedTroopIndex={this.props.selectedTroopIndex}
          onTroopMouseEnter={this.onTroopMouseEnter}
          onTroopMouseLeave={this.onTroopMouseLeave}
          onTroopClick={this.onTroopClick}
        />
        {troopDetails}
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
    const artifactDetails = this.props.getArtifactDetails(artifact, {
      onCloseClick: this.onCloseArtifactDetailsClick,
      onStatusTextChange: this.onArtifactStatusTextChange,
    });

    return artifactDetails;
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

type HeroWindowWrappedProps = ExtractProps<typeof HeroWindowWrapped>;

export {
  HeroWindowWrapped as HeroWindow,
  HeroWindowWrappedProps as HeroWindowProps,
};
