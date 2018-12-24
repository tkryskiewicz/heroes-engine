import { defineMessages, Messages } from "react-intl";

import { ArtifactId } from "heroes-homm1";

import { unknownMessage } from "./util";

export const artifactMessages: Messages = defineMessages({
  // Attack
  [ArtifactId.ThunderMaceOfDominion]: {
    defaultMessage: "Thunder Mace of Dominion",
    id: "game.artifact.thunderMaceOfDominion",
  },
  [ArtifactId.GiantFlailOfDominion]: {
    defaultMessage: "Giant Flail of Dominion",
    id: "game.artifact.giantFlailOfDominion",
  },
  [ArtifactId.PowerAxeOfDominion]: {
    defaultMessage: "Power Axe of Dominion",
    id: "game.artifact.powerAxeOfDominion",
  },
  [ArtifactId.DragonSwordOfDominion]: {
    defaultMessage: "Dragon Sword of Dominion",
    id: "game.artifact.dragonSwordOfDominion",
  },
  // Defense
  [ArtifactId.ArmoredGauntletsOfProtection]: {
    defaultMessage: "Armored Gauntlets of Protection",
    id: "game.artifact.armoredGauntletsOfProtection",
  },
  [ArtifactId.DefenderHelmOfProtection]: {
    defaultMessage: "Defender Helm of Protection",
    id: "game.artifact.defenderHelmOfProtection",
  },
  [ArtifactId.StealthShieldOfProtection]: {
    defaultMessage: "Stealth Shield of Protection",
    id: "game.artifact.stealthShieldOfProtection",
  },
  [ArtifactId.DivineBreastplateOfProtection]: {
    defaultMessage: "Divine Breastplate of Protection",
    id: "game.artifact.divineBreastplateOfProtection",
  },
  // Spell Power
  [ArtifactId.CastersBraceletOfMagic]: {
    defaultMessage: "Caster's Bracelet of Magic",
    id: "game.artifact.castersBraceletOfMagic",
  },
  [ArtifactId.MagesRingOfPower]: {
    defaultMessage: "Mage's Ring of Power",
    id: "game.artifact.magesRingOfPower",
  },
  [ArtifactId.WitchsBroachOfMagic]: {
    defaultMessage: "Witch's Broach of Magic",
    id: "game.artifact.witchsBroachOfMagic",
  },
  [ArtifactId.ArcaneNecklaceOfMagic]: {
    defaultMessage: "Arcane Necklace of Magic",
    id: "game.artifact.arcaneNecklaceOfMagic",
  },
  // Knowledge
  [ArtifactId.MinorScrollOfKnowledge]: {
    defaultMessage: "Minor Scroll of Knowledge",
    id: "game.artifact.minorScrollOfKnowledge",
  },
  [ArtifactId.MajorScrollOfKnowledge]: {
    defaultMessage: "Major Scroll of Knowledge",
    id: "game.artifact.majorScrollOfKnowledge",
  },
  [ArtifactId.SuperiorScrollOfKnowledge]: {
    defaultMessage: "Superior Scroll of Knowledge",
    id: "game.artifact.superiorScrollOfKnowledge",
  },
  [ArtifactId.ForemostScrollOfKnowledge]: {
    defaultMessage: "Foremost Scroll of Knowledge",
    id: "game.artifact.foremostScrollOfKnowledge",
  },
  // Morale
  [ArtifactId.MedalOfValor]: {
    defaultMessage: "Medal of Valor",
    id: "game.artifact.medalOfValor",
  },
  [ArtifactId.MedalOfCourage]: {
    defaultMessage: "Medal of Courage",
    id: "game.artifact.medalOfCourage",
  },
  [ArtifactId.MedalOfHonor]: {
    defaultMessage: "Medal of Honor",
    id: "game.artifact.medalOfHonor",
  },
  [ArtifactId.MedalOfDistinction]: {
    defaultMessage: "Medal of Distinction",
    id: "game.artifact.medalOfDistinction",
  },
  // Luck
  [ArtifactId.LuckyRabbitsFoot]: {
    defaultMessage: "Lucky Rabbit's Foot",
    id: "game.artifact.luckyRabbitsFoot",
  },
  [ArtifactId.GoldenHoreshoe]: {
    defaultMessage: "Golden Horeshoe",
    id: "game.artifact.goldenHoreshoe",
  },
  [ArtifactId.GamblersLuckyCoin]: {
    defaultMessage: "Gambler's Lucky Coin",
    id: "game.artifact.gamblersLuckyCoin",
  },
  [ArtifactId.FourLeafClover]: {
    defaultMessage: "Four-Leaf Clover",
    id: "game.artifact.fourLeafClover",
  },
  // Income
  [ArtifactId.EndlessPurseOfGold]: {
    defaultMessage: "Endless Purse of Gold",
    id: "game.artifact.endlessPurseOfGold",
  },
  [ArtifactId.EndlessBagOfGold]: {
    defaultMessage: "Endless Bag of Gold",
    id: "game.artifact.endlessBagOfGold",
  },
  [ArtifactId.EndlessSackOfGold]: {
    defaultMessage: "Endless Sack of Gold",
    id: "game.artifact.endlessSackOfGold",
  },
  // Mobility
  [ArtifactId.TravelersBootsOfMobility]: {
    defaultMessage: "Traveler's Boots of Mobility",
    id: "game.artifact.travelersBootsOfMobility",
  },
  [ArtifactId.NomadBootsOfMobility]: {
    defaultMessage: "Nomad Boots of Mobility",
    id: "game.artifact.nomadBootsOfMobility",
  },
  [ArtifactId.SailorsAstrolabeOfMobility]: {
    defaultMessage: "Sailor's Astrolabe of Mobility",
    id: "game.artifact.sailorsAstrolabeOfMobility",
  },
  [ArtifactId.TrueCompassOfMobility]: {
    defaultMessage: "True Compass of Mobility",
    id: "game.artifact.trueCompassOfMobility",
  },
  // Siege Weapons
  [ArtifactId.BallistaOfQuickness]: {
    defaultMessage: "Ballista of Quickness",
    id: "game.artifact.ballistaOfQuickness",
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
  // Ultimate Artifacts
  [ArtifactId.UltimateSwordOfDominion]: {
    defaultMessage: "Ultimate Sword of Dominion",
    id: "game.artifact.ultimateSwordOfDominion",
  },
  [ArtifactId.UltimateCloakOfProtection]: {
    defaultMessage: "Ultimate Cloak of Protection",
    id: "game.artifact.ultimateCloakOfProtection",
  },
  [ArtifactId.UltimateWandOfMagic]: {
    defaultMessage: "Ultimate Wand of Magic",
    id: "game.artifact.ultimateWandOfMagic",
  },
  [ArtifactId.UltimateBookOfKnowledge]: {
    defaultMessage: "Ultimate Book of Knowledge",
    id: "game.artifact.ultimateBookOfKnowledge",
  },
});

export const getArtifactNameMessage = (artifact: string) =>
  artifactMessages[artifact] || unknownMessage;
