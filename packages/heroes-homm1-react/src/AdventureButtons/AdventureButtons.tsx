import React from "react";

import * as styles from "./AdventureButtons.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../base";

export interface AdventureButtonsProps {
  readonly nextHeroDisabled: boolean;
  readonly onNextHeroClick: () => void;
  readonly moveDisabled: boolean;
  readonly onMoveClick: () => void;
  readonly onKingdomOverviewClick: () => void;
  readonly onEndTurnClick: () => void;
  readonly onAdventureOptionsClick: () => void;
  readonly onGameOptionsClick: () => void;
}

type DefaultProp =
  "nextHeroDisabled" |
  "onNextHeroClick" |
  "moveDisabled" |
  "onMoveClick" |
  "onKingdomOverviewClick" |
  "onEndTurnClick" |
  "onAdventureOptionsClick" |
  "onGameOptionsClick";

export class AdventureButtons extends React.Component<AdventureButtonsProps> {
  public static readonly defaultProps: Pick<AdventureButtonsProps, DefaultProp> = {
    moveDisabled: false,
    nextHeroDisabled: false,
    onAdventureOptionsClick: () => undefined,
    onEndTurnClick: () => undefined,
    onGameOptionsClick: () => undefined,
    onKingdomOverviewClick: () => undefined,
    onMoveClick: () => undefined,
    onNextHeroClick: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        <div>
          <ImageButton
            images={buttonImages.nextHero}
            disabled={this.props.nextHeroDisabled}
            onClick={this.props.onNextHeroClick}
          />
          <ImageButton
            images={buttonImages.move}
            disabled={this.props.moveDisabled}
            onClick={this.props.onMoveClick}
          />
          <ImageButton
            images={buttonImages.kingdomOverview}
            onClick={this.props.onKingdomOverviewClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages.endTurn}
            onClick={this.props.onEndTurnClick}
          />
          <ImageButton
            images={buttonImages.adventureOptions}
            onClick={this.props.onAdventureOptionsClick}
          />
          <ImageButton
            images={buttonImages.gameOptions}
            onClick={this.props.onGameOptionsClick}
          />
        </div>
      </div>
    );
  }
}
