import { defineMessages, Messages } from "react-intl";

import { CampaignId, HeroClass, HeroId, Skill } from "heroes-homm1";

const convertValue = (value: string): string =>
  value.replace(/-\w/, (str) => str[1].toUpperCase());

export const gameDifficultyMessages: Messages = defineMessages({
  easy: {
    defaultMessage: "Easy",
    id: "game.gameDifficulty.easy",
  },
  expert: {
    defaultMessage: "Expert",
    id: "game.gameDifficulty.expert",
  },
  hard: {
    defaultMessage: "Hard",
    id: "game.gameDifficulty.hard",
  },
  normal: {
    defaultMessage: "Normal",
    id: "game.gameDifficulty.normal",
  },
});

export const getGameDifficultyMessage = (difficulty: string) =>
  gameDifficultyMessages[difficulty];

export const farmCreatureMessages = defineMessages({
  archer: {
    defaultMessage: "Archer",
    id: "game.creature.archer",
  },
  cavalry: {
    defaultMessage: "Cavalry",
    id: "game.creature.cavalry",
  },
  paladin: {
    defaultMessage: "Paladin",
    id: "game.creature.paladin",
  },
  peasant: {
    defaultMessage: "Peasant",
    id: "game.creature.peasant",
  },
  pikeman: {
    defaultMessage: "Pikeman",
    id: "game.creature.pikeman",
  },
  swordsman: {
    defaultMessage: "Swordsman",
    id: "game.creature.swordsman",
  },
});

export const plainsCreatureMessages = defineMessages({
  cyclops: {
    defaultMessage: "Cyclops",
    id: "game.creature.cyclops",
  },
  goblin: {
    defaultMessage: "Goblin",
    id: "game.creature.goblin",
  },
  ogre: {
    defaultMessage: "Ogre",
    id: "game.creature.ogre",
  },
  orc: {
    defaultMessage: "Orc",
    id: "game.creature.orc",
  },
  troll: {
    defaultMessage: "Troll",
    id: "game.creature.troll",
  },
  wolf: {
    defaultMessage: "Wolf",
    id: "game.creature.wolf",
  },
});

export const forestCreatureMessages = defineMessages({
  druid: {
    defaultMessage: "Druid",
    id: "game.creautre.druid",
  },
  dwarf: {
    defaultMessage: "Dwarf",
    id: "game.creature.dwarf",
  },
  elf: {
    defaultMessage: "Elf",
    id: "game.creature.elf",
  },
  phoenix: {
    defaultMessage: "Phoenix",
    id: "game.creature.phoenix",
  },
  sprite: {
    defaultMessage: "Sprite",
    id: "game.creature.sprite",
  },
  unicorn: {
    defaultMessage: "Unicorn",
    id: "game.creature.unicorn",
  },
});

export const mountainsCreatureMessages = defineMessages({
  centaur: {
    defaultMessage: "Centaur",
    id: "game.creature.centaur",
  },
  dragon: {
    defaultMessage: "Dragon",
    id: "game.creature.dragon",
  },
  gargoyle: {
    defaultMessage: "Gargoyle",
    id: "game.creature.gargoyle",
  },
  griffin: {
    defaultMessage: "Griffin",
    id: "game.creature.griffin",
  },
  hydra: {
    defaultMessage: "Hydra",
    id: "game.creature.hydra",
  },
  minotaur: {
    defaultMessage: "Minotaur",
    id: "game.creature.minotaur",
  },
});

export const neutralCreatureMessages = defineMessages({
  genie: {
    defaultMessage: "Genie",
    id: "game.creature.genie",
  },
  ghost: {
    defaultMessage: "Ghost",
    id: "game.creature.ghost",
  },
  nomad: {
    defaultMessage: "Nomad",
    id: "game.creature.nomad",
  },
  rogue: {
    defaultMessage: "Rogue",
    id: "game.creature.rogue",
  },
});

export const creatureMessages: Messages = {
  ...farmCreatureMessages,
  ...plainsCreatureMessages,
  ...forestCreatureMessages,
  ...mountainsCreatureMessages,
  ...neutralCreatureMessages,
};

export const getCreatureNameMessage = (creature: string) => {
  return creatureMessages[creature];
};

