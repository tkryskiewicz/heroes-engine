import { defineMessages, Messages } from "react-intl";

import { ArtifactId } from "heroes-homm1";

import { unknownMessage } from "./util";

const getDescriptionKey = (artifact: string) =>
  `${artifact}Description`;

export const artifactMessages: Messages = defineMessages({
  // Attack
  [ArtifactId.ThunderMaceOfDominion]: {
    defaultMessage: "Thunder Mace of Dominion",
    id: "game.artifact.thunderMaceOfDominion",
  },
  [getDescriptionKey(ArtifactId.ThunderMaceOfDominion)]: {
    defaultMessage: "The Thunder Mace of Dominion increases your attack skill by 1.",
    id: "game.artifact.thunderMaceOfDominion.description",
  },
  [ArtifactId.GiantFlailOfDominion]: {
    defaultMessage: "Giant Flail of Dominion",
    id: "game.artifact.giantFlailOfDominion",
  },
  [getDescriptionKey(ArtifactId.GiantFlailOfDominion)]: {
    defaultMessage: "The Giant Flail of Dominion increases your attack skill by 1.",
    id: "game.artifact.giantFlailOfDominion.description",
  },
  [ArtifactId.PowerAxeOfDominion]: {
    defaultMessage: "Power Axe of Dominion",
    id: "game.artifact.powerAxeOfDominion",
  },
  [getDescriptionKey(ArtifactId.PowerAxeOfDominion)]: {
    defaultMessage: "The Power Axe of Dominion increases your attack skill by 2.",
    id: "game.artifact.powerAxeOfDominion.description",
  },
  [ArtifactId.DragonSwordOfDominion]: {
    defaultMessage: "Dragon Sword of Dominion",
    id: "game.artifact.dragonSwordOfDominion",
  },
  [getDescriptionKey(ArtifactId.DragonSwordOfDominion)]: {
    defaultMessage: "The Dragon Sword of Dominion increases your attack skill by 3.",
    id: "game.artifact.dragonSwordOfDominion.description",
  },
  // Defense
  [ArtifactId.ArmoredGauntletsOfProtection]: {
    defaultMessage: "Armored Gauntlets of Protection",
    id: "game.artifact.armoredGauntletsOfProtection",
  },
  [getDescriptionKey(ArtifactId.ArmoredGauntletsOfProtection)]: {
    defaultMessage: "The Armored Gauntlets of Protection increase your defense skill by 1.",
    id: "game.artifact.armoredGauntletsOfProtection.description",
  },
  [ArtifactId.DefenderHelmOfProtection]: {
    defaultMessage: "Defender Helm of Protection",
    id: "game.artifact.defenderHelmOfProtection",
  },
  [getDescriptionKey(ArtifactId.DefenderHelmOfProtection)]: {
    defaultMessage: "The Defender Helm of Protection increases your defense skill by 1.",
    id: "game.artifact.defenderHelmOfProtection.description",
  },
  [ArtifactId.StealthShieldOfProtection]: {
    defaultMessage: "Stealth Shield of Protection",
    id: "game.artifact.stealthShieldOfProtection",
  },
  [getDescriptionKey(ArtifactId.StealthShieldOfProtection)]: {
    defaultMessage: "The Stealth Shield of Protection increases your defense skill by 2.",
    id: "game.artifact.stealthShieldOfProtection.description",
  },
  [ArtifactId.DivineBreastplateOfProtection]: {
    defaultMessage: "Divine Breastplate of Protection",
    id: "game.artifact.divineBreastplateOfProtection",
  },
  [getDescriptionKey(ArtifactId.DivineBreastplateOfProtection)]: {
    defaultMessage: "The Divine Breastplate of Protection increases your defense skill by 3.",
    id: "game.artifact.divineBreastplateOfProtection.description",
  },
  // Spell Power
  [ArtifactId.CastersBraceletOfMagic]: {
    defaultMessage: "Caster's Bracelet of Magic",
    id: "game.artifact.castersBraceletOfMagic",
  },
  [getDescriptionKey(ArtifactId.CastersBraceletOfMagic)]: {
    defaultMessage: "The Caster's Bracelet of Magic increases your spell power by 2.",
    id: "game.artifact.castersBraceletOfMagic.description",
  },
  [ArtifactId.MagesRingOfPower]: {
    defaultMessage: "Mage's Ring of Power",
    id: "game.artifact.magesRingOfPower",
  },
  [getDescriptionKey(ArtifactId.MagesRingOfPower)]: {
    defaultMessage: "The Mage's Ring of Power increases your spell power by 2.",
    id: "game.artifact.magesRingOfPower.description",
  },
  [ArtifactId.WitchsBroachOfMagic]: {
    defaultMessage: "Witch's Broach of Magic",
    id: "game.artifact.witchsBroachOfMagic",
  },
  [getDescriptionKey(ArtifactId.WitchsBroachOfMagic)]: {
    defaultMessage: "The Witch's Broach of Magic increases your spell power by 3.",
    id: "game.artifact.witchsBroachOfMagic.description",
  },
  [ArtifactId.ArcaneNecklaceOfMagic]: {
    defaultMessage: "Arcane Necklace of Magic",
    id: "game.artifact.arcaneNecklaceOfMagic",
  },
  [getDescriptionKey(ArtifactId.ArcaneNecklaceOfMagic)]: {
    defaultMessage: "The Arcane Necklace of Magic increases your spell power by 4.",
    id: "game.artifact.arcaneNecklaceOfMagic.description",
  },
  // Knowledge
  [ArtifactId.MinorScrollOfKnowledge]: {
    defaultMessage: "Minor Scroll of Knowledge",
    id: "game.artifact.minorScrollOfKnowledge",
  },
  [getDescriptionKey(ArtifactId.MinorScrollOfKnowledge)]: {
    defaultMessage: "The Minor Scroll of Knowledge increases your knowledge by 2.",
    id: "game.artifact.minorScrollOfKnowledge.description",
  },
  [ArtifactId.MajorScrollOfKnowledge]: {
    defaultMessage: "Major Scroll of Knowledge",
    id: "game.artifact.majorScrollOfKnowledge",
  },
  [getDescriptionKey(ArtifactId.MajorScrollOfKnowledge)]: {
    defaultMessage: "The Major Scroll of Knowledge increases your knowledge by 3.",
    id: "game.artifact.majorScrollOfKnowledge.description",
  },
  [ArtifactId.SuperiorScrollOfKnowledge]: {
    defaultMessage: "Superior Scroll of Knowledge",
    id: "game.artifact.superiorScrollOfKnowledge",
  },
  [getDescriptionKey(ArtifactId.SuperiorScrollOfKnowledge)]: {
    defaultMessage: "The Superior Scroll of Knowledge increases your knowledge by 4.",
    id: "game.artifact.superiorScrollOfKnowledge.description",
  },
  [ArtifactId.ForemostScrollOfKnowledge]: {
    defaultMessage: "Foremost Scroll of Knowledge",
    id: "game.artifact.foremostScrollOfKnowledge",
  },
  [getDescriptionKey(ArtifactId.ForemostScrollOfKnowledge)]: {
    defaultMessage: "The Foremost Scroll of Knowledge increases your knowledge by 5.",
    id: "game.artifact.foremostScrollOfKnowledge.description",
  },
  // Morale
  [ArtifactId.MedalOfValor]: {
    defaultMessage: "Medal of Valor",
    id: "game.artifact.medalOfValor",
  },
  [getDescriptionKey(ArtifactId.MedalOfValor)]: {
    defaultMessage: "The Medal of Valor increases your morale.",
    id: "game.artifact.medalOfValor.description",
  },
  [ArtifactId.MedalOfCourage]: {
    defaultMessage: "Medal of Courage",
    id: "game.artifact.medalOfCourage",
  },
  [getDescriptionKey(ArtifactId.MedalOfCourage)]: {
    defaultMessage: "The Medal of Courage increases your morale.",
    id: "game.artifact.medalOfCourage.description",
  },
  [ArtifactId.MedalOfHonor]: {
    defaultMessage: "Medal of Honor",
    id: "game.artifact.medalOfHonor",
  },
  [getDescriptionKey(ArtifactId.MedalOfHonor)]: {
    defaultMessage: "The Medal of Honor increases your morale.",
    id: "game.artifact.medalOfHonor.description",
  },
  [ArtifactId.MedalOfDistinction]: {
    defaultMessage: "Medal of Distinction",
    id: "game.artifact.medalOfDistinction",
  },
  [getDescriptionKey(ArtifactId.MedalOfDistinction)]: {
    defaultMessage: "The Medal of Distinction increases your morale.",
    id: "game.artifact.medalOfDistinction.description",
  },
  // Luck
  [ArtifactId.LuckyRabbitsFoot]: {
    defaultMessage: "Lucky Rabbit's Foot",
    id: "game.artifact.luckyRabbitsFoot",
  },
  [getDescriptionKey(ArtifactId.LuckyRabbitsFoot)]: {
    defaultMessage: "The Lucky Rabbit's Foot increases your luck in combat.",
    id: "game.artifact.luckyRabbitsFoot.description",
  },
  [ArtifactId.GoldenHoreshoe]: {
    defaultMessage: "Golden Horeshoe",
    id: "game.artifact.goldenHoreshoe",
  },
  [getDescriptionKey(ArtifactId.GoldenHoreshoe)]: {
    defaultMessage: "The Golden Horseshoe increases your luck in combat.",
    id: "game.artifact.goldenHoreshoe.description",
  },
  [ArtifactId.GamblersLuckyCoin]: {
    defaultMessage: "Gambler's Lucky Coin",
    id: "game.artifact.gamblersLuckyCoin",
  },
  [getDescriptionKey(ArtifactId.GamblersLuckyCoin)]: {
    defaultMessage: "The Gambler's Lucky Coin increases your luck in combat.",
    id: "game.artifact.gamblersLuckyCoin.description",
  },
  [ArtifactId.FourLeafClover]: {
    defaultMessage: "Four-Leaf Clover",
    id: "game.artifact.fourLeafClover",
  },
  [getDescriptionKey(ArtifactId.FourLeafClover)]: {
    defaultMessage: "The Four-Leaf Clover increases your luck in combat.",
    id: "game.artifact.fourLeafClover.description",
  },
  // Income
  [ArtifactId.EndlessPurseOfGold]: {
    defaultMessage: "Endless Purse of Gold",
    id: "game.artifact.endlessPurseOfGold",
  },
  [getDescriptionKey(ArtifactId.EndlessPurseOfGold)]: {
    defaultMessage: "The Endless Purse of Gold provides you with 500 gold per day.",
    id: "game.artifact.endlessPurseOfGold.description",
  },
  [ArtifactId.EndlessBagOfGold]: {
    defaultMessage: "Endless Bag of Gold",
    id: "game.artifact.endlessBagOfGold",
  },
  [getDescriptionKey(ArtifactId.EndlessBagOfGold)]: {
    defaultMessage: "The Endless Bag of Gold provides you with 750 gold per day.",
    id: "game.artifact.endlessBagOfGold.description",
  },
  [ArtifactId.EndlessSackOfGold]: {
    defaultMessage: "Endless Sack of Gold",
    id: "game.artifact.endlessSackOfGold",
  },
  [getDescriptionKey(ArtifactId.EndlessSackOfGold)]: {
    defaultMessage: "The Endless Sack of Gold provides you with 1000 gold per day.",
    id: "game.artifact.endlessSackOfGold.description",
  },
  // Mobility
  [ArtifactId.TravelersBootsOfMobility]: {
    defaultMessage: "Traveler's Boots of Mobility",
    id: "game.artifact.travelersBootsOfMobility",
  },
  [getDescriptionKey(ArtifactId.TravelersBootsOfMobility)]: {
    defaultMessage: "The Traveler's Boots of Mobility increase your movement on land.",
    id: "game.artifact.travelersBootsOfMobility.description",
  },
  [ArtifactId.NomadBootsOfMobility]: {
    defaultMessage: "Nomad Boots of Mobility",
    id: "game.artifact.nomadBootsOfMobility",
  },
  [getDescriptionKey(ArtifactId.NomadBootsOfMobility)]: {
    defaultMessage: "The Nomad Boots of Mobility increase your movement on land.",
    id: "game.artifact.nomadBootsOfMobility.description",
  },
  [ArtifactId.SailorsAstrolabeOfMobility]: {
    defaultMessage: "Sailor's Astrolabe of Mobility",
    id: "game.artifact.sailorsAstrolabeOfMobility",
  },
  [getDescriptionKey(ArtifactId.SailorsAstrolabeOfMobility)]: {
    defaultMessage: "The Sailors' Astrolabe of Mobility increases your movement on sea.",
    id: "game.artifact.sailorsAstrolabeOfMobility.description",
  },
  [ArtifactId.TrueCompassOfMobility]: {
    defaultMessage: "True Compass of Mobility",
    id: "game.artifact.trueCompassOfMobility",
  },
  [getDescriptionKey(ArtifactId.TrueCompassOfMobility)]: {
    defaultMessage: "The True Compass of Mobility increases your movement on land and sea.",
    id: "game.artifact.trueCompassOfMobility.description",
  },
  // Siege Weapons
  [ArtifactId.BallistaOfQuickness]: {
    defaultMessage: "Ballista of Quickness",
    id: "game.artifact.ballistaOfQuickness",
  },
  [getDescriptionKey(ArtifactId.BallistaOfQuickness)]: {
    defaultMessage: "The Ballista of Quickness lets your catapult fire twice per combat round.",
    id: "game.artifact.ballistaOfQuickness.description",
  },
  // Spellbook
  [ArtifactId.Spellbook]: {
    defaultMessage: "Spellbook",
    id: "game.artifact.spellbook",
  },
  // Cursed Artifacts
  [ArtifactId.FizbinOfMisfortune]: {
    defaultMessage: "Fizbin of Misfortune",
    id: "game.artifact.fizbinOfMisfortune",
  },
  [getDescriptionKey(ArtifactId.FizbinOfMisfortune)]: {
    defaultMessage: "The Fizbin of Misfortune greatly decreases your morale.",
    id: "game.artifact.fizbinOfMisfortune.description",
  },
  // Ultimate Artifacts
  [ArtifactId.UltimateSwordOfDominion]: {
    defaultMessage: "Ultimate Sword of Dominion",
    id: "game.artifact.ultimateSwordOfDominion",
  },
  [getDescriptionKey(ArtifactId.UltimateSwordOfDominion)]: {
    defaultMessage: "The Ultimate Sword of Dominion increases your attack skill by 12.",
    id: "game.artifact.ultimateSwordOfDominion.description",
  },
  [ArtifactId.UltimateCloakOfProtection]: {
    defaultMessage: "Ultimate Cloak of Protection",
    id: "game.artifact.ultimateCloakOfProtection",
  },
  [getDescriptionKey(ArtifactId.UltimateCloakOfProtection)]: {
    defaultMessage: "The Ultimate Cloak of Protection increases your defense skill by 12.",
    id: "game.artifact.ultimateCloakOfProtection.description",
  },
  [ArtifactId.UltimateWandOfMagic]: {
    defaultMessage: "Ultimate Wand of Magic",
    id: "game.artifact.ultimateWandOfMagic",
  },
  [getDescriptionKey(ArtifactId.UltimateWandOfMagic)]: {
    defaultMessage: "The Ultimate Wand of Magic increases your spell power by 12.",
    id: "game.artifact.ultimateWandOfMagic.description",
  },
  [ArtifactId.UltimateBookOfKnowledge]: {
    defaultMessage: "Ultimate Book of Knowledge",
    id: "game.artifact.ultimateBookOfKnowledge",
  },
  [getDescriptionKey(ArtifactId.UltimateBookOfKnowledge)]: {
    defaultMessage: "The Ultimate Book of Knowledge increases your knowledge by 12.",
    id: "game.artifact.ultimateBookOfKnowledge.description",
  },
});

export const getArtifactNameMessage = (artifact: string) =>
  artifactMessages[artifact] || unknownMessage;

export const getArtifactDescriptionMessage = (artifact: string) =>
  artifactMessages[getDescriptionKey(artifact)] || unknownMessage;
