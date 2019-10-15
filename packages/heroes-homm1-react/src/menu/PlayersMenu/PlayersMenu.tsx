import React from "react";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base/ImageButton";
import { Menu, MenuOption } from "../Menu";

interface Props {
  readonly onPlayersClick: (count: number) => void;
  readonly onCancelClick?: () => void;
}

type DefaultProp =
  "onPlayersClick";

export class PlayersMenu extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    onPlayersClick: () => undefined,
  };

  public render() {
    return (
      <Menu>
        <MenuOption>
          <ImageButton
            className="two-players"
            images={buttonImages.twoPlayers}
            onClick={this.on2PlayersClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            className="three-players"
            images={buttonImages.threePlayers}
            onClick={this.on3PlayersClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            className="four-players"
            images={buttonImages.fourPlayers}
            onClick={this.on4PlayersClick}
          />
        </MenuOption>
        <MenuOption />
        <MenuOption>
          <ImageButton
            className="cancel"
            images={buttonImages.cancel}
            onClick={this.props.onCancelClick}
          />
        </MenuOption>
      </Menu>
    );
  }

  private readonly on2PlayersClick = () => {
    this.props.onPlayersClick(2);
  }

  private readonly on3PlayersClick = () => {
    this.props.onPlayersClick(3);
  }

  private readonly on4PlayersClick = () => {
    this.props.onPlayersClick(4);
  }
}

export type PlayersMenuProps = ExtractPublicProps<typeof PlayersMenu>;
