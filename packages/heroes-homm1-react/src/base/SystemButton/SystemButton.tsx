import React from "react";

import { buttonImages } from "./assets";

import { ImageButton } from "../ImageButton";

interface Props {
  readonly type: "yes" | "no" | "okay" | "cancel";
  readonly disabled: boolean;
  readonly onClick: () => void;
}

type DefaultProp =
  "disabled" |
  "onClick";

export class SystemButton extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    disabled: false,
    onClick: () => undefined,
  };

  public render() {
    return (
      <ImageButton
        images={buttonImages[this.props.type]}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      />
    );
  }
}

export type SystemButtonProps = ExtractPublicProps<typeof SystemButton>;
