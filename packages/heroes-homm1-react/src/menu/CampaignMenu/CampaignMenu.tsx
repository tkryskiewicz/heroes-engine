import React from "react";

import { CampaignId } from "heroes-homm1";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base/ImageButton";
import { Menu, MenuOption } from "../Menu";

interface Props {
  readonly onOptionClick: (value: CampaignId) => void;
  readonly onCancelClick?: () => void;
}

type DefaultProp =
  "onOptionClick";

export class CampaignMenu extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    onOptionClick: () => undefined,
  };

  public render() {
    return (
      <Menu>
        <MenuOption>
          <ImageButton
            className="play-lord-ironfist"
            images={buttonImages.playLordIronfist}
            onClick={this.onPlayLordIronfistClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            className="play-lord-slayer"
            images={buttonImages.playLordSlayer}
            onClick={this.onPlayLordSlayerClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            className="play-queen-lamanda"
            images={buttonImages.playQueenLamanda}
            onClick={this.onPlayQueenLamandaClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            className="play-lord-alamar"
            images={buttonImages.playLordAlamar}
            onClick={this.onPlayLordAlamar}
          />
        </MenuOption>
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

  private readonly onPlayLordIronfistClick = () => {
    this.props.onOptionClick(CampaignId.LordIronfist);
  }

  private readonly onPlayLordSlayerClick = () => {
    this.props.onOptionClick(CampaignId.LordSlayer);
  }

  private readonly onPlayQueenLamandaClick = () => {
    this.props.onOptionClick(CampaignId.QueenLamanda);
  }

  private readonly onPlayLordAlamar = () => {
    this.props.onOptionClick(CampaignId.LordAlamar);
  }
}

export type CampaignMenuProps = ExtractPublicProps<typeof CampaignMenu>;
