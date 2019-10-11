import { defineMessages } from "react-intl";

import { MoraleModifierType, MoraleType, TownId } from "heroes-homm1";

export const moraleMessages = defineMessages({
  title: {
    defaultMessage: "Morale",
    id: "game.morale.title",
  },
});

const getTypeDescriptionKey = (value: MoraleType) =>
  `${value}Description`;

const getTypeValueKey = (value: MoraleType) =>
  `${value}Value`;

const moraleTypeMessages = defineMessages({
  [MoraleType.Good]: {
    defaultMessage: "Good Morale",
    id: "game.morale.good",
  },
  [getTypeDescriptionKey(MoraleType.Good)]: {
    defaultMessage: "Good morale may give your armies extra attacks in combat.",
    id: "game.morale.good.description",
  },
  [getTypeValueKey(MoraleType.Good)]: {
    defaultMessage: "Good",
    id: "game.morale.goodValue",
  },
  [MoraleType.Neutral]: {
    defaultMessage: "Neutral Morale",
    id: "game.morale.neutral",
  },
  [getTypeDescriptionKey(MoraleType.Neutral)]: {
    defaultMessage: "Neutral morale means your armies will never be blessed with extra attacks or freeze in combat.",
    id: "game.morale.neutral.description",
  },
  [getTypeValueKey(MoraleType.Neutral)]: {
    defaultMessage: "Neutral",
    id: "game.morale.neutralValue",
  },
  [MoraleType.Bad]: {
    defaultMessage: "Bad Morale",
    id: "game.morale.bad",
  },
  [getTypeDescriptionKey(MoraleType.Bad)]: {
    defaultMessage: "Bad morale may cause your armies to freeze in combat.",
    id: "game.morale.bad.description",
  },
  [getTypeValueKey(MoraleType.Bad)]: {
    defaultMessage: "Bad",
    id: "game.morale.badValue",
  },
});

export const getMoraleTypeNameMessage = (value: MoraleType) =>
  moraleTypeMessages[value];

export const getMoraleTypeDescriptionMessage = (value: MoraleType) =>
  moraleTypeMessages[getTypeDescriptionKey(value)];

export const getMoraleTypeValueMessage = (value: MoraleType) =>
  moraleTypeMessages[getTypeValueKey(value)];

const getMoraleModifierTypeId = (value: MoraleModifierType) =>
  `game.morale.modifier.${value}`;

const moraleModifierTypeMessages = defineMessages({
  [MoraleModifierType.HeroClass]: {
    defaultMessage: "{name} bonus",
    id: getMoraleModifierTypeId(MoraleModifierType.HeroClass),
  },
  [MoraleModifierType.SameOriginTroops]: {
    defaultMessage: "All {name} troops",
    id: getMoraleModifierTypeId(MoraleModifierType.SameOriginTroops),
  },
  [MoraleModifierType.DifferentOriginTroops]: {
    defaultMessage: "Troops of {count} alignments",
    id: getMoraleModifierTypeId(MoraleModifierType.DifferentOriginTroops),
  },
  [MoraleModifierType.Artifact]: {
    defaultMessage: "{name}",
    id: getMoraleModifierTypeId(MoraleModifierType.Artifact),
  },
  [MoraleModifierType.StructureVisited]: {
    defaultMessage: "{name} visited",
    id: getMoraleModifierTypeId(MoraleModifierType.StructureVisited),
  },
  [MoraleModifierType.StructureRobber]: {
    defaultMessage: "{name} robber",
    id: getMoraleModifierTypeId(MoraleModifierType.StructureRobber),
  },
  [MoraleModifierType.BattleCowardice]: {
    defaultMessage: "Battle cowardice",
    id: getMoraleModifierTypeId(MoraleModifierType.BattleCowardice),
  },
});

export const getMoraleModifierTypeMessage = (value: MoraleModifierType) =>
  moraleModifierTypeMessages[value];

// TODO: move to town messages?
const originMessages = defineMessages<string>({
  [TownId.Farm]: {
    defaultMessage: "human",
    id: "game.morale.origin.farm",
  },
  [TownId.Plains]: {
    defaultMessage: "plains",
    id: "game.morale.origin.plains",
  },
  [TownId.Forest]: {
    defaultMessage: "forest",
    id: "game.morale.origin.forest",
  },
  [TownId.Mountains]: {
    defaultMessage: "mountains",
    id: "game.morale.origin.mountains",
  },
  neutral: {
    defaultMessage: "neutral",
    id: "game.morale.origin.neutral",
  },
});

export const getOriginNameMessage = (value?: string) =>
  value !== undefined ?
    originMessages[value] :
    originMessages.neutral;
