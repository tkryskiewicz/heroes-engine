import * as React from "react";

import { Hero } from "heroes-core";
import { HeroLocators } from "heroes-homm1-react";

import { HeroWindow } from "../HeroWindow";

export interface HeroLocatorsContainerProps {
  readonly heroes: Hero[];
  readonly activeObjectId?: string;
  readonly onSelectLocatorClick: (id: string) => void;
  readonly locatorDetailsVisible: boolean;
  readonly onOpenLocatorDetailsClick: () => void;
  readonly onConfirmDismissHeroClick: () => void;
  readonly onCloseLocatorDetailsClick: () => void;
}

type DefaultProp =
  "onSelectLocatorClick" |
  "onOpenLocatorDetailsClick" |
  "onConfirmDismissHeroClick" |
  "onCloseLocatorDetailsClick";

export class HeroLocatorsContainer extends React.Component<HeroLocatorsContainerProps> {
  public static readonly defaultProps: Pick<HeroLocatorsContainerProps, DefaultProp> = {
    onCloseLocatorDetailsClick: () => undefined,
    onConfirmDismissHeroClick: () => undefined,
    onOpenLocatorDetailsClick: () => undefined,
    onSelectLocatorClick: () => undefined,
  };

  public render() {
    const { heroes, activeObjectId, locatorDetailsVisible } = this.props;

    const selectedHero = heroes.find((h) => h.id === activeObjectId);

    return (
      <>
        <HeroLocators
          heroes={this.props.heroes}
          selectedIndex={selectedHero && heroes.indexOf(selectedHero)}
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

    if (hero.id !== this.props.activeObjectId) {
      this.props.onSelectLocatorClick(hero.id);
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
