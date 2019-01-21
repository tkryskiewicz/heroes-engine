import * as React from "react";

import { CastleOptionStatus } from "heroes-homm1";

import * as styles from "./CastleOption.module.scss";

import { statusImages } from "./assets";

import { StructureIcon } from "../../StructureIcon";

export interface CastleOptionProps {
  town: string;
  option: string;
  status: CastleOptionStatus;
  onMouseEnter: (option: string, status: CastleOptionStatus) => void;
  onMouseLeave: (option: string, status: CastleOptionStatus) => void;
  onClick: (option: string, status: CastleOptionStatus) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onClick";

export class CastleOption extends React.Component<CastleOptionProps> {
  public static defaultProps: Pick<CastleOptionProps, DefaultProp> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        <StructureIcon
          town={this.props.town}
          structure={this.props.option}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
        />
        {this.renderStatusIcon(this.props.status)}
      </div>
    );
  }

  private renderStatusIcon(status: CastleOptionStatus) {
    return (
      <img
        className={styles.statusIcon}
        src={statusImages[status]}
      />
    );
  }

  private onMouseEnter = () => {
    this.props.onMouseEnter(this.props.option, this.props.status);
  }

  private onMouseLeave = () => {
    this.props.onMouseLeave(this.props.option, this.props.status);
  }

  private onClick = () => {
    if (this.props.status !== CastleOptionStatus.Available) {
      return;
    }

    this.props.onClick(this.props.option, this.props.status);
  }
}
