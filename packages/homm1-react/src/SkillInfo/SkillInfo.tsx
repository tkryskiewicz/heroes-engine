import * as React from "react";

export interface SkillInfoProps {
  skill: string;
  value: number;
}

export class SkillInfo extends React.Component<SkillInfoProps> {
  public render() {
    const style: React.CSSProperties = {
      position: "relative",
      width: "82px",
    };

    return (
      <div style={style}>
        {this.renderBackground(this.props.skill)}
        {this.renderName(this.props.skill)}
        {this.renderValue(this.props.value)}
      </div>
    );
  }

  private renderBackground(skill: string) {
    return (
      <img
        src={`assets/ui/hero-window/${skill}.jpg`}
      />
    );
  }

  private renderName(skill: string) {
    const style: React.CSSProperties = {
      color: "#fff",
      position: "absolute",
      textAlign: "center",
      top: 2,
      width: "100%",
    };

    return (
      <div style={style}>
        {skill}
      </div>
    );
  }

  private renderValue(value: number) {
    const style: React.CSSProperties = {
      bottom: 2,
      color: "#fff",
      position: "absolute",
      textAlign: "center",
      width: "100%",
    };

    return (
      <div style={style}>
        {value}
      </div>
    );
  }
}
