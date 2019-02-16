import * as React from "react";

import { Resources } from "heroes-core";
import { BuySpellBookWindow, BuySpellBookWindowProps } from "heroes-homm1-react";

export interface BuyMageGuildSpellBookWindowProps extends
  Pick<BuySpellBookWindowProps, Exclude<keyof BuySpellBookWindowProps, "onConfirmClick">> {
  readonly hero: string;
  readonly town: string;
  readonly onConfirmClick: (hero: string, town: string, cost: Resources) => void;
}

export class BuyMageGuildSpellBookWindow extends React.Component<BuyMageGuildSpellBookWindowProps> {
  public render() {
    return (
      <BuySpellBookWindow
        {...this.props}
        onConfirmClick={this.onConfirmClick}
      />
    );
  }

  private readonly onConfirmClick = () => {
    this.props.onConfirmClick(this.props.hero, this.props.town, this.props.cost);
  }
}
