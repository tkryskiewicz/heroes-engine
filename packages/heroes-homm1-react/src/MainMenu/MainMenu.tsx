import { Row } from "antd";
import * as React from "react";

import { buttonImages } from "./assets";

import { ImageButton, Menu } from "../base";

export interface MainMenuProps {
  onNewGameClick?: () => void;
  onLoadGameClick?: () => void;
  onViewHighScoresClick?: () => void;
  onViewCreditsClick?: () => void;
  onQuitClick?: () => void;
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
