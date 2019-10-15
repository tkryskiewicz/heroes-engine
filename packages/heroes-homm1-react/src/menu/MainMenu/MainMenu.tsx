import React from "react";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base/ImageButton";
import { Menu, MenuOption } from "../Menu";

export interface MainMenuProps {
  readonly onNewGameClick?: () => void;
  readonly onLoadGameClick?: () => void;
  readonly onViewHighScoresClick?: () => void;
  readonly onViewCreditsClick?: () => void;
  readonly onQuitClick?: () => void;
}

export class MainMenu extends React.Component<MainMenuProps> {
  public render() {
    return (
      <Menu>
        <MenuOption>
          <ImageButton
            className="new-game"
            images={buttonImages.newGame}
            onClick={this.props.onNewGameClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            className="load-game"
            images={buttonImages.loadGame}
            onClick={this.props.onLoadGameClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            className="view-high-scores"
            images={buttonImages.viewHighScores}
            onClick={this.props.onViewHighScoresClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            className="view-credits"
            images={buttonImages.viewCredits}
            onClick={this.props.onViewCreditsClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            className="quit"
            images={buttonImages.quit}
            onClick={this.props.onQuitClick}
          />
        </MenuOption>
      </Menu>
    );
  }
}
