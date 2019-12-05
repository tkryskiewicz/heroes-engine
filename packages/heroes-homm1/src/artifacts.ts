import { MobilityModifierObjectData } from "heroes-core";

import { Artifact, ArtifactData } from "./Artifact";
import { ArtifactId } from "./ArtifactId";
import { landTerrains } from "./terrains";
import { TerrainType } from "./TerrainType";

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

const mobilityArtifacts: (ArtifactData & MobilityModifierObjectData)[] = [
  {
    id: ArtifactId.TravelersBootsOfMobility,
    isUltimate: false,
    mobilityModifier: landTerrains.reduce((b, t) => ({
      ...b,
      [t]: 12,
    }), {}),
    tradable: true,
  },
  {
    id: ArtifactId.NomadBootsOfMobility,
    isUltimate: false,
    mobilityModifier: landTerrains.reduce((b, t) => ({
      ...b,
      [t]: 24,
    }), {}),
    tradable: true,
  },
  {
    id: ArtifactId.SailorsAstrolabeOfMobility,
    isUltimate: false,
    mobilityModifier: {
      type: "add",
      value: 20,
    },
    tradable: true,
  },
  {
    id: ArtifactId.TrueCompassOfMobility,
    isUltimate: false,
    mobilityModifier: {
      [TerrainType.Water]: {
        type: "add",
        value: 40,
      },
    },
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
