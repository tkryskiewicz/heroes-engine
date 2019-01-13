import { connect } from "react-redux";
import { Dispatch } from "redux";

import { closeStructureDetails } from "heroes-homm1-state";

import { ThievesGuildWindow, ThievesGuildWindowProps } from "./ThievesGuildWindow";

type StateProp =
  "townCount" |
  "castleCount" |
  "heroCount" |
  "gold" |
  "primaryResources" |
  "secondaryResources" |
  "foundObelisksCount" |
  "armyStrength";

const mapStateToProps = (): Pick<ThievesGuildWindowProps, StateProp> => ({
  armyStrength: [],
  castleCount: [],
  foundObelisksCount: [],
  gold: [],
  heroCount: [],
  primaryResources: [],
  secondaryResources: [],
  townCount: [],
});

type DispatchProp =
  "onExitClick";

const mapDispatchToProps = (dispatch: Dispatch): Pick<ThievesGuildWindowProps, DispatchProp> => ({
  onExitClick() {
    dispatch(closeStructureDetails());
  },
});

const ThievesGuildWindowConnected = connect(mapStateToProps, mapDispatchToProps)(ThievesGuildWindow);

export {
  ThievesGuildWindowConnected as ThievesGuildWindow,
  ThievesGuildWindowProps,
};
