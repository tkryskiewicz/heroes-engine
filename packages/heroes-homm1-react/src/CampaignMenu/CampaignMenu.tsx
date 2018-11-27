import { Row } from "antd";
import * as React from "react";

import { CampaignIds } from "heroes-homm1";

import { GameButton } from "../GameButton";

export interface CampaignMenuProps {
  onPlayClick: (campaign: string) => void;
  onCancelClick: () => void;
}

export class CampaignMenu extends React.Component<CampaignMenuProps> {
  public static defaultProps: Pick<CampaignMenuProps, "onPlayClick" | "onCancelClick"> = {
    onCancelClick: () => undefined,
    onPlayClick: () => undefined,
  };

  public render() {
    return (
      <>
        {CampaignIds.map((campaign) => this.renderPlayButton(campaign))}
        <Row>
          <GameButton
            group="campaign-menu"
            type="cancel"
            onClick={this.props.onCancelClick}
          />
        </Row>
      </>
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
