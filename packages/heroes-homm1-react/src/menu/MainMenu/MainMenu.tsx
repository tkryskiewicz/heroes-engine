import { Row } from "antd";
import React from "react";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { Menu } from "../Menu";

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
        <Row>
          <ImageButton
            images={buttonImages.newGame}
            onClick={this.props.onNewGameClick}
          />
        </Row>
        <Row>
          <ImageButton
            images={buttonImages.loadGame}
            onClick={this.props.onLoadGameClick}
          />
        </Row>
        <Row>
          <ImageButton
            images={buttonImages.viewHighScores}
            onClick={this.props.onViewHighScoresClick}
          />
        </Row>
        <Row>
          <ImageButton
            images={buttonImages.viewCredits}
            onClick={this.props.onViewCreditsClick}
          />
        </Row>
        <Row>
          <ImageButton
            images={buttonImages.quit}
            onClick={this.props.onQuitClick}
          />
        </Row>
      </Menu>
    );
  }
}
