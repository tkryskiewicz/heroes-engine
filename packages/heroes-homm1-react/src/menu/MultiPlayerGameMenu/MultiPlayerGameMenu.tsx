import React from "react";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { Menu } from "../Menu";

export interface MultiPlayerGameMenuProps {
  readonly onHotSeatClick: () => void;
  readonly onDirectConnectClick: () => void;
  readonly onModemClick: () => void;
  readonly onNetworkClick: () => void;
  readonly onCancelClick: () => void;
}

type DefaultProp =
  "onHotSeatClick" |
  "onDirectConnectClick" |
  "onModemClick" |
  "onNetworkClick" |
  "onCancelClick";

export class MultiPlayerGameMenu extends React.Component<MultiPlayerGameMenuProps> {
  public static readonly defaultProps: Pick<MultiPlayerGameMenuProps, DefaultProp> = {
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
          <ImageButton
            images={buttonImages.hotSeat}
            onClick={this.props.onHotSeatClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages.directConnect}
            onClick={this.props.onDirectConnectClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages.modem}
            onClick={this.props.onModemClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages.network}
            onClick={this.props.onNetworkClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages.cancel}
            onClick={this.props.onCancelClick}
          />
        </div>
      </Menu>
    );
  }
}
