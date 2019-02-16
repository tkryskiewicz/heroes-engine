import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import {
  Crest,
  getArmyStripStatusTextMessage,
  getCreatureNameMessage,
  HeroPortrait,
  kingdomOverviewWindowMessages,
  TownWindow,
  townWindowMessages,
  TownWindowProps,
  Treasury,
} from "heroes-homm1-react";

import { TroopSlot } from "../TroopSlot";

interface TownWindowContainerProps extends InjectedIntlProps, TownWindowProps {
  readonly onCrestClick: () => void;

  readonly selectedGarrisonTroopIndex?: number;
  readonly onSelectGarrisonTroop: (index: number) => void;
  readonly onSwapGarrisonTroops: (town: string, index: number, withIndex: number) => void;

  readonly selectedHeroTroopIndex?: number;
  readonly onSelectHeroTroop: (index: number) => void;
  readonly onSwapHeroTroops: (hero: string, index: number, withIndex: number) => void;
}

interface TownWindowContainerState {
  readonly statusText: string;
}

class TownWindowContainer extends React.Component<TownWindowContainerProps, TownWindowContainerState> {
  public readonly state: TownWindowContainerState = {
    statusText: "",
  };

  public render() {
    return (
      <TownWindow
        {...this.props}
        renderCrest={this.renderCrest}
        renderGarrisonTroop={this.renderGarrisonTroop}
        renderHeroPortrait={this.renderHeroPortrait}
        renderHeroTroop={this.renderHeroTroop}
        renderTreasury={this.renderTreasury}
        statusText={this.state.statusText}
      />
    );
  }

  private readonly renderCrest = () => {
    const { town } = this.props;

    return (
      <Crest
        alignment={town.alignment}
        heroClass={town.heroClass}
        onMouseEnter={this.onCrestMouseEnter}
        onMouseLeave={this.onCrestMouseLeave}
        onClick={this.props.onCrestClick}
      />
    );
  }

  private readonly onCrestMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(kingdomOverviewWindowMessages.title);

