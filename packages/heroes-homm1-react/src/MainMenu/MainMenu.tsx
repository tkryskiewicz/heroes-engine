import { Row } from "antd";
import * as React from "react";

import { GameButton, Menu } from "../base";

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
          <GameButton
            group="main-menu"
            type="new-game"
            onClick={this.props.onNewGameClick}
          />
        </Row>
        <Row>
          <GameButton
            group="main-menu"
            type="load-game"
            onClick={this.props.onLoadGameClick}
          />
        </Row>
        <Row>
          <GameButton
            group="main-menu"
            type="view-high-scores"
            onClick={this.props.onViewHighScoresClick}
          />
        </Row>
        <Row>
          <GameButton
            group="main-menu"
            type="view-credits"
            onClick={this.props.onViewCreditsClick}
          />
        </Row>
        <Row>
          <GameButton
            group="main-menu"
            type="quit"
            onClick={this.props.onQuitClick}
          />
        </Row>
      </Menu>
    );
  }
}
