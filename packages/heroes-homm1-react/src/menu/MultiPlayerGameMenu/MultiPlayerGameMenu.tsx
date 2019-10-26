import React from "react";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { Menu, MenuOption } from "../Menu";

export interface MultiPlayerGameMenuProps {
  readonly onHotSeatClick?: () => void;
  readonly onDirectConnectClick?: () => void;
  readonly onModemClick?: () => void;
  readonly onNetworkClick?: () => void;
  readonly onCancelClick?: () => void;
}

export class MultiPlayerGameMenu extends React.Component<MultiPlayerGameMenuProps> {
  public render() {
    return (
      <Menu>
        <MenuOption>
          <ImageButton
            data-test-id="hot-seat"
            images={buttonImages.hotSeat}
            onClick={this.props.onHotSeatClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="direct-connect"
            images={buttonImages.directConnect}
            onClick={this.props.onDirectConnectClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="modem"
            images={buttonImages.modem}
            onClick={this.props.onModemClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="network"
            images={buttonImages.network}
            onClick={this.props.onNetworkClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="cancel"
            images={buttonImages.cancel}
            onClick={this.props.onCancelClick}
          />
        </MenuOption>
      </Menu>
    );
  }
}
