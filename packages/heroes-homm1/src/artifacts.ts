import { Artifact } from "heroes-core";

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

export const constructArtifact = (artifact: string, data: {} = {}, tradable = true): Artifact => ({
  data,
  id: artifact,
  tradable,
});
