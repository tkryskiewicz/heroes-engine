import React from "react";

import { noop } from "heroes-helpers";

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

export class AdventureButtons extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    moveDisabled: false,
    nextHeroDisabled: false,
    onAdventureOptionsClick: noop,
    onEndTurnClick: noop,
    onGameOptionsClick: noop,
    onKingdomOverviewClick: noop,
    onMoveClick: noop,
    onNextHeroClick: noop,
  };

  public render() {
    return (
      <div className={styles.root}>
        <div>
          <ImageButton
            data-test-id="next-hero"
            images={buttonImages.nextHero}
            disabled={this.props.nextHeroDisabled}
            onClick={this.props.onNextHeroClick}
          />
          <ImageButton
            data-test-id="move"
            images={buttonImages.move}
            disabled={this.props.moveDisabled}
            onClick={this.props.onMoveClick}
          />
          <ImageButton
            data-test-id="kingdom-overview"
            images={buttonImages.kingdomOverview}
            onClick={this.props.onKingdomOverviewClick}
          />
        </div>
        <div>
          <ImageButton
            data-test-id="end-turn"
            images={buttonImages.endTurn}
            onClick={this.props.onEndTurnClick}
          />
          <ImageButton
            data-test-id="adventure-options"
            images={buttonImages.adventureOptions}
            onClick={this.props.onAdventureOptionsClick}
          />
          <ImageButton
            data-test-id="game-options"
            images={buttonImages.gameOptions}
            onClick={this.props.onGameOptionsClick}
          />
        </div>
      </div>
    );
  }
}

export type AdventureButtonsProps = ExtractPublicProps<typeof AdventureButtons>;
