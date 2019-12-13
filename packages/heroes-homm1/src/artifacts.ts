import { MobilityModifierObjectData, ResourceGeneratorObjectData, SkillModifierObjectData, TradableObjectData } from "heroes-core";

import { Artifact, ArtifactData } from "./Artifact";
import { ArtifactId } from "./ArtifactId";
import { UltimateObjectData } from "./objects";
import { ResourceId } from "./ResourceId";
import { SkillId } from "./SkillId";
import { landTerrains } from "./terrains";
import { TerrainType } from "./TerrainType";

type ArtifactObjectData = ArtifactData & TradableObjectData;

const attackArtifacts: (ArtifactObjectData & SkillModifierObjectData)[] = [
  {
    id: ArtifactId.ThunderMaceOfDominion,
    skillModifier: {
      [SkillId.Attack]: {
        type: "add",
        value: 1,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.GiantFlailOfDominion,
    skillModifier: {
      [SkillId.Attack]: {
        type: "add",
        value: 1,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.PowerAxeOfDominion,
    skillModifier: {
      [SkillId.Attack]: {
        type: "add",
        value: 2,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.DragonSwordOfDominion,
    skillModifier: {
      [SkillId.Attack]: {
        type: "add",
        value: 3,
      },
    },
    tradable: true,
  },
];

const defenseArtifacts: (ArtifactObjectData & SkillModifierObjectData)[] = [
  {
    id: ArtifactId.ArmoredGauntletsOfProtection,
    skillModifier: {
      [SkillId.Defense]: {
        type: "add",
        value: 1,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.DefenderHelmOfProtection,
    skillModifier: {
      [SkillId.Defense]: {
        type: "add",
        value: 1,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.StealthShieldOfProtection,
    skillModifier: {
      [SkillId.Defense]: {
        type: "add",
        value: 2,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.DivineBreastplateOfProtection,
    skillModifier: {
      [SkillId.Defense]: {
        type: "add",
        value: 3,
      },
    },
    tradable: true,
  },
];

const spellPowerArtifacts: (ArtifactObjectData & SkillModifierObjectData)[] = [
  {
    id: ArtifactId.CastersBraceletOfMagic,
    skillModifier: {
      [SkillId.SpellPower]: {
        type: "add",
        value: 2,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.MagesRingOfPower,
    skillModifier: {
      [SkillId.SpellPower]: {
        type: "add",
        value: 2,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.WitchsBroachOfMagic,
    skillModifier: {
      [SkillId.SpellPower]: {
        type: "add",
        value: 3,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.ArcaneNecklaceOfMagic,
    skillModifier: {
      [SkillId.SpellPower]: {
        type: "add",
        value: 4,
      },
    },
    tradable: true,
  },
];

const knowledgeArtifacts: (ArtifactObjectData & SkillModifierObjectData)[] = [
  {
    id: ArtifactId.MinorScrollOfKnowledge,
    skillModifier: {
      [SkillId.Knowledge]: {
        type: "add",
        value: 2,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.MajorScrollOfKnowledge,
    skillModifier: {
      [SkillId.Knowledge]: {
        type: "add",
        value: 3,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.SuperiorScrollOfKnowledge,
    skillModifier: {
      [SkillId.Knowledge]: {
        type: "add",
        value: 4,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.ForemostScrollOfKnowledge,
    skillModifier: {
      [SkillId.Knowledge]: {
        type: "add",
        value: 5,
      },
    },
    tradable: true,
  },
];

const moraleArtifacts: ArtifactObjectData[] = [
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

const luckArtifacts: ArtifactObjectData[] = [
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

const incomeArtifacts: (ArtifactObjectData & ResourceGeneratorObjectData)[] = [
  {
    id: ArtifactId.EndlessPurseOfGold,
    resourceGenerator: {
      amount: 500,
      resource: ResourceId.Gold,
    },
    tradable: true,
  },
  {
    id: ArtifactId.EndlessBagOfGold,
    resourceGenerator: {
      amount: 750,
      resource: ResourceId.Gold,
    },
    tradable: true,
  },
  {
    id: ArtifactId.EndlessSackOfGold,
    resourceGenerator: {
      amount: 1000,
      resource: ResourceId.Gold,
    },
    tradable: true,
  },
];

const mobilityArtifacts: (ArtifactObjectData & MobilityModifierObjectData)[] = [
  {
    id: ArtifactId.TravelersBootsOfMobility,
    mobilityModifier: landTerrains.reduce((b, t) => ({
      ...b,
      [t]: 12,
    }), {}),
    tradable: true,
  },
  {
    id: ArtifactId.NomadBootsOfMobility,
    mobilityModifier: landTerrains.reduce((b, t) => ({
      ...b,
      [t]: 24,
    }), {}),
    tradable: true,
  },
  {
    id: ArtifactId.SailorsAstrolabeOfMobility,
    mobilityModifier: {
      type: "add",
      value: 20,
    },
    tradable: true,
  },
  {
    id: ArtifactId.TrueCompassOfMobility,
    mobilityModifier: {
      [TerrainType.Water]: {
        type: "add",
        value: 40,
      },
    },
    tradable: true,
  },
];

const siegeWeaponsArtifacts: ArtifactObjectData[] = [
  {
    id: ArtifactId.BallistaOfQuickness,
    tradable: true,
  },
];

const spellBookArtifacts: ArtifactObjectData[] = [
  {
    id: ArtifactId.Spellbook,
    tradable: false,
  },
];

const cursedArtifacts: ArtifactObjectData[] = [
  {
    id: ArtifactId.FizbinOfMisfortune,
    tradable: true,
  },
];

const ultimateArtifacts: (ArtifactObjectData & SkillModifierObjectData & UltimateObjectData)[] = [
  {
    id: ArtifactId.UltimateSwordOfDominion,
    isUltimate: true,
    skillModifier: {
      [SkillId.Attack]: {
        type: "add",
        value: 12,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.UltimateCloakOfProtection,
    isUltimate: true,
    skillModifier: {
      [SkillId.Defense]: {
        type: "add",
        value: 12,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.UltimateWandOfMagic,
    isUltimate: true,
    skillModifier: {
      [SkillId.SpellPower]: {
        type: "add",
        value: 12,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.UltimateBookOfKnowledge,
    isUltimate: true,
    skillModifier: {
      [SkillId.Knowledge]: {
        type: "add",
        value: 12,
      },
    },
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
