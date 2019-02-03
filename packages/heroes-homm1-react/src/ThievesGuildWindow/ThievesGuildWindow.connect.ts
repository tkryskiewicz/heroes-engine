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

type ThievesGuildWindowConnectedProps = ExtractProps<typeof ThievesGuildWindowConnected>;

export {
  ThievesGuildWindowConnected as ThievesGuildWindow,
  ThievesGuildWindowConnectedProps as ThievesGuildWindowProps,
};
