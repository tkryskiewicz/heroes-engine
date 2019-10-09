import React from "react";

import { Structure } from "heroes-core";
import { WithGameWindowProps } from "heroes-homm1-react";

import { RecruitTroopWindow } from "../../RecruitTroopWindow";

export interface RecruitStructureTroopWindowProps extends WithGameWindowProps {
  readonly town: string;
  readonly structure: Structure;
  readonly onOkayClick: (town: string, structure: string, count: number) => void;
  readonly onCancelClick: () => void;
}

export class RecruitStructureTroopWindow extends React.Component<RecruitStructureTroopWindowProps> {
  public render() {
    const dwelling = this.props.structure.dwelling!;

    return (
      <RecruitTroopWindow
        visible={this.props.visible}
        creature={dwelling.creature}
        cost={dwelling.cost}
        availableCount={dwelling.availableCount}
        onOkayClick={this.onOkayClick}
        onCancelClick={this.props.onCancelClick}
      />
    );
  }

  private readonly onOkayClick = (count: number) => {
    this.props.onOkayClick(this.props.town, this.props.structure.id, count);
  }
}
