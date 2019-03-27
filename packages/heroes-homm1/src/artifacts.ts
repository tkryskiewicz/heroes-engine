import { Artifact, ArtifactData } from "heroes-core";

export enum ArtifactId {
  // Attack
  ThunderMaceOfDominion = "thunder-mace-of-dominion",
  GiantFlailOfDominion = "giant-flail-of-dominion",
  PowerAxeOfDominion = "power-axe-of-dominion",
  DragonSwordOfDominion = "dragon-sword-of-dominion",

  // Defense
  ArmoredGauntletsOfProtection = "armored-gauntlets-of-protection",
  DefenderHelmOfProtection = "defender-helm-of-protection",
  StealthShieldOfProtection = "stealth-shield-of-protection",
  DivineBreastplateOfProtection = "divine-breastplate-of-protection",

  // Spell Power
  CastersBraceletOfMagic = "casters-bracelet-of-magic",
  MagesRingOfPower = "mages-ring-of-power",
  WitchsBroachOfMagic = "witchs-broach-of-magic",
  ArcaneNecklaceOfMagic = "arcane-necklace-of-magic",

  // Knowledge
  MinorScrollOfKnowledge = "minor-scroll-of-knowledge",
  MajorScrollOfKnowledge = "major-scroll-of-knowledge",
  SuperiorScrollOfKnowledge = "superior-scroll-of-knowledge",
  ForemostScrollOfKnowledge = "foremost-scroll-of-knowledge",

  // Morale
  MedalOfValor = "medal-of-valor",
  MedalOfCourage = "medal-of-courage",
  MedalOfHonor = "medal-of-honor",
  MedalOfDistinction = "medal-of-distinction",

  // Luck
  LuckyRabbitsFoot = "lucky-rabbits-foot",
  GoldenHoreshoe = "golden-horseshoe",
  GamblersLuckyCoin = "gamblers-lucky-coin",
  FourLeafClover = "four-leaf-clover",

  // Income
  EndlessPurseOfGold = "endless-purse-of-gold",
  EndlessBagOfGold = "endless-bag-of-gold",
  EndlessSackOfGold = "endless-sack-of-gold",

  // Mobility
  TravelersBootsOfMobility = "travelers-boots-of-mobility",
  NomadBootsOfMobility = "nomad-boots-of-mobility",
  SailorsAstrolabeOfMobility = "sailors-astrolabe-of-mobility",
  TrueCompassOfMobility = "true-compass-of-mobility",

  // Siege Weapons
  BallistaOfQuickness = "ballista-of-quickness",

  // Spellbook
  Spellbook = "spellbook",

  // Cursed Artifacts
  FizbinOfMisfortune = "fizbin-of-misfortune",

  // Ultimate Artifacts
  UltimateSwordOfDominion = "ultimate-sword-of-dominion",
  UltimateCloakOfProtection = "ultimate-cloak-of-protection",
  UltimateWandOfMagic = "ultimate-wand-of-magic",
  UltimateBookOfKnowledge = "ultimate-book-of-knowledge",
}

const attackArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.ThunderMaceOfDominion,
    tradable: true,
  },
  {
    id: ArtifactId.GiantFlailOfDominion,
    tradable: true,
  },
  {
    id: ArtifactId.PowerAxeOfDominion,
    tradable: true,
  },
  {
    id: ArtifactId.DragonSwordOfDominion,
    tradable: true,
  },
];

const defenseArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.ArmoredGauntletsOfProtection,
    tradable: true,
  },
  {
    id: ArtifactId.DefenderHelmOfProtection,
    tradable: true,
  },
  {
    id: ArtifactId.StealthShieldOfProtection,
    tradable: true,
  },
  {
    id: ArtifactId.DivineBreastplateOfProtection,
    tradable: true,
  },
];

const spellPowerArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.CastersBraceletOfMagic,
    tradable: true,
  },
  {
    id: ArtifactId.MagesRingOfPower,
    tradable: true,
  },
  {
    id: ArtifactId.WitchsBroachOfMagic,
    tradable: true,
  },
  {
    id: ArtifactId.ArcaneNecklaceOfMagic,
    tradable: true,
  },
];

const knowledgeArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.MinorScrollOfKnowledge,
    tradable: true,
  },
  {
    id: ArtifactId.MajorScrollOfKnowledge,
    tradable: true,
  },
  {
    id: ArtifactId.SuperiorScrollOfKnowledge,
    tradable: true,
  },
  {
    id: ArtifactId.ForemostScrollOfKnowledge,
    tradable: true,
  },
];

const moraleArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.MedalOfValor,
    tradable: true,
  },
  {
    id: ArtifactId.MedalOfCourage,
    tradable: true,
  },
  {
    id: ArtifactId.MedalOfHonor,
    tradable: true,
  },
  {
    id: ArtifactId.MedalOfDistinction,
    tradable: true,
  },
];

const luckArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.LuckyRabbitsFoot,
    tradable: true,
  },
  {
    id: ArtifactId.GoldenHoreshoe,
    tradable: true,
  },
  {
    id: ArtifactId.GamblersLuckyCoin,
    tradable: true,
  },
  {
    id: ArtifactId.FourLeafClover,
    tradable: true,
  },
];

const incomeArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.EndlessPurseOfGold,
    tradable: true,
  },
  {
    id: ArtifactId.EndlessBagOfGold,
    tradable: true,
  },
  {
    id: ArtifactId.EndlessSackOfGold,
    tradable: true,
  },
];

const mobilityArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.TravelersBootsOfMobility,
    tradable: true,
  },
  {
    id: ArtifactId.NomadBootsOfMobility,
    tradable: true,
  },
  {
    id: ArtifactId.SailorsAstrolabeOfMobility,
    tradable: true,
  },
  {
    id: ArtifactId.TrueCompassOfMobility,
    tradable: true,
  },
];

const siegeWeaponsArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.BallistaOfQuickness,
    tradable: true,
  },
];

const spellBookArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.Spellbook,
    tradable: false,
  },
];

const cursedArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.FizbinOfMisfortune,
    tradable: true,
  },
];

const ultimateArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.UltimateSwordOfDominion,
    tradable: true,
  },
  {
    id: ArtifactId.UltimateCloakOfProtection,
    tradable: true,
  },
  {
    id: ArtifactId.UltimateWandOfMagic,
    tradable: true,
  },
  {
    id: ArtifactId.UltimateBookOfKnowledge,
    tradable: true,
  },
];

export const artifacts: ArtifactData[] = [
  ...attackArtifacts,
  ...defenseArtifacts,
  ...spellPowerArtifacts,
  ...knowledgeArtifacts,
  ...moraleArtifacts,
  ...luckArtifacts,
  ...incomeArtifacts,
  ...mobilityArtifacts,
  ...siegeWeaponsArtifacts,
  ...spellBookArtifacts,
  ...cursedArtifacts,
  ...ultimateArtifacts,
];

export const constructArtifact = (artifact: string, data: {} = {}): Artifact => ({
  data,
  id: artifact,
});
