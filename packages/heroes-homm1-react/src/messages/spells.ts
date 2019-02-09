import { defineMessages, Messages } from "react-intl";

import { SpellId } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getDescriptionKey = (spell: string) =>
  `${convertValue(spell)}Description`;

const getLongNameKey = (spell: string) =>
  `${convertValue(spell)}LongName`;

// TODO: fill out long names and descriptions
const spellMessages: Messages = defineMessages({
  antimagic: {
    defaultMessage: "Anti-Magic",
    id: "game.spell.antimagic",
  },
  [getDescriptionKey(SpellId.Antimagic)]: {
    defaultMessage: "Prevents harmful magic against the selected creatures.",
    id: "game.spell.antimagic.description",
  },
  armageddon: {
    defaultMessage: "Armageddon",
    id: "game.spell.armageddon",
  },
  [getDescriptionKey(SpellId.Armageddon)]: {
    defaultMessage: "Holy terror strikes the battlefield, causing severe damage to all creatures.",
    id: "game.spell.armageddon.description",
  },
  berserk: {
    defaultMessage: "Berserk",
    id: "game.spell.berserk",
  },
  [getDescriptionKey(SpellId.Berserk)]: {
    defaultMessage: "Causes a creature to attack its nearest neighbor.",
    id: "game.spell.berserk.description",
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
  [getDescriptionKey(SpellId.Blind)]: {
    defaultMessage: "Clouds the affected creatures' eyes, preventing them from moving.",
    id: "game.spell.blind.description",
  },
  cure: {
    defaultMessage: "Cure",
    id: "game.spell.cure",
  },
  [getDescriptionKey(SpellId.Cure)]: {
    defaultMessage: "Removes all negative spells cast upon your forces.",
    id: "game.spell.cure.description",
  },
  curse: {
    defaultMessage: "Curse",
    id: "game.spell.curse",
  },
  [getDescriptionKey(SpellId.Curse)]: {
    defaultMessage: "Causes the selected creatures to inflict minimum damage.",
    id: "game.spell.curse.description",
  },
  dimensionDoor: {
    defaultMessage: "Dimension Door",
    id: "game.spell.dimensionDoor",
  },
  [getDescriptionKey(SpellId.DimensionDoor)]: {
    defaultMessage: "Allows the caster to magically transport himself to a nearby location.",
    id: "game.spell.dimensionDoor.description",
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
  [getDescriptionKey(SpellId.Fireball)]: {
    defaultMessage: "Causes a giant fireball to strike the selected area, damaging all nearby creatures.",
    id: "game.spell.fireball.description",
  },
  haste: {
    defaultMessage: "Haste",
    id: "game.spell.haste",
  },
  [getDescriptionKey(SpellId.Haste)]: {
    defaultMessage: "Increases the speed of any creature to 'very fast'.",
    id: "game.spell.haste.description",
  },
  identifyHero: {
    defaultMessage: "Identify Hero",
    id: "game.spell.identifyHero",
  },
  [getDescriptionKey(SpellId.IdentifyHero)]: {
    defaultMessage: "Allows the caster to view detailed information on enemy Heroes.",
    id: "game.spell.identifyHero.description",
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
  [getDescriptionKey(SpellId.MeteorShower)]: {
    defaultMessage: "A rain of rocks strikes an area of the battlefield, damaging all nearby creatures.",
    id: "game.spell.meteorShower.description",
  },
  paralyze: {
    defaultMessage: "Paralyze",
    id: "game.spell.paralyze",
  },
  [getDescriptionKey(SpellId.Paralyze)]: {
    defaultMessage: "The targeted creatures are paralyzed, unable to move or retaliate.",
    id: "game.spell.paralyze.description",
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
  [getDescriptionKey(SpellId.Resurrect)]: {
    defaultMessage: "Resurrects creatures from a damaged monster group.",
    id: "game.spell.resurrect.description",
  },
  slow: {
    defaultMessage: "Slow",
    id: "game.spell.slow",
  },
  [getDescriptionKey(SpellId.Slow)]: {
    defaultMessage: "Slows down even the fastest enemy creature.",
    id: "game.spell.slow.description",
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
  [getDescriptionKey(SpellId.Teleport)]: {
    defaultMessage: "Teleports the creature you select to any open position on the battlefield.",
    id: "game.spell.teleport.description",
  },
  townGate: {
    defaultMessage: "Town Gate",
    id: "game.spell.townGate",
  },
  [getDescriptionKey(SpellId.TownGate)]: {
    defaultMessage: "Returns the caster to any town or castle currently owned.",
    id: "game.spell.townGate.description",
  },
  turnUndead: {
    defaultMessage: "Turn Undead",
    id: "game.spell.turnUndead",
  },
  [getDescriptionKey(SpellId.TurnUndead)]: {
    defaultMessage: "Instantly sends a group of ghosts back to the grave.",
    id: "game.spell.turnUndead.description",
  },
  viewAll: {
    defaultMessage: "View All",
    id: "game.spell.viewAll",
  },
  [getDescriptionKey(SpellId.ViewAll)]: {
    defaultMessage: "Causes all Heroes across the land to become visible.",
    id: "game.spell.viewAll.description",
  },
  viewArtifacts: {
    defaultMessage: "View Artifacts",
    id: "game.spell.viewArtifacts",
  },
  [getDescriptionKey(SpellId.ViewArtifacts)]: {
    defaultMessage: "Causes all artifacts across the land to become visible.",
    id: "game.spell.viewArtifacts.description",
  },
  viewHeroes: {
    defaultMessage: "View Heroes",
    id: "game.spell.viewHeroes",
  },
  [getDescriptionKey(SpellId.ViewHeroes)]: {
    defaultMessage: "Causes all Heroes across the land to become visible.",
    id: "game.spell.viewHeroes.description",
  },
  viewMines: {
    defaultMessage: "View Mines",
    id: "game.spell.viewMines",
  },
  [getDescriptionKey(SpellId.ViewMines)]: {
    defaultMessage: "Causes all mines across the land to become visible.",
    id: "game.spell.viewMines.description",
  },
  viewResources: {
    defaultMessage: "View Resources",
    id: "game.spell.viewResources",
  },
  [getDescriptionKey(SpellId.ViewResources)]: {
    defaultMessage: "Causes all resources across the land to become visible.",
    id: "game.spell.viewResources.description",
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
