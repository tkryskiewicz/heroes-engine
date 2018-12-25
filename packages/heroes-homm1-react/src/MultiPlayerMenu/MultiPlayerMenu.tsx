import * as React from "react";

import { GameButton, Menu } from "../base";

export interface MultiPlayerMenuProps {
  onHotSeatClick: () => void;
  onDirectConnectClick: () => void;
  onModemClick: () => void;
  onNetworkClick: () => void;
  onCancelClick: () => void;
}

type DefaultProp =
  "onHotSeatClick" |
  "onDirectConnectClick" |
  "onModemClick" |
  "onNetworkClick" |
  "onCancelClick";

export class MultiPlayerMenu extends React.Component<MultiPlayerMenuProps> {
  public static defaultProps: Pick<MultiPlayerMenuProps, DefaultProp> = {
    onCancelClick: () => undefined,
    onDirectConnectClick: () => undefined,
    onHotSeatClick: () => undefined,
    onModemClick: () => undefined,
    onNetworkClick: () => undefined,
  };

  public render() {
    return (
      <Menu>
        <div>
          <GameButton
            group="multi-player-menu"
            type="hot-seat"
            onClick={this.props.onHotSeatClick}
          />
        </div>
        <div>
          <GameButton
            group="multi-player-menu"
            type="direct-connect"
            onClick={this.props.onDirectConnectClick}
          />
        </div>
        <div>
          <GameButton
            group="multi-player-menu"
            type="modem"
            onClick={this.props.onModemClick}
          />
        </div>
        <div>
          <GameButton
            group="multi-player-menu"
            type="network"
            onClick={this.props.onNetworkClick}
          />
        </div>
        <div>
          <GameButton
            group="multi-player-menu"
            type="cancel"
            onClick={this.props.onCancelClick}
          />
        </div>
      </Menu>
    );
  }
}
