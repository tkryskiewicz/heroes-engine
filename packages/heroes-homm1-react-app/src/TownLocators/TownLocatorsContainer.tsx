import * as React from "react";

import { isStructureBuilt, Town } from "heroes-core";
import { StructureId } from "heroes-homm1";
import { TownLocators, TownLocatorsProps } from "heroes-homm1-react";

import { TownWindow } from "../TownWindow";

interface TownLocatorsContainerProps {
  readonly towns: Town[];
  readonly selectedIndex?: number;
  readonly onSelectLocatorClick: (index: number) => void;
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
    onCloseLocatorDetailsClick: () => undefined,
    onOpenLocatorDetailsClick: () => undefined,
    onSelectLocatorClick: () => undefined,
  };

  public render() {
    const { towns, selectedIndex, locatorDetailsVisible } = this.props;

    const selectedTown = selectedIndex !== undefined && towns[selectedIndex] ?
      towns[selectedIndex] :
      undefined;

    return (
      <>
        <TownLocators
          towns={towns.map(this.mapTown)}
          selectedIndex={selectedIndex}
          onSelectLocator={this.props.onSelectLocatorClick}
          onSelectedLocatorClick={this.props.onOpenLocatorDetailsClick}
        />
        {selectedTown && locatorDetailsVisible && this.renderLocatorDetails(selectedTown)}
      </>
    );
  }

  private readonly mapTown = (town: Town): TownLocatorsProps["towns"][0] => ({
    id: town.id,
    isCastleBuilt: isStructureBuilt(town, StructureId.Castle),
  })

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
