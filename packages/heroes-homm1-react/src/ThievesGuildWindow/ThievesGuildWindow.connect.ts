import { connect } from "react-redux";

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

const ThievesGuildWindowConnected = connect(mapStateToProps)(ThievesGuildWindow);

export {
  ThievesGuildWindowConnected as ThievesGuildWindow,
  ThievesGuildWindowProps,
};
