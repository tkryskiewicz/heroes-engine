import { connect } from "react-redux";

import { ThievesGuildWindow, ThievesGuildWindowProps } from "heroes-homm1-react";

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

const ComponentConnected = connect(mapStateToProps)(ThievesGuildWindow);

type ComponentConnectedProps = ExtractProps<typeof ComponentConnected>;

export {
  ComponentConnected as ThievesGuildWindow,
  ComponentConnectedProps as ThievesGuildWindowProps,
};