    this.setStatusText(statusText);
  }

  private readonly onCrestMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly renderGarrisonTroop = (index: number) => {
    const { town, selectedGarrisonTroopIndex } = this.props;

    const troop = town.garrison[index];

    return (
      <TroopSlot
        index={index}
        troop={troop}
        selected={selectedGarrisonTroopIndex === index}
        onMouseEnter={this.onGarrisonTroopMouseEnter}
        onMouseLeave={this.onGarrisonTroopMouseLeave}
        onClick={this.onGarrisonTroopClick}
      />
    );
  }

  private readonly onGarrisonTroopMouseEnter = (index: number) => {
    const { formatMessage } = this.props.intl;

    const selectedTroop = this.props.selectedHeroTroopIndex !== undefined ?
      this.props.town.garrison[this.props.selectedHeroTroopIndex] :
      undefined;
    const troop = this.props.town.garrison[index];

    const selectedTroopName = selectedTroop && formatMessage(getCreatureNameMessage(selectedTroop.creature));
    const troopName = troop && formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(selectedTroop, troop), {
      selectedTroopName,
      troopName,
    });

    this.setStatusText(statusText);
  }

  private readonly onGarrisonTroopMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onGarrisonTroopClick = (index: number) => {
    const { selectedGarrisonTroopIndex } = this.props;

    if (selectedGarrisonTroopIndex === undefined && this.props.town.garrison[index]) {
      this.onSelectGarrisonTroop(index);
      // } else if (index === selectedGarrisonTroopIndex) {
      //   this.props.onSelectedTroopClick(index);
    } else if (selectedGarrisonTroopIndex !== undefined && index !== selectedGarrisonTroopIndex) {
      this.onSwapGarrisonTroops(selectedGarrisonTroopIndex, index);
    }
  }

  private readonly onSelectGarrisonTroop = (index: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.town.garrison[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(troop, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSelectGarrisonTroop(index);
  }

  private readonly onSwapGarrisonTroops = (index: number, withIndex: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.town.garrison[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(undefined, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSwapGarrisonTroops(this.props.town.id, index, withIndex);
  }

  private readonly renderHeroPortrait = () => {
    const { visitingHero } = this.props;

    return (
      <HeroPortrait
        hero={visitingHero ? visitingHero.id : undefined}
        onMouseEnter={this.onHeroPortraitMouseEnter}
        onMouseLeave={this.onHeroPortraitMouseLeave}
      />
    );
  }

  private readonly onHeroPortraitMouseEnter = () => {
    if (!this.props.visitingHero) {
      return;
    }

    const statusText = this.props.intl.formatMessage(townWindowMessages.viewHero);

    this.setStatusText(statusText);
  }

  private readonly onHeroPortraitMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly renderHeroTroop = (index: number) => {
    const { visitingHero, selectedHeroTroopIndex } = this.props;

    const troop = visitingHero ?
      visitingHero.army[index] :
      undefined;

    return (
      <TroopSlot
        index={index}
        troop={troop}
        selected={selectedHeroTroopIndex === index}
        onMouseEnter={this.onHeroTroopMouseEnter}
        onMouseLeave={this.onHeroTroopMouseLeave}
        onClick={this.onHeroTroopClick}
      />
    );
  }

  private readonly onHeroTroopMouseEnter = (index: number) => {
    if (!this.props.visitingHero) {
      return;
    }

    const { formatMessage } = this.props.intl;

    const selectedTroop = this.props.selectedHeroTroopIndex !== undefined ?
      this.props.visitingHero.army[this.props.selectedHeroTroopIndex] :
      undefined;
    const troop = this.props.visitingHero.army[index];

    const selectedTroopName = selectedTroop && formatMessage(getCreatureNameMessage(selectedTroop.creature));
    const troopName = troop && formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(selectedTroop, troop), {
      selectedTroopName,
      troopName,
    });

    this.setStatusText(statusText);
  }

  private readonly onHeroTroopMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onHeroTroopClick = (index: number) => {
    if (!this.props.visitingHero) {
      return;
    }

    const { selectedHeroTroopIndex } = this.props;

    if (selectedHeroTroopIndex === undefined && this.props.visitingHero.army[index]) {
      this.onSelectHeroTroop(index);
      // } else if (index === selectedHeroTroopIndex) {
      //   this.props.onSelectedTroopClick(index);
    } else if (selectedHeroTroopIndex !== undefined && index !== selectedHeroTroopIndex) {
      this.onSwapHeroTroops(selectedHeroTroopIndex, index);
    }
  }

  private readonly onSelectHeroTroop = (index: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.visitingHero!.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(troop, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSelectHeroTroop(index);
  }

  private readonly onSwapHeroTroops = (index: number, withIndex: number) => {
    const { formatMessage } = this.props.intl;

    const troop = this.props.visitingHero!.army[index]!;

    const troopName = formatMessage(getCreatureNameMessage(troop.creature));

    const statusText = formatMessage(getArmyStripStatusTextMessage(undefined, troop), { troopName });

    this.setStatusText(statusText);

    this.props.onSwapHeroTroops(this.props.visitingHero!.id, index, withIndex);
  }

  private readonly renderTreasury = () => {
    return (
      <Treasury
        resources={this.props.resources}
        onExitMouseEnter={this.onExitMouseEnter}
        onExitMouseLeave={this.onExitMouseLeave}
        onExitClick={this.props.onExitClick}
      />
    );
  }

  private readonly onExitMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(townWindowMessages.exit);

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
    const statusText = this.props.intl.formatMessage(townWindowMessages.defaultStatusText);

    this.setStatusText(statusText);
  }
}

const TownWindowContainerWrapped = injectIntl(TownWindowContainer);

type TownWindowContainerWrappedProps = ExtractProps<typeof TownWindowContainerWrapped>;

export {
  TownWindowContainerWrapped as TownWindowContainer,
  TownWindowContainerWrappedProps as TownWindowContainerProps,
};
