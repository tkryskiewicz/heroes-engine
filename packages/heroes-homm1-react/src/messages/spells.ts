import { defineMessages, Messages } from "react-intl";

import { SpellId } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getDescriptionKey = (spell: string) =>
  `${convertValue(spell)}Description`;

const getLongNameKey = (spell: string) =>
  `${convertValue(spell)}LongName`;

// TODO: fill out long names and descriptions
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
  [getDescriptionKey(SpellId.Bless)]: {
    defaultMessage: "Causes the selected creatures to inflict maximum damage.",
    id: "game.spells.bless.description",
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
    defaultMessage: "Dispel Magic",
    id: "game.spell.dispel",
  },
  [getDescriptionKey(SpellId.Dispel)]: {
    defaultMessage: "Removes all magic spells from all parties in the battle.",
    id: "game.spell.dispel.description",
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
    defaultMessage: "Lightning Bolt",
    id: "game.spell.lightning",
  },
  [getDescriptionKey(SpellId.Lightning)]: {
    defaultMessage: "Causes a bolt of electrical energy to strike the selected creature.",
    id: "game.spell.lightning.description",
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
  [getDescriptionKey(SpellId.Protection)]: {
    defaultMessage: "Magically increases the defense skill of the selected creatures.",
    id: "game.spell.protection.description",
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
  [getDescriptionKey(SpellId.Storm)]: {
    defaultMessage: "Magical elements pour down on the battlefield, damaging all creatures.",
    id: "game.spell.storm.description",
  },
  [getLongNameKey(SpellId.Storm)]: {
    defaultMessage: "Elemental Storm",
    id: "game.spell.storm.longName",
  },
  summonBoat: {
    defaultMessage: "Summon Boat",
    id: "game.spell.summonBoat",
  },
  [getDescriptionKey(SpellId.SummonBoat)]: {
    defaultMessage: `Summons the nearest unoccupied, friendly boat to an adjacent shore location.
      A friendly boat is one which you just built or were the most recent player to occupy.`,
    id: "game.spell.summonBoat.description",
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
  [getDescriptionKey(SpellId.ViewTowns)]: {
    defaultMessage: "Causes all towns and castles across the land to become visible.",
    id: "game.spell.viewTowns.description",
  },
});

export const getSpellNameMessage = (spell: string) =>
  spellMessages[convertValue(spell)] || unknownMessage;

export const getSpellDescriptionMessage = (spell: string) =>
  spellMessages[getDescriptionKey(spell)] || unknownMessage;

export const getSpellLongNameMessage = (spell: string) =>
  spellMessages[getLongNameKey(spell)] || getSpellNameMessage(spell) || unknownMessage;
