import * as React from "react";

export interface CrestProps {
  alignment: string;
  heroClass: string;
  onClick: (alignment: string, heroClass: string) => void;
}

export class Crest extends React.Component<CrestProps> {
  public static defaultProps: Pick<CrestProps, "onClick"> = {
    onClick: () => undefined,
  };

  public render() {
    return (
      <img
        src={`assets/heroClasses/${this.props.heroClass}/crests/${this.props.alignment}/large.jpg`}
        onClick={this.onClick}
      />
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.alignment, this.props.heroClass);
  }
}
