import React from "react";

export interface CrestProps {
  readonly alignment: string;
  readonly heroClass?: string;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
  readonly onClick: (alignment: string, heroClass?: string) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class Crest extends React.Component<CrestProps> {
  public static readonly defaultProps: Pick<CrestProps, DefaultProp> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    const { alignment, heroClass } = this.props;

    const path = heroClass ?
      `assets/heroClasses/${heroClass}/crests/${alignment}/large.jpg` :
      `assets/alignments/${alignment}/crest.jpg`;

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
    this.props.onClick(this.props.alignment, this.props.heroClass);
  }
}
