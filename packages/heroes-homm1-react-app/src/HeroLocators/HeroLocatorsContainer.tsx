import * as React from "react";

import { Hero } from "heroes-core";
import { HeroLocators, HeroLocatorsProps } from "heroes-homm1-react";

import { HeroWindow } from "../HeroWindow";

export interface HeroLocatorsContainerProps extends HeroLocatorsProps {
  readonly heroDetailsVisible: boolean;
  readonly onOpenHeroDetailsClick: () => void;
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
          onSelectLocator={this.props.onSelectLocator}
          onSelectedLocatorClick={this.props.onOpenHeroDetailsClick}
        />
        {selectedHero && heroDetailsVisible && this.renderHeroDetails(selectedHero)}
      </>
    );
  }

  private renderHeroDetails(hero: Hero) {
    return (
      <HeroWindow
        visible={true}
        hero={hero}
        dismissible={true}
        onExitClick={this.props.onCloseHeroDetailsClick}
      />
    );
  }
}
