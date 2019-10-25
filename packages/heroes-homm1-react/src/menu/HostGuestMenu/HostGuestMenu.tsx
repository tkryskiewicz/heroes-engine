import React from "react";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { Menu, MenuOption } from "../Menu";

interface Props {
  readonly descriptionVisible: boolean;
  readonly onHostClick: () => void;
  readonly onGuestClick: () => void;
  readonly onCancelClick: () => void;
}

export class HostGuestMenu extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    descriptionVisible: false,
    onCancelClick: () => undefined,
    onGuestClick: () => undefined,
    onHostClick: () => undefined,
  };

  public render() {
    return(
      <Menu>
        <MenuOption>
          <ImageButton
            data-test-id="host"
            images={this.props.descriptionVisible ? buttonImages.hostDials : buttonImages.host}
            onClick={this.props.onHostClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="guest"
            images={this.props.descriptionVisible ? buttonImages.guestAnswers : buttonImages.guest}
            onClick={this.props.onGuestClick}
          />
        </MenuOption>
        <MenuOption />
        <MenuOption />
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

export type HostGuestMenuProps = ExtractPublicProps<typeof HostGuestMenu>;
