import React from "react";

import { isStructureBuilt, Town } from "heroes-core";
import { noop } from "heroes-helpers";
import { StructureId } from "heroes-homm1";
import { TownLocators, TownLocatorsProps } from "heroes-homm1-react";

import { TownWindow } from "../TownWindow";

interface TownLocatorsContainerProps {
  readonly towns: Town[];
  readonly activeObjectId?: string;
  readonly onSelectLocatorClick: (id: string) => void;
  readonly locatorDetailsVisible: boolean;
  readonly onOpenLocatorDetailsClick: () => void;
  readonly onCloseLocatorDetailsClick: () => void;
}

type DefaultProp =
  "onSelectLocatorClick" |
  "locatorDetailsVisible" |
  "onOpenLocatorDetailsClick" |
  "onCloseLocatorDetailsClick";

export class TownLocatorsContainer extends React.Component<TownLocatorsContainerProps> {
  public static readonly defaultProps: Pick<TownLocatorsContainerProps, DefaultProp> = {
    locatorDetailsVisible: false,
    onCloseLocatorDetailsClick: noop,
    onOpenLocatorDetailsClick: noop,
    onSelectLocatorClick: noop,
  };

  public render() {
    const { towns, activeObjectId, locatorDetailsVisible } = this.props;

    const selectedTown = towns.find((t) => t.id === activeObjectId);

    return (
      <>
        <TownLocators
          towns={towns.map(this.mapTown)}
          selectedIndex={selectedTown && towns.indexOf(selectedTown)}
          onLocatorClick={this.onLocatorClick}
        />
        {selectedTown && locatorDetailsVisible && this.renderLocatorDetails(selectedTown)}
      </>
    );
  }

  private readonly mapTown = (town: Town): TownLocatorsProps["towns"][0] => ({
    id: town.id,
    isCastleBuilt: isStructureBuilt(town, StructureId.Castle),
  })

  private readonly onLocatorClick = (index: number) => {
    const town = this.props.towns[index];

    if (!town) {
      return;
    }

    if (town.id !== this.props.activeObjectId) {
      this.props.onSelectLocatorClick(town.id);
    } else {
      this.props.onOpenLocatorDetailsClick();
    }
  }

  private renderLocatorDetails(town: Town) {
    return (
      <TownWindow
        visible={true}
        town={town}
        onExitClick={this.props.onCloseLocatorDetailsClick}
      />
    );
  }
}

type ContainerProps = ExtractProps<typeof TownLocatorsContainer>;

export {
  ContainerProps as TownLocatorsContainerProps,
};
