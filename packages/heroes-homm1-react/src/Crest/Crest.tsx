import * as React from "react";

export interface CrestProps {
  alignment: string;
  heroClass: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: (alignment: string, heroClass: string) => void;
}

export class Crest extends React.Component<CrestProps> {
  public static defaultProps: Pick<CrestProps, "onClick" | "onMouseEnter" | "onMouseLeave"> = {
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

  private onClick = () => {
    this.props.onClick(this.props.alignment, this.props.heroClass);
  }
}
