import * as React from "react";

import { Hero } from "heroes-core";
import { HeroLocators } from "heroes-homm1-react";

import { HeroWindow } from "../HeroWindow";

export interface HeroLocatorsContainerProps {
  readonly heroes: Hero[];
  readonly selectedIndex?: number;
  readonly onSelectLocatorClick: (index: number) => void;
  readonly locatorDetailsVisible: boolean;
  readonly onOpenLocatorDetailsClick: () => void;
  readonly onConfirmDismissHeroClick: () => void;
  readonly onCloseLocatorDetailsClick: () => void;
}

export class HeroLocatorsContainer extends React.Component<HeroLocatorsContainerProps> {
  public render() {
    const { heroes, selectedIndex, locatorDetailsVisible } = this.props;

    const selectedHero = selectedIndex !== undefined && heroes[selectedIndex] ?
      heroes[selectedIndex] :
      undefined;

    return (
      <>
        <HeroLocators
          heroes={this.props.heroes}
          selectedIndex={this.props.selectedIndex}
          onLocatorClick={this.onLocatorClick}
        />
        {selectedHero && locatorDetailsVisible && this.renderLocatorDetails(selectedHero)}
      </>
    );
  }

  private readonly onLocatorClick = (index: number) => {
    const hero = this.props.heroes[index];

    if (!hero) {
      return;
    }

    if (index !== this.props.selectedIndex && this.props.onSelectLocatorClick) {
      this.props.onSelectLocatorClick(index);
    } else {
      this.props.onOpenLocatorDetailsClick();
    }
  }

  private renderLocatorDetails(hero: Hero) {
    return (
      <HeroWindow
        visible={true}
        hero={hero}
        dismissible={true}
        onConfirmDismissHeroClick={this.props.onConfirmDismissHeroClick}
        onExitClick={this.props.onCloseLocatorDetailsClick}
      />
    );
  }
}
