import React from "react";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { Menu, MenuOption } from "../Menu";

interface Props {
  readonly onNewGameClick: () => void;
  readonly onLoadGameClick: () => void;
  readonly onViewHighScoresClick: () => void;
  readonly onViewCreditsClick: () => void;
  readonly onQuitClick: () => void;
}

export class MainMenu extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    onLoadGameClick: () => undefined,
    onNewGameClick: () => undefined,
    onQuitClick: () => undefined,
    onViewCreditsClick: () => undefined,
    onViewHighScoresClick: () => undefined,
  };

  public render() {
    return (
      <Menu>
        <MenuOption>
          <ImageButton
            data-test-id="new-game"
            images={buttonImages.newGame}
            onClick={this.props.onNewGameClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="load-game"
            images={buttonImages.loadGame}
            onClick={this.props.onLoadGameClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="view-high-scores"
            images={buttonImages.viewHighScores}
            onClick={this.props.onViewHighScoresClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="view-credits"
            images={buttonImages.viewCredits}
            onClick={this.props.onViewCreditsClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="quit"
            images={buttonImages.quit}
            onClick={this.props.onQuitClick}
          />
        </MenuOption>
      </Menu>
    );
  }
}

export type MainMenuProps = ExtractPublicProps<typeof MainMenu>;
