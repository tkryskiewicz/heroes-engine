import React from "react";

import { noop } from "heroes-helpers";

export interface CrestProps {
  readonly playerColor: string;
  readonly heroClass?: string;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
  readonly onClick: (playerColor: string, heroClass?: string) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class Crest extends React.Component<CrestProps> {
  public static readonly defaultProps: Pick<CrestProps, DefaultProp> = {
    onClick: noop,
    onMouseEnter: noop,
    onMouseLeave: noop,
  };

  public render() {
    const { playerColor, heroClass } = this.props;

    const path = heroClass ?
      `assets/heroClasses/${heroClass}/crests/${playerColor}/large.jpg` :
      `assets/playerColors/${playerColor}/crest.jpg`;

    return (
      <img
        src={path}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onClick={this.onClick}
      />
    );
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.playerColor, this.props.heroClass);
  }
}
