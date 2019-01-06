import { defineMessages, Messages } from "react-intl";

import { convertValue, unknownMessage } from "./util";

export const spellMessages: Messages = defineMessages({
  antimagic: {
    defaultMessage: "Antimagic",
    id: "game.spell.antimagic",
  },
  armageddon: {
    defaultMessage: "Armageddon",
    id: "game.spell.armageddon",
  },
  berserk: {
    defaultMessage: "Berserk",
    id: "game.spell.berserk",
  },
  bless: {
    defaultMessage: "Bless",
    id: "game.spell.bless",
  },
  blind: {
    defaultMessage: "Blind",
    id: "game.spell.blind",
  },
  cure: {
    defaultMessage: "Cure",
    id: "game.spell.cure",
  },
  curse: {
    defaultMessage: "Curse",
    id: "game.spell.curse",
  },
  dimensionDoor: {
    defaultMessage: "Dimension Door",
    id: "game.spell.dimensionDoor",
  },
  dispel: {
    defaultMessage: "Dispel",
    id: "game.spell.dispel",
  },
  fireball: {
    defaultMessage: "Fireball",
    id: "game.spell.fireball",
  },
  haste: {
    defaultMessage: "Haste",
    id: "game.spell.haste",
  },
  identifyHero: {
    defaultMessage: "Identify Hero",
    id: "game.spell.identifyHero",
  },
  lightning: {
    defaultMessage: "Lightning",
    id: "game.spell.lightning",
  },
  meteorShower: {
    defaultMessage: "Meteor Shower",
    id: "game.spell.meteorShower",
  },
  paralyze: {
    defaultMessage: "Paralyze",
    id: "game.spell.paralyze",
  },
  protection: {
    defaultMessage: "Protection",
    id: "game.spell.protection",
  },
  resurrect: {
    defaultMessage: "Resurrect",
    id: "game.spell.resurrect",
  },
  slow: {
    defaultMessage: "Slow",
    id: "game.spell.slow",
  },
  storm: {
    defaultMessage: "Storm",
    id: "game.spell.storm",
  },
  summonBoat: {
    defaultMessage: "Summon Boat",
    id: "game.spell.summonBoat",
  },
  teleport: {
    defaultMessage: "Teleport",
    id: "game.spell.teleport",
  },
  townGate: {
    defaultMessage: "Town Gate",
    id: "game.spell.townGate",
  },
  turnUndead: {
    defaultMessage: "Turn Undead",
    id: "game.spell.turnUndead",
  },
  viewAll: {
    defaultMessage: "View All",
    id: "game.spell.viewAll",
  },
  viewArtifacts: {
    defaultMessage: "ViewArtifacts",
    id: "game.spell.viewArtifacts",
  },
  viewHeroes: {
    defaultMessage: "View Heroes",
    id: "game.spell.viewHeroes",
  },
  viewMines: {
    defaultMessage: "View Mines",
    id: "game.spell.viewMines",
  },
  viewResources: {
    defaultMessage: "View Resources",
    id: "game.spell.viewResources",
  },
  viewTowns: {
    defaultMessage: "View Towns",
    id: "game.spell.viewTowns",
  },
});

export const getSpellNameMessage = (spell: string) =>
  spellMessages[convertValue(spell)] || unknownMessage;
