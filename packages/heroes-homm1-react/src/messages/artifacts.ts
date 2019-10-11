import { defineMessages } from "react-intl";

import { ArtifactId } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getKey = (artifact: string) =>
  convertValue(artifact);

const getShortNameKey = (artifact: string) =>
  `${convertValue(artifact)}ShortName`;

const getDescriptionKey = (artifact: string) =>
  `${convertValue(artifact)}Description`;

const artifactMessages = defineMessages({
  // Attack
  [getKey(ArtifactId.ThunderMaceOfDominion)]: {
    defaultMessage: "Thunder Mace of Dominion",
    id: "game.artifact.thunderMaceOfDominion",
  },
  [getShortNameKey(ArtifactId.ThunderMaceOfDominion)]: {
    defaultMessage: "Thunder Mace",
    id: "game.artifact.thunderMaceOfDominion.shortName",
  },
  [getDescriptionKey(ArtifactId.ThunderMaceOfDominion)]: {
    defaultMessage: "The {name} increases your attack skill by 1.",
    id: "game.artifact.thunderMaceOfDominion.description",
  },
  [getKey(ArtifactId.GiantFlailOfDominion)]: {
    defaultMessage: "Giant Flail of Dominion",
    id: "game.artifact.giantFlailOfDominion",
  },
  [getShortNameKey(ArtifactId.GiantFlailOfDominion)]: {
    defaultMessage: "Giant Flail",
    id: "game.artifact.giantFlailOfDominion.shortName",
  },
  [getDescriptionKey(ArtifactId.GiantFlailOfDominion)]: {
    defaultMessage: "The {name} increases your attack skill by 1.",
    id: "game.artifact.giantFlailOfDominion.description",
  },
  [getKey(ArtifactId.PowerAxeOfDominion)]: {
    defaultMessage: "Power Axe of Dominion",
    id: "game.artifact.powerAxeOfDominion",
  },
  [getShortNameKey(ArtifactId.PowerAxeOfDominion)]: {
    defaultMessage: "Power Axe",
    id: "game.artifact.powerAxeOfDominion.shortName",
  },
  [getDescriptionKey(ArtifactId.PowerAxeOfDominion)]: {
    defaultMessage: "The {name} increases your attack skill by 2.",
    id: "game.artifact.powerAxeOfDominion.description",
  },
  [getKey(ArtifactId.DragonSwordOfDominion)]: {
    defaultMessage: "Dragon Sword of Dominion",
    id: "game.artifact.dragonSwordOfDominion",
  },
  [getShortNameKey(ArtifactId.DragonSwordOfDominion)]: {
    defaultMessage: "Dragon Sword",
    id: "game.artifact.dragonSwordOfDominion.shortName",
  },
  [getDescriptionKey(ArtifactId.DragonSwordOfDominion)]: {
    defaultMessage: "The {name} increases your attack skill by 3.",
    id: "game.artifact.dragonSwordOfDominion.description",
  },
  // Defense
  [getKey(ArtifactId.ArmoredGauntletsOfProtection)]: {
    defaultMessage: "Armored Gauntlets of Protection",
    id: "game.artifact.armoredGauntletsOfProtection",
  },
  [getShortNameKey(ArtifactId.ArmoredGauntletsOfProtection)]: {
    defaultMessage: "Armored Gauntlets",
    id: "game.artifact.armoredGauntletsOfProtection.shortName",
  },
  [getDescriptionKey(ArtifactId.ArmoredGauntletsOfProtection)]: {
    defaultMessage: "The {name} increase your defense skill by 1.",
    id: "game.artifact.armoredGauntletsOfProtection.description",
  },
  [getKey(ArtifactId.DefenderHelmOfProtection)]: {
    defaultMessage: "Defender Helm of Protection",
    id: "game.artifact.defenderHelmOfProtection",
  },
  [getShortNameKey(ArtifactId.DefenderHelmOfProtection)]: {
    defaultMessage: "Defender Helm",
    id: "game.artifact.defenderHelmOfProtection.shortName",
  },
  [getDescriptionKey(ArtifactId.DefenderHelmOfProtection)]: {
    defaultMessage: "The {name} increases your defense skill by 1.",
    id: "game.artifact.defenderHelmOfProtection.description",
  },
  [getKey(ArtifactId.StealthShieldOfProtection)]: {
    defaultMessage: "Stealth Shield of Protection",
    id: "game.artifact.stealthShieldOfProtection",
  },
  [getShortNameKey(ArtifactId.StealthShieldOfProtection)]: {
    defaultMessage: "Stealth Shield",
    id: "game.artifact.stealthShieldOfProtection.shortName",
  },
  [getDescriptionKey(ArtifactId.StealthShieldOfProtection)]: {
    defaultMessage: "The {name} increases your defense skill by 2.",
    id: "game.artifact.stealthShieldOfProtection.description",
  },
  [getKey(ArtifactId.DivineBreastplateOfProtection)]: {
    defaultMessage: "Divine Breastplate of Protection",
    id: "game.artifact.divineBreastplateOfProtection",
  },
  [getShortNameKey(ArtifactId.DivineBreastplateOfProtection)]: {
    defaultMessage: "Divine Breastplate",
    id: "game.artifact.divineBreastplateOfProtection.shortName",
  },
  [getDescriptionKey(ArtifactId.DivineBreastplateOfProtection)]: {
    defaultMessage: "The {name} increases your defense skill by 3.",
    id: "game.artifact.divineBreastplateOfProtection.description",
  },
  // Spell Power
  [getKey(ArtifactId.CastersBraceletOfMagic)]: {
    defaultMessage: "Caster's Bracelet of Magic",
    id: "game.artifact.castersBraceletOfMagic",
  },
  [getShortNameKey(ArtifactId.CastersBraceletOfMagic)]: {
    defaultMessage: "Caster's Bracelet",
    id: "game.artifact.castersBraceletOfMagic.shortName",
  },
  [getDescriptionKey(ArtifactId.CastersBraceletOfMagic)]: {
    defaultMessage: "The {name} increases your spell power by 2.",
    id: "game.artifact.castersBraceletOfMagic.description",
  },
  [getKey(ArtifactId.MagesRingOfPower)]: {
    defaultMessage: "Mage's Ring of Power",
    id: "game.artifact.magesRingOfPower",
  },
  [getShortNameKey(ArtifactId.MagesRingOfPower)]: {
    defaultMessage: "Mage's Ring",
    id: "game.artifact.magesRingOfPower.shortName",
  },
  [getDescriptionKey(ArtifactId.MagesRingOfPower)]: {
    defaultMessage: "The {name} increases your spell power by 2.",
    id: "game.artifact.magesRingOfPower.description",
  },
  [getKey(ArtifactId.WitchsBroachOfMagic)]: {
    defaultMessage: "Witch's Broach of Magic",
    id: "game.artifact.witchsBroachOfMagic",
  },
  [getShortNameKey(ArtifactId.WitchsBroachOfMagic)]: {
    defaultMessage: "Witches Broach",
    id: "game.artifact.witchsBroachOfMagic.shortName",
  },
  [getDescriptionKey(ArtifactId.WitchsBroachOfMagic)]: {
    defaultMessage: "The {name} increases your spell power by 3.",
    id: "game.artifact.witchsBroachOfMagic.description",
  },
  [getKey(ArtifactId.ArcaneNecklaceOfMagic)]: {
    defaultMessage: "Arcane Necklace of Magic",
    id: "game.artifact.arcaneNecklaceOfMagic",
  },
  [getShortNameKey(ArtifactId.ArcaneNecklaceOfMagic)]: {
    defaultMessage: "Arcane Necklace",
    id: "game.artifact.arcaneNecklaceOfMagic.shortName",
  },
  [getDescriptionKey(ArtifactId.ArcaneNecklaceOfMagic)]: {
    defaultMessage: "The {name} increases your spell power by 4.",
    id: "game.artifact.arcaneNecklaceOfMagic.description",
  },
  // Knowledge
  [getKey(ArtifactId.MinorScrollOfKnowledge)]: {
    defaultMessage: "Minor Scroll of Knowledge",
    id: "game.artifact.minorScrollOfKnowledge",
  },
  [getShortNameKey(ArtifactId.MinorScrollOfKnowledge)]: {
    defaultMessage: "Minor Scroll",
    id: "game.artifact.minorScrollOfKnowledge.shortName",
  },
  [getDescriptionKey(ArtifactId.MinorScrollOfKnowledge)]: {
    defaultMessage: "The {name} increases your knowledge by 2.",
    id: "game.artifact.minorScrollOfKnowledge.description",
  },
  [getKey(ArtifactId.MajorScrollOfKnowledge)]: {
    defaultMessage: "Major Scroll of Knowledge",
    id: "game.artifact.majorScrollOfKnowledge",
  },
  [getShortNameKey(ArtifactId.MajorScrollOfKnowledge)]: {
    defaultMessage: "Major Scroll",
    id: "game.artifact.majorScrollOfKnowledge.shortName",
  },
  [getDescriptionKey(ArtifactId.MajorScrollOfKnowledge)]: {
    defaultMessage: "The {name} increases your knowledge by 3.",
    id: "game.artifact.majorScrollOfKnowledge.description",
  },
  [getKey(ArtifactId.SuperiorScrollOfKnowledge)]: {
    defaultMessage: "Superior Scroll of Knowledge",
    id: "game.artifact.superiorScrollOfKnowledge",
  },
  [getShortNameKey(ArtifactId.SuperiorScrollOfKnowledge)]: {
    defaultMessage: "Superior Scroll",
    id: "game.artifact.superiorScrollOfKnowledge.shortName",
  },
  [getDescriptionKey(ArtifactId.SuperiorScrollOfKnowledge)]: {
    defaultMessage: "The {name} increases your knowledge by 4.",
    id: "game.artifact.superiorScrollOfKnowledge.description",
  },
  [getKey(ArtifactId.ForemostScrollOfKnowledge)]: {
    defaultMessage: "Foremost Scroll of Knowledge",
    id: "game.artifact.foremostScrollOfKnowledge",
  },
  [getShortNameKey(ArtifactId.ForemostScrollOfKnowledge)]: {
    defaultMessage: "Foremost Scroll",
    id: "game.artifact.foremostScrollOfKnowledge.shortName",
  },
  [getDescriptionKey(ArtifactId.ForemostScrollOfKnowledge)]: {
    defaultMessage: "The {name} increases your knowledge by 5.",
    id: "game.artifact.foremostScrollOfKnowledge.description",
  },
  // Morale
  [getKey(ArtifactId.MedalOfValor)]: {
    defaultMessage: "Medal of Valor",
    id: "game.artifact.medalOfValor",
  },
  [getShortNameKey(ArtifactId.MedalOfValor)]: {
    defaultMessage: "Medal",
    id: "game.artifact.medalOfValor.shortName",
  },
  [getDescriptionKey(ArtifactId.MedalOfValor)]: {
    defaultMessage: "The {name} increases your morale.",
    id: "game.artifact.medalOfValor.description",
  },
  [getKey(ArtifactId.MedalOfCourage)]: {
    defaultMessage: "Medal of Courage",
    id: "game.artifact.medalOfCourage",
  },
  [getShortNameKey(ArtifactId.MedalOfCourage)]: {
    defaultMessage: "Medal",
    id: "game.artifact.medalOfCourage.shortName",
  },
  [getDescriptionKey(ArtifactId.MedalOfCourage)]: {
    defaultMessage: "The {name} increases your morale.",
    id: "game.artifact.medalOfCourage.description",
  },
  [getKey(ArtifactId.MedalOfHonor)]: {
    defaultMessage: "Medal of Honor",
    id: "game.artifact.medalOfHonor",
  },
  [getShortNameKey(ArtifactId.MedalOfHonor)]: {
    defaultMessage: "Medal",
    id: "game.artifact.medalOfHonor.shortName",
  },
  [getDescriptionKey(ArtifactId.MedalOfHonor)]: {
    defaultMessage: "The {name} increases your morale.",
    id: "game.artifact.medalOfHonor.description",
  },
  [getKey(ArtifactId.MedalOfDistinction)]: {
    defaultMessage: "Medal of Distinction",
    id: "game.artifact.medalOfDistinction",
  },
  [getShortNameKey(ArtifactId.MedalOfDistinction)]: {
    defaultMessage: "Medal",
    id: "game.artifact.medalOfDistinction.shortName",
  },
  [getDescriptionKey(ArtifactId.MedalOfDistinction)]: {
    defaultMessage: "The {name} increases your morale.",
    id: "game.artifact.medalOfDistinction.description",
  },
  // Luck
  [getKey(ArtifactId.LuckyRabbitsFoot)]: {
    defaultMessage: "Lucky Rabbit's Foot",
    id: "game.artifact.luckyRabbitsFoot",
  },
  [getShortNameKey(ArtifactId.LuckyRabbitsFoot)]: {
    defaultMessage: "Rabbit's Foot",
    id: "game.artifact.luckyRabbitsFoot.shortName",
  },
  [getDescriptionKey(ArtifactId.LuckyRabbitsFoot)]: {
    defaultMessage: "The {name} increases your luck in combat.",
    id: "game.artifact.luckyRabbitsFoot.description",
  },
  [getKey(ArtifactId.GoldenHoreshoe)]: {
    defaultMessage: "Golden Horeshoe",
    id: "game.artifact.goldenHoreshoe",
  },
  [getShortNameKey(ArtifactId.GoldenHoreshoe)]: {
    defaultMessage: "Horseshoe",
    id: "game.artifact.goldenHoreshoe.shortName",
  },
  [getDescriptionKey(ArtifactId.GoldenHoreshoe)]: {
    defaultMessage: "The {name} increases your luck in combat.",
    id: "game.artifact.goldenHoreshoe.description",
  },
  [getKey(ArtifactId.GamblersLuckyCoin)]: {
    defaultMessage: "Gambler's Lucky Coin",
    id: "game.artifact.gamblersLuckyCoin",
  },
  [getShortNameKey(ArtifactId.GamblersLuckyCoin)]: {
    defaultMessage: "Coin",
    id: "game.artifact.gamblersLuckyCoin.shortName",
  },
  [getDescriptionKey(ArtifactId.GamblersLuckyCoin)]: {
    defaultMessage: "The {name} increases your luck in combat.",
    id: "game.artifact.gamblersLuckyCoin.description",
  },
  [getKey(ArtifactId.FourLeafClover)]: {
    defaultMessage: "Four-Leaf Clover",
    id: "game.artifact.fourLeafClover",
  },
  [getShortNameKey(ArtifactId.FourLeafClover)]: {
    defaultMessage: "Clover",
    id: "game.artifact.fourLeafClover.shortName",
  },
  [getDescriptionKey(ArtifactId.FourLeafClover)]: {
    defaultMessage: "The {name} increases your luck in combat.",
    id: "game.artifact.fourLeafClover.description",
  },
  // Income
  [getKey(ArtifactId.EndlessPurseOfGold)]: {
    defaultMessage: "Endless Purse of Gold",
    id: "game.artifact.endlessPurseOfGold",
  },
  [getShortNameKey(ArtifactId.EndlessPurseOfGold)]: {
    defaultMessage: "Endless Purse",
    id: "game.artifact.endlessPurseOfGold.shortName",
  },
  [getDescriptionKey(ArtifactId.EndlessPurseOfGold)]: {
    defaultMessage: "The {name} provides you with 500 gold per day.",
    id: "game.artifact.endlessPurseOfGold.description",
  },
  [getKey(ArtifactId.EndlessBagOfGold)]: {
    defaultMessage: "Endless Bag of Gold",
    id: "game.artifact.endlessBagOfGold",
  },
  [getShortNameKey(ArtifactId.EndlessBagOfGold)]: {
    defaultMessage: "Endless Bag",
    id: "game.artifact.endlessBagOfGold.shortName",
  },
  [getDescriptionKey(ArtifactId.EndlessBagOfGold)]: {
    defaultMessage: "The {name} provides you with 750 gold per day.",
    id: "game.artifact.endlessBagOfGold.description",
  },
  [getKey(ArtifactId.EndlessSackOfGold)]: {
    defaultMessage: "Endless Sack of Gold",
    id: "game.artifact.endlessSackOfGold",
  },
  [getShortNameKey(ArtifactId.EndlessSackOfGold)]: {
    defaultMessage: "Endless Sack",
    id: "game.artifact.endlessSackOfGold.shortName",
  },
  [getDescriptionKey(ArtifactId.EndlessSackOfGold)]: {
    defaultMessage: "The {name} provides you with 1000 gold per day.",
    id: "game.artifact.endlessSackOfGold.description",
  },
  // Mobility
  [getKey(ArtifactId.TravelersBootsOfMobility)]: {
    defaultMessage: "Traveler's Boots of Mobility",
    id: "game.artifact.travelersBootsOfMobility",
  },
  [getShortNameKey(ArtifactId.TravelersBootsOfMobility)]: {
    defaultMessage: "Traveler's Boots",
    id: "game.artifact.travelersBootsOfMobility.shortName",
  },
  [getDescriptionKey(ArtifactId.TravelersBootsOfMobility)]: {
    defaultMessage: "The {name} increase your movement on land.",
    id: "game.artifact.travelersBootsOfMobility.description",
  },
  [getKey(ArtifactId.NomadBootsOfMobility)]: {
    defaultMessage: "Nomad Boots of Mobility",
    id: "game.artifact.nomadBootsOfMobility",
  },
  [getShortNameKey(ArtifactId.NomadBootsOfMobility)]: {
    defaultMessage: "Nomad Boots",
    id: "game.artifact.nomadBootsOfMobility.shortName",
  },
  [getDescriptionKey(ArtifactId.NomadBootsOfMobility)]: {
    defaultMessage: "The {name} increase your movement on land.",
    id: "game.artifact.nomadBootsOfMobility.description",
  },
  [getKey(ArtifactId.SailorsAstrolabeOfMobility)]: {
    defaultMessage: "Sailor's Astrolabe of Mobility",
    id: "game.artifact.sailorsAstrolabeOfMobility",
  },
  [getShortNameKey(ArtifactId.SailorsAstrolabeOfMobility)]: {
    defaultMessage: "Astrolabe",
    id: "game.artifact.sailorsAstrolabeOfMobility.shortName",
  },
  [getDescriptionKey(ArtifactId.SailorsAstrolabeOfMobility)]: {
    defaultMessage: "The {name} increases your movement on sea.",
    id: "game.artifact.sailorsAstrolabeOfMobility.description",
  },
  [getKey(ArtifactId.TrueCompassOfMobility)]: {
    defaultMessage: "True Compass of Mobility",
    id: "game.artifact.trueCompassOfMobility",
  },
  [getShortNameKey(ArtifactId.TrueCompassOfMobility)]: {
    defaultMessage: "Compass",
    id: "game.artifact.trueCompassOfMobility.shortName",
  },
  [getDescriptionKey(ArtifactId.TrueCompassOfMobility)]: {
    defaultMessage: "The {name} increases your movement on land and sea.",
    id: "game.artifact.trueCompassOfMobility.description",
  },
  // Siege Weapons
  [getKey(ArtifactId.BallistaOfQuickness)]: {
    defaultMessage: "Ballista of Quickness",
    id: "game.artifact.ballistaOfQuickness",
  },
  [getShortNameKey(ArtifactId.BallistaOfQuickness)]: {
    defaultMessage: "Ballista",
    id: "game.artifact.ballistaOfQuickness.shortName",
  },
  [getDescriptionKey(ArtifactId.BallistaOfQuickness)]: {
    defaultMessage: "The {name} lets your catapult fire twice per combat round.",
    id: "game.artifact.ballistaOfQuickness.description",
  },
  // Spellbook
  [getKey(ArtifactId.Spellbook)]: {
    defaultMessage: "Spellbook",
    id: "game.artifact.spellbook",
  },
  // Cursed Artifacts
  [getKey(ArtifactId.FizbinOfMisfortune)]: {
    defaultMessage: "Fizbin of Misfortune",
    id: "game.artifact.fizbinOfMisfortune",
  },
  [getShortNameKey(ArtifactId.FizbinOfMisfortune)]: {
    defaultMessage: "Fizbin",
    id: "game.artifact.fizbinOfMisfortune.shortName",
  },
  [getDescriptionKey(ArtifactId.FizbinOfMisfortune)]: {
    defaultMessage: "The {name} greatly decreases your morale.",
    id: "game.artifact.fizbinOfMisfortune.description",
  },
  // Ultimate Artifacts
  [getKey(ArtifactId.UltimateSwordOfDominion)]: {
    defaultMessage: "Ultimate Sword of Dominion",
    id: "game.artifact.ultimateSwordOfDominion",
  },
  [getShortNameKey(ArtifactId.UltimateSwordOfDominion)]: {
    defaultMessage: "Ultimate Sword",
    id: "game.artifact.ultimateSwordOfDominion.shortName",
  },
  [getDescriptionKey(ArtifactId.UltimateSwordOfDominion)]: {
    defaultMessage: "The {name} increases your attack skill by 12.",
    id: "game.artifact.ultimateSwordOfDominion.description",
  },
  [getKey(ArtifactId.UltimateCloakOfProtection)]: {
    defaultMessage: "Ultimate Cloak of Protection",
    id: "game.artifact.ultimateCloakOfProtection",
  },
  [getShortNameKey(ArtifactId.UltimateCloakOfProtection)]: {
    defaultMessage: "Ultimate Cloak",
    id: "game.artifact.ultimateCloakOfProtection.shortName",
  },
  [getDescriptionKey(ArtifactId.UltimateCloakOfProtection)]: {
    defaultMessage: "The {name} increases your defense skill by 12.",
    id: "game.artifact.ultimateCloakOfProtection.description",
  },
  [getKey(ArtifactId.UltimateWandOfMagic)]: {
    defaultMessage: "Ultimate Wand of Magic",
    id: "game.artifact.ultimateWandOfMagic",
  },
  [getShortNameKey(ArtifactId.UltimateWandOfMagic)]: {
    defaultMessage: "Ultimate Wand",
    id: "game.artifact.ultimateWandOfMagic.shortName",
  },
  [getDescriptionKey(ArtifactId.UltimateWandOfMagic)]: {
    defaultMessage: "The {name} increases your spell power by 12.",
    id: "game.artifact.ultimateWandOfMagic.description",
  },
  [getKey(ArtifactId.UltimateBookOfKnowledge)]: {
    defaultMessage: "Ultimate Book of Knowledge",
    id: "game.artifact.ultimateBookOfKnowledge",
  },
  [getShortNameKey(ArtifactId.UltimateBookOfKnowledge)]: {
    defaultMessage: "Ultimate Book",
    id: "game.artifact.ultimateBookOfKnowledge.shortName",
  },
  [getDescriptionKey(ArtifactId.UltimateBookOfKnowledge)]: {
    defaultMessage: "The {name} increases your knowledge by 12.",
    id: "game.artifact.ultimateBookOfKnowledge.description",
  },
});

export const getArtifactNameMessage = (artifact: string) =>
  artifactMessages[getKey(artifact)] || unknownMessage;

export const getArtifactShortNameMessage = (artifact: string) =>
  artifactMessages[getShortNameKey(artifact)] || unknownMessage;

export const getArtifactDescriptionMessage = (artifact: string) =>
  artifactMessages[getDescriptionKey(artifact)] || unknownMessage;