const heroClassMessages: Messages = defineMessages({
  [HeroClass.Knight]: {
    defaultMessage: "Knight",
    id: "game.heroClass.knight",
  },
  [`${HeroClass.Knight}Title`]: {
    defaultMessage: "{heroName} the Knight",
    id: "game.heroClass.knight.title",
  },
  [HeroClass.Barbarian]: {
    defaultMessage: "Barbarian",
    id: "game.heroClass.barbarian",
  },
  [`${HeroClass.Barbarian}Title`]: {
    defaultMessage: "{heroName} the Barbarian",
    id: "game.heroClass.barbarian.title",
  },
  [HeroClass.Sorceress]: {
    defaultMessage: "Sorceress",
    id: "game.heroClass.sorceress",
  },
  [`${HeroClass.Sorceress}Title`]: {
    defaultMessage: "{heroName} the Sorceress",
    id: "game.heroClass.sorceress.title",
  },
  [HeroClass.Warlock]: {
    defaultMessage: "Warlock",
    id: "game.heroClass.warlock",
  },
  [`${HeroClass.Warlock}Title`]: {
    defaultMessage: "{heroName} the Warlock",
    id: "game.heroClass.warlock.title",
  },
});

export const getHeroClassNameMessage = (heroClass: string) =>
  heroClassMessages[heroClass];

export const getHeroClassTitleMessage = (heroCLass: string) =>
  heroClassMessages[`${heroCLass}Title`];

export const knightHeroMessages = defineMessages({
  ambrose: {
    defaultMessage: "Ambrose",
    id: "game.hero.ambrose",
  },
  arturius: {
    defaultMessage: "Arturius",
    id: "game.hero.arturius",
  },
  dimitri: {
    defaultMessage: "Dimitri",
    id: "game.hero.dimitri",
  },
  ector: {
    defaultMessage: "Ector",
    id: "game.hero.ector",
  },
  lordHaart: {
    defaultMessage: "Lord Haart",
    id: "game.hero.lordHaart",
  },
  lordKilburn: {
    defaultMessage: "Lord Kilburn",
    id: "game.hero.lordKilburn",
  },
  maximus: {
    defaultMessage: "Maximus",
    id: "game.hero.maximus",
  },
  sirGalant: {
    defaultMessage: "Sir Galant",
    id: "game.hero.sirGalant",
  },
  tyro: {
    defaultMessage: "Tyro",
    id: "game.hero.tyro",
  },
});

export const barbarianHeroMessages = defineMessages({
  antoine: {
    defaultMessage: "Antoine",
    id: "game.hero.antoine",
  },
  atlas: {
    defaultMessage: "Atlas",
    id: "game.hero.atlas",
  },
  cragHack: {
    defaultMessage: "Crag Hack",
    id: "game.hero.cragHack",
  },
  ergon: {
    defaultMessage: "Ergon",
    id: "game.hero.ergon",
  },
  joJosh: {
    defaultMessage: "Jo Josh",
    id: "game.hero.joJosh",
  },
  kelzen: {
    defaultMessage: "Kelzen",
    id: "game.hero.kelzen",
  },
  thundax: {
    defaultMessage: "Thundax",
    id: "game.hero.thundax",
  },
  tsabu: {
    defaultMessage: "Tsabu",
    id: "game.hero.tsabu",
  },
  yog: {
    defaultMessage: "Yog",
    id: "game.hero.yog",
  },
});

export const sorceressHeroMessages = defineMessages({
  ariel: {
    defaultMessage: "Ariel",
    id: "game.hero.ariel",
  },
  astra: {
    defaultMessage: "Astra",
    id: "game.hero.astra",
  },
  carlawn: {
    defaultMessage: "Carlawn",
    id: "game.hero.carlawn",
  },
  gem: {
    defaultMessage: "Gem",
    id: "game.hero.gem",
  },
  luna: {
    defaultMessage: "Luna",
    id: "game.hero.luna",
  },
  natasha: {
    defaultMessage: "Natasha",
    id: "game.hero.natasha",
  },
  rebecca: {
    defaultMessage: "Rebecca",
    id: "game.hero.rebecca",
  },
  troyan: {
    defaultMessage: "Troyan",
    id: "game.hero.troyan",
  },
  vatawna: {
    defaultMessage: "Vatawna",
    id: "game.hero.vatawna",
  },
});

