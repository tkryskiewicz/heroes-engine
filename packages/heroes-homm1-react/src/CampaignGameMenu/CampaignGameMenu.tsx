import { Row } from "antd";
import * as React from "react";

import { CampaignIds } from "heroes-homm1";

import { GameButton, Menu } from "../base";

export interface CampaignGameMenuProps {
  onPlayClick: (campaign: string) => void;
  onCancelClick: () => void;
}

export class CampaignGameMenu extends React.Component<CampaignGameMenuProps> {
  public static defaultProps: Pick<CampaignGameMenuProps, "onPlayClick" | "onCancelClick"> = {
    onCancelClick: () => undefined,
    onPlayClick: () => undefined,
  };

  public render() {
    return (
      <Menu>
        {CampaignIds.map((campaign) => this.renderPlayButton(campaign))}
        <Row>
          <GameButton
            group="campaign-menu"
            type="cancel"
            onClick={this.props.onCancelClick}
          />
        </Row>
      </Menu>
    );
  }

  private renderPlayButton(campaign: string) {
    const onClick = () => this.onPlayClick(campaign);

    return (
      <Row key={campaign}>
        <GameButton
          group="campaign-menu"
          type={`play-${campaign}` as any}
          onClick={onClick}
        />
      </Row>
    );
  }

  private onPlayClick(campaign: string) {
    this.props.onPlayClick(campaign);
  }
}