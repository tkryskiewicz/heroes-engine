import * as React from "react";

export interface CrestProps {
  readonly alignment: string;
  readonly heroClass: string;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
  readonly onClick: (alignment: string, heroClass: string) => void;
}

export class Crest extends React.Component<CrestProps> {
  public static readonly defaultProps: Pick<CrestProps, "onClick" | "onMouseEnter" | "onMouseLeave"> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <img
        src={`assets/heroClasses/${this.props.heroClass}/crests/${this.props.alignment}/large.jpg`}
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