export const warlockHeroMessages = defineMessages({
  agar: {
    defaultMessage: "Agar",
    id: "game.hero.agar",
  },
  arie: {
    defaultMessage: "Arie",
    id: "game.hero.arie",
  },
  barok: {
    defaultMessage: "Barok",
    id: "game.hero.barok",
  },
  crodo: {
    defaultMessage: "Crodo",
    id: "game.hero.crodo",
  },
  falagar: {
    defaultMessage: "Falagar",
    id: "game.hero.falagar",
  },
  kastore: {
    defaultMessage: "Kastore",
    id: "game.hero.kastore",
  },
  sandro: {
    defaultMessage: "Sandro",
    id: "game.hero.sandro",
  },
  vesper: {
    defaultMessage: "Vesper",
    id: "game.hero.vesper",
  },
  wrathmont: {
    defaultMessage: "Wrathmont",
    id: "game.hero.wrathmont",
  },
});

export const heroMessages: Messages = {
  ...knightHeroMessages,
  ...barbarianHeroMessages,
  ...sorceressHeroMessages,
  ...warlockHeroMessages,
};

export const getHeroNameMessage = (hero: string) => {
  switch (hero) {
    // Knights
    case HeroId.LordKilburn:
      return knightHeroMessages.lordKilburn;
    case HeroId.LordHaart:
      return knightHeroMessages.lordHaart;
    case HeroId.SirGallant:
      return knightHeroMessages.sirGalant;
    case HeroId.Arturius:
      return knightHeroMessages.arturius;
    case HeroId.Tyro:
      return knightHeroMessages.tyro;
    case HeroId.Maximus:
      return knightHeroMessages.maximus;
    case HeroId.Ector:
      return knightHeroMessages.ector;
    case HeroId.Dimitri:
      return knightHeroMessages.dimitri;
    case HeroId.Ambrose:
      return knightHeroMessages.ambrose;
    // Barbarians
    case HeroId.Thundax:
      return barbarianHeroMessages.thundax;
    case HeroId.Ergon:
      return barbarianHeroMessages.ergon;
    case HeroId.Kelzen:
      return barbarianHeroMessages.kelzen;
    case HeroId.Tsabu:
      return barbarianHeroMessages.tsabu;
    case HeroId.CragHack:
      return barbarianHeroMessages.cragHack;
    case HeroId.JoJosh:
      return barbarianHeroMessages.joJosh;
    case HeroId.Atlas:
      return barbarianHeroMessages.atlas;
    case HeroId.Yog:
      return barbarianHeroMessages.yog;
    case HeroId.Antoine:
      return barbarianHeroMessages.antoine;
    // Sorceresses
    case HeroId.Ariel:
      return sorceressHeroMessages.ariel;
    case HeroId.Vatawna:
      return sorceressHeroMessages.vatawna;
    case HeroId.Carlawn:
      return sorceressHeroMessages.carlawn;
    case HeroId.Rebecca:
      return sorceressHeroMessages.rebecca;
    case HeroId.Luna:
      return sorceressHeroMessages.luna;
    case HeroId.Astra:
      return sorceressHeroMessages.astra;
    case HeroId.Natasha:
      return sorceressHeroMessages.natasha;
    case HeroId.Gem:
      return sorceressHeroMessages.gem;
    case HeroId.Troyan:
      return sorceressHeroMessages.troyan;
    // Warlocks
    case HeroId.Agar:
      return warlockHeroMessages.agar;
    case HeroId.Crodo:
      return warlockHeroMessages.crodo;
    case HeroId.Falagar:
      return warlockHeroMessages.falagar;
    case HeroId.Barok:
      return warlockHeroMessages.barok;
    case HeroId.Arie:
      return warlockHeroMessages.arie;
    case HeroId.Kastore:
      return warlockHeroMessages.kastore;
    case HeroId.Sandro:
      return warlockHeroMessages.sandro;
    case HeroId.Wrathmont:
      return warlockHeroMessages.wrathmont;
    case HeroId.Vesper:
      return warlockHeroMessages.vesper;
    // Default
    default:
      return {
        defaultMessage: "Unknown",
        id: "game.hero.unknown",
      };
  }
};

