import React from "react";

import * as styles from "./AdventureButtons.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../base";

interface Props {
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

export class AdventureButtons extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
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
            className="next-hero"
            images={buttonImages.nextHero}
            disabled={this.props.nextHeroDisabled}
            onClick={this.props.onNextHeroClick}
          />
          <ImageButton
            className="move"
            images={buttonImages.move}
            disabled={this.props.moveDisabled}
            onClick={this.props.onMoveClick}
          />
          <ImageButton
            className="kingdom-overview"
            images={buttonImages.kingdomOverview}
            onClick={this.props.onKingdomOverviewClick}
          />
        </div>
        <div>
          <ImageButton
            className="end-turn"
            images={buttonImages.endTurn}
            onClick={this.props.onEndTurnClick}
          />
          <ImageButton
            className="adventure-options"
            images={buttonImages.adventureOptions}
            onClick={this.props.onAdventureOptionsClick}
          />
          <ImageButton
            className="game-options"
            images={buttonImages.gameOptions}
            onClick={this.props.onGameOptionsClick}
          />
        </div>
      </div>
    );
  }
}

export type AdventureButtonsProps = ExtractPublicProps<typeof AdventureButtons>;
