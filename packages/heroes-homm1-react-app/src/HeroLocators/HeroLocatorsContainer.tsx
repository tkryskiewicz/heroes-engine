import * as React from "react";

import { Hero } from "heroes-core";
import { HeroLocators } from "heroes-homm1-react";

import { HeroWindow } from "../HeroWindow";

export interface HeroLocatorsContainerProps {
  readonly heroes: Hero[];
  readonly selectedIndex?: number;
  readonly onSelectLocator: (index: number) => void;
  readonly heroDetailsVisible: boolean;
  readonly onOpenHeroDetailsClick: () => void;
  readonly onConfirmDismissHeroClick: () => void;
  readonly onCloseHeroDetailsClick: () => void;
}

export class HeroLocatorsContainer extends React.Component<HeroLocatorsContainerProps> {
  public render() {
    const { heroes, selectedIndex, heroDetailsVisible } = this.props;

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
        {selectedHero && heroDetailsVisible && this.renderHeroDetails(selectedHero)}
      </>
    );
  }

  private readonly onLocatorClick = (index: number) => {
    const hero = this.props.heroes[index];

    if (!hero) {
      return;
    }

    if (index !== this.props.selectedIndex && this.props.onSelectLocator) {
      this.props.onSelectLocator(index);
    } else {
      this.props.onOpenHeroDetailsClick();
    }
  }

  private renderHeroDetails(hero: Hero) {
    return (
      <HeroWindow
        visible={true}
        hero={hero}
        dismissible={true}
        onConfirmDismissHeroClick={this.props.onConfirmDismissHeroClick}
        onExitClick={this.props.onCloseHeroDetailsClick}
      />
    );
  }
}
