import { connect } from "react-redux";

import { getGameTown, isDwellingStructure } from "heroes-core";
import { AppState } from "heroes-homm1-state";

import { TownPopulationWindow, TownPopulationWindowProps } from "./TownPopulationWindow";

type StateProp =
  "dwellings";

const mapStateToProps = (
  state: AppState,
  ownProps: Pick<TownPopulationWindowProps, "town">,
): Pick<TownPopulationWindowProps, StateProp> => {
  const town = getGameTown(state.game, ownProps.town)!;

  // TODO: convert to dwelling structure?
  const dwellings = town.structures.filter((s) => isDwellingStructure(s));

  return {
    dwellings: dwellings
      .map((s) => ({
        available: s.dwelling!.availableCount,
        creature: s.dwelling!.creature,
        growthRate: s.dwelling!.growth,
        id: s.id,
      }))
      .filter((d) => d),
  };
};

const TownPopulationWindowConnected = connect(mapStateToProps)(TownPopulationWindow);

export {
  TownPopulationWindowConnected as TownPopulationWindow,
  TownPopulationWindowProps,
};
