import { MobilityModifierObjectData, ResourceGeneratorObjectData, SkillModifierObjectData, TradableObjectData } from "heroes-core";

import { Artifact, ArtifactData } from "./Artifact";
import { ArtifactId } from "./ArtifactId";
import { ResourceId } from "./ResourceId";
import { Skill } from "./Skill";
import { landTerrains } from "./terrains";
import { TerrainType } from "./TerrainType";

type ArtifactObjectData = ArtifactData & TradableObjectData;

const attackArtifacts: (ArtifactObjectData & SkillModifierObjectData)[] = [
  {
    id: ArtifactId.ThunderMaceOfDominion,
    isUltimate: false,
    skillModifier: {
      [Skill.Attack]: {
        type: "add",
        value: 1,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.GiantFlailOfDominion,
    isUltimate: false,
    skillModifier: {
      [Skill.Attack]: {
        type: "add",
        value: 1,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.PowerAxeOfDominion,
    isUltimate: false,
    skillModifier: {
      [Skill.Attack]: {
        type: "add",
        value: 2,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.DragonSwordOfDominion,
    isUltimate: false,
    skillModifier: {
      [Skill.Attack]: {
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
    isUltimate: false,
    skillModifier: {
      [Skill.Defense]: {
        type: "add",
        value: 1,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.DefenderHelmOfProtection,
    isUltimate: false,
    skillModifier: {
      [Skill.Defense]: {
        type: "add",
        value: 1,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.StealthShieldOfProtection,
    isUltimate: false,
    skillModifier: {
      [Skill.Defense]: {
        type: "add",
        value: 2,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.DivineBreastplateOfProtection,
    isUltimate: false,
    skillModifier: {
      [Skill.Defense]: {
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
    isUltimate: false,
    skillModifier: {
      [Skill.SpellPower]: {
        type: "add",
        value: 2,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.MagesRingOfPower,
    isUltimate: false,
    skillModifier: {
      [Skill.SpellPower]: {
        type: "add",
        value: 2,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.WitchsBroachOfMagic,
    isUltimate: false,
    skillModifier: {
      [Skill.SpellPower]: {
        type: "add",
        value: 3,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.ArcaneNecklaceOfMagic,
    isUltimate: false,
    skillModifier: {
      [Skill.SpellPower]: {
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
    isUltimate: false,
    skillModifier: {
      [Skill.Knowledge]: {
        type: "add",
        value: 2,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.MajorScrollOfKnowledge,
    isUltimate: false,
    skillModifier: {
      [Skill.Knowledge]: {
        type: "add",
        value: 3,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.SuperiorScrollOfKnowledge,
    isUltimate: false,
    skillModifier: {
      [Skill.Knowledge]: {
        type: "add",
        value: 4,
      },
    },
    tradable: true,
  },
  {
    id: ArtifactId.ForemostScrollOfKnowledge,
    isUltimate: false,
    skillModifier: {
      [Skill.Knowledge]: {
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

const luckArtifacts: ArtifactObjectData[] = [
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

const incomeArtifacts: (ArtifactObjectData & ResourceGeneratorObjectData)[] = [
  {
    id: ArtifactId.EndlessPurseOfGold,
    isUltimate: false,
    resourceGenerator: {
      amount: 500,
      resource: ResourceId.Gold,
    },
    tradable: true,
  },
  {
    id: ArtifactId.EndlessBagOfGold,
    isUltimate: false,
    resourceGenerator: {
      amount: 750,
      resource: ResourceId.Gold,
    },
    tradable: true,
  },
  {
    id: ArtifactId.EndlessSackOfGold,
    isUltimate: false,
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

const siegeWeaponsArtifacts: ArtifactObjectData[] = [
  {
    id: ArtifactId.BallistaOfQuickness,
    isUltimate: false,
    tradable: true,
  },
];

const spellBookArtifacts: ArtifactObjectData[] = [
  {
    id: ArtifactId.Spellbook,
    isUltimate: false,
    tradable: false,
  },
];

const cursedArtifacts: ArtifactObjectData[] = [
  {
    id: ArtifactId.FizbinOfMisfortune,
    isUltimate: false,
    tradable: true,
  },
];

const ultimateArtifacts: (ArtifactObjectData & SkillModifierObjectData)[] = [
  {
    id: ArtifactId.UltimateSwordOfDominion,
    isUltimate: true,
    skillModifier: {
      [Skill.Attack]: {
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
      [Skill.Defense]: {
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
      [Skill.SpellPower]: {
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
      [Skill.Knowledge]: {
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