// TODO: move to general messages?
export const skillMessages = defineMessages({
  attackSkill: {
    defaultMessage: "Attack Skill",
    id: "game.skill.attackSkill.name",
  },
  attackSkillDescription: {
    defaultMessage: "Your attack skill is a bonus added to each creature's attack skill.",
    id: "game.skill.attackSkill.description",
  },
  defenseSkill: {
    defaultMessage: "Defense Skill",
    id: "game.skill.defenseSkill.name",
  },
  defenseSkillDescription: {
    defaultMessage: "Your defense skill is a bonus added to each creature's defense skill.",
    id: "game.skill.defenseSkill.description",
  },
  knowledge: {
    defaultMessage: "Knowledge",
    id: "game.skill.knowledge.name",
  },
  knowledgeDescription: {
    defaultMessage: "Your knowledge is the number of each spell you are able to memorize.",
    id: "game.skill.knowledge.description",
  },
  spellPower: {
    defaultMessage: "Spell Power",
    id: "game.skill.spellPower.name",
  },
  spellPowerDescription: {
    defaultMessage: "Your spell power determines the length or power of a spell.",
    id: "game.skill.spellPower.description",
  },
  // TODO: do we need messages for unknown skills?
  unknown: {
    defaultMessage: "Unknown",
    id: "game.skill.unknown.name",
  },
  unknownDescription: {
    defaultMessage: "No description.",
    id: "game.skill.unknown.description",
  },
});

export const getSkillNameMessage = (skill: string) => {
  switch (skill) {
    case Skill.AttackSkill:
      return skillMessages.attackSkill;
    case Skill.DefenseSkill:
      return skillMessages.defenseSkill;
    case Skill.SpellPower:
      return skillMessages.spellPower;
    case Skill.Knowledge:
      return skillMessages.knowledge;
    default:
      return skillMessages.unknown;
  }
};

export const getSkillDescriptionMessage = (skill: string) => {
  switch (skill) {
    case Skill.AttackSkill:
      return skillMessages.attackSkillDescription;
    case Skill.DefenseSkill:
      return skillMessages.defenseSkillDescription;
    case Skill.SpellPower:
      return skillMessages.spellPowerDescription;
    case Skill.Knowledge:
      return skillMessages.knowledgeDescription;
    default:
      return skillMessages.unknownDescription;
  }
};

const campaignMessages = defineMessages({
  lordAlamar: {
    defaultMessage: "Lord Alamar",
    id: "game.campaign.lordAlamar",
  },
  lordIronfist: {
    defaultMessage: "Lord Ironfist",
    id: "game.campaign.lordIronfist",
  },
  lordSlayer: {
    defaultMessage: "Lord Slayer",
    id: "game.campaign.lordSlayer",
  },
  queenLamanda: {
    defaultMessage: "Queen Lamanda",
    id: "game.campaign.queenLamanda",
  },
});

export const getCampaignNameMessage = (campaign: string) => {
  switch (campaign) {
    case CampaignId.LordIronfist:
      return campaignMessages.lordIronfist;
    case CampaignId.LordSlayer:
      return campaignMessages.lordSlayer;
    case CampaignId.QueenLamanda:
      return campaignMessages.queenLamanda;
    case CampaignId.LordAlamar:
      return campaignMessages.lordAlamar;
    default:
      return {
        defaultMessage: "Unknown",
        id: "game.campaign.unknown",
      };
  }
};

const commonStructureMessages = defineMessages({
  castle: {
    defaultMessage: "Castle",
    id: "game.structure.castle",
  },
  castleDescription: {
    defaultMessage: "The Castle improves town defense and income.",
    id: "game.structure.castle.description",
  },
  mageGuild: {
    defaultMessage: "Mage Guild",
    id: "game.structure.mageGuild",
  },
  mageGuildDescription: {
    defaultMessage: "The Mage Guild allows heroes to learn and replenish spells.",
    id: "game.structure.mageGuild.description",
  },
  shipyard: {
    defaultMessage: "Shipyard",
    id: "game.structure.shipyard",
  },
  shipyardDescription: {
    defaultMessage: "The Shipyard allows ships to be built.",
    id: "game.structure.shipyard.description",
  },
  tavern: {
    defaultMessage: "Tavern",
    id: "game.structure.tavern",
  },
  tavernDescription: {
    defaultMessage: "The tavern increases the morale of all garrisoned troops.",
    id: "game.structure.tavern.description",
  },
  thievesGuild: {
    defaultMessage: "Thieves' Guild",
    id: "game.structure.thievesGuild",
  },
  thievesGuildDescription: {
    defaultMessage: "The Thieves' Guild provides information on enemy players. " +
      "Thieves' Guilds can also provide scouting information on enemy towns. " +
      "Additional Guilds provide more information.",
    id: "game.structure.thievesGuild.description",
  },
  well: {
    defaultMessage: "Well",
    id: "game.structure.well",
  },
  wellDescription: {
    defaultMessage: "The Well increases the growth rate of all dwellings by 2 creatures per week.",
    id: "game.structure.well.description",
  },
});

