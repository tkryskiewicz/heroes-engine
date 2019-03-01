import * as React from "react";

import { isStructureBuilt, Town } from "heroes-core";
import { StructureId } from "heroes-homm1";
import { TownLocators, TownLocatorsProps } from "heroes-homm1-react";

import { TownWindow } from "../TownWindow";

export interface TownLocatorsContainerProps extends Pick<TownLocatorsProps, Exclude<keyof TownLocatorsProps, "towns">> {
  readonly towns: Town[];
  readonly locatorDetailsVisible?: boolean;
  readonly onCloseLocatorDetailsClick?: () => void;
}

export class TownLocatorsContainer extends React.Component<TownLocatorsContainerProps> {
  public render() {
    const { towns, selectedIndex, locatorDetailsVisible } = this.props;

    const selectedTown = selectedIndex !== undefined && towns[selectedIndex] ?
      towns[selectedIndex] :
      undefined;

    return (
      <>
        <TownLocators
          {...this.props}
          towns={towns.map(this.mapTown)}
        />
        {selectedTown && locatorDetailsVisible && this.renderTownWindow(selectedTown)}
      </>
    );
  }

  private readonly mapTown = (town: Town) => ({
    id: town.id,
    isCastleBuilt: isStructureBuilt(town, StructureId.Castle),
  })

  private renderTownWindow(town: Town) {
    return (
      <TownWindow
        visible={true}
        town={town}
        onExitClick={this.props.onCloseLocatorDetailsClick}
      />
    );
  }
}
