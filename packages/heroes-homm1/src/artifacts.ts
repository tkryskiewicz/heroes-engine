import { Artifact, ArtifactData } from "./Artifact";

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
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.GiantFlailOfDominion,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.PowerAxeOfDominion,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.DragonSwordOfDominion,
    isUltimate: false,
    tradable: true,
  },
];

const defenseArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.ArmoredGauntletsOfProtection,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.DefenderHelmOfProtection,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.StealthShieldOfProtection,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.DivineBreastplateOfProtection,
    isUltimate: false,
    tradable: true,
  },
];

const spellPowerArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.CastersBraceletOfMagic,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.MagesRingOfPower,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.WitchsBroachOfMagic,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.ArcaneNecklaceOfMagic,
    isUltimate: false,
    tradable: true,
  },
];

const knowledgeArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.MinorScrollOfKnowledge,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.MajorScrollOfKnowledge,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.SuperiorScrollOfKnowledge,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.ForemostScrollOfKnowledge,
    isUltimate: false,
    tradable: true,
  },
];

const moraleArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.MedalOfValor,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.MedalOfCourage,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.MedalOfHonor,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.MedalOfDistinction,
    isUltimate: false,
    tradable: true,
  },
];

const luckArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.LuckyRabbitsFoot,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.GoldenHoreshoe,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.GamblersLuckyCoin,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.FourLeafClover,
    isUltimate: false,
    tradable: true,
  },
];

const incomeArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.EndlessPurseOfGold,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.EndlessBagOfGold,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.EndlessSackOfGold,
    isUltimate: false,
    tradable: true,
  },
];

const mobilityArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.TravelersBootsOfMobility,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.NomadBootsOfMobility,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.SailorsAstrolabeOfMobility,
    isUltimate: false,
    tradable: true,
  },
  {
    id: ArtifactId.TrueCompassOfMobility,
    isUltimate: false,
    tradable: true,
  },
];

const siegeWeaponsArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.BallistaOfQuickness,
    isUltimate: false,
    tradable: true,
  },
];

const spellBookArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.Spellbook,
    isUltimate: false,
    tradable: false,
  },
];

const cursedArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.FizbinOfMisfortune,
    isUltimate: false,
    tradable: true,
  },
];

const ultimateArtifacts: ArtifactData[] = [
  {
    id: ArtifactId.UltimateSwordOfDominion,
    isUltimate: true,
    tradable: true,
  },
  {
    id: ArtifactId.UltimateCloakOfProtection,
    isUltimate: true,
    tradable: true,
  },
  {
    id: ArtifactId.UltimateWandOfMagic,
    isUltimate: true,
    tradable: true,
  },
  {
    id: ArtifactId.UltimateBookOfKnowledge,
    isUltimate: true,
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