const farmStructureMessages = defineMessages({
  archeryRange: {
    defaultMessage: "Archery Range",
    id: "game.structure.farm.archeryRange",
  },
  armory: {
    defaultMessage: "Armory",
    id: "game.structure.farm.armory",
  },
  blacksmith: {
    defaultMessage: "Blacksmith",
    id: "game.structure.farm.blacksmith",
  },
  cathedral: {
    defaultMessage: "Cathedral",
    id: "game.structure.farm.cathedral",
  },
  joustingArena: {
    defaultMessage: "Jousting Arena",
    id: "game.structure.farm.joustingArena",
  },
  thatchedHut: {
    defaultMessage: "Thatched Hut",
    id: "game.structure.farm.thatchedHut",
  },
});

const plainsStructureMessages = defineMessages({
  adobe: {
    defaultMessage: "Adobe",
    id: "game.structure.plains.adobe",
  },
  bridge: {
    defaultMessage: "Bridge",
    id: "game.structure.plains.bridge",
  },
  den: {
    defaultMessage: "Den",
    id: "game.structure.plains.den",
  },
  hut: {
    defaultMessage: "Hut",
    id: "game.structure.plains.hut",
  },
  pyramid: {
    defaultMessage: "Pyramid",
    id: "game.structure.plains.pyramid",
  },
  stickHut: {
    defaultMessage: "Stick Hut",
    id: "game.structure.plains.stickHut",
  },
});

const forestStructureMessages = defineMessages({
  archeryRange: {
    defaultMessage: "Archery Range",
    id: "game.structure.forest.archeryRange",
  },
  cottage: {
    defaultMessage: "Cottage",
    id: "game.structure.forest.cottage",
  },
  fencedMeadow: {
    defaultMessage: "Fenced Meadow",
    id: "game.structure.forest.fencedMeadow",
  },
  redTower: {
    defaultMessage: "Red Tower",
    id: "game.structure.forest.redTower",
  },
  stonehenge: {
    defaultMessage: "Stonehenge",
    id: "game.structure.forest.stonehenge",
  },
  treehouse: {
    defaultMessage: "Treehouse",
    id: "game.structure.forest.treehouse",
  },
});

const mountainsStructureMessages = defineMessages({
  blackTower: {
    defaultMessage: "Black Tower",
    id: "game.structure.mountains.blackTower",
  },
  cave: {
    defaultMessage: "Cave",
    id: "game.structure.mountains.cave",
  },
  crypt: {
    defaultMessage: "Crypt",
    id: "game.structure.mountains.crypt",
  },
  maze: {
    defaultMessage: "Maze",
    id: "game.structure.mountains.maze",
  },
  nest: {
    defaultMessage: "Nest",
    id: "game.structure.mountains.nest",
  },
  swamp: {
    defaultMessage: "Swamp",
    id: "game.structure.mountains.swamp",
  },
});

const structureMessages: Messages = defineMessages({
  ...commonStructureMessages,
  ...farmStructureMessages,
  ...plainsStructureMessages,
  ...forestStructureMessages,
  ...mountainsStructureMessages,
});

export const getStructureNameMessage = (structure: string) =>
  structureMessages[convertValue(structure)] || {
    defaultMessage: "Unknown",
    id: "game.structure.unknown",
  };

export const getStructureDescriptionMessage = (structure: string) =>
  structureMessages[convertValue(structure) + "Description"] || {
    defaultMessage: "Unknown",
    id: "game.structure.unknown.description",
  };

export const moraleMessages = defineMessages({
  bad: {
    defaultMessage: "Bad Morale",
    id: "game.morale.bad",
  },
  good: {
    defaultMessage: "Good Morale",
    id: "game.morale.good",
  },
  neutral: {
    defaultMessage: "Neutral Morale",
    id: "game.morale.neutral",
  },
});

export const getMoraleNameMessage = (morale: number) => {
  if (morale === 0) {
    return moraleMessages.neutral;
  }

  if (morale > 0) {
    return moraleMessages.good;
  }

  return moraleMessages.bad;
};

export const luckMessages = defineMessages({
  bad: {
    defaultMessage: "Bad Luck",
    id: "game.luck.bad",
  },
  good: {
    defaultMessage: "Good Luck",
    id: "game.luck.good",
  },
  neutral: {
    defaultMessage: "Netural Luck",
    id: "game.luck.neutral",
  },
});

export const getLuckNameMessage = (luck: number) => {
  if (luck === 0) {
    return luckMessages.neutral;
  }

  if (luck > 0) {
    return luckMessages.good;
  }

  return luckMessages.bad;
};
