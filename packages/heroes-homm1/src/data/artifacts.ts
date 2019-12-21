import {
  ItemData,
  ItemObjectData,
  MapObjectData,
  MobilityModifierObjectData,
  PickableObjectData,
  ResourceGeneratorObjectData,
  SkillModifierObjectData,
  TradableObjectData,
} from "heroes-core";

import { ArtifactId } from "../ArtifactId";
import { ObjectId } from "../ObjectId";
import { CategorisedObjectData, isUltimateObjectData, TerrainRestrictedObjectData, UltimateObjectData } from "../objects";
import { ResourceId } from "../ResourceId";
import { SkillId } from "../SkillId";
import { landTerrains } from "../terrains";
import { TerrainType } from "../TerrainType";
import { ObjectType } from "./ObjectType";

const attackArtifacts: (ItemData & SkillModifierObjectData)[] = [
  {
    id: ArtifactId.ThunderMaceOfDominion,
    skillModifier: {
      [SkillId.Attack]: {
        type: "add",
        value: 1,
      },
    },
  },
  {
    id: ArtifactId.GiantFlailOfDominion,
    skillModifier: {
      [SkillId.Attack]: {
        type: "add",
        value: 1,
      },
    },
  },
  {
    id: ArtifactId.PowerAxeOfDominion,
    skillModifier: {
      [SkillId.Attack]: {
        type: "add",
        value: 2,
      },
    },
  },
  {
    id: ArtifactId.DragonSwordOfDominion,
    skillModifier: {
      [SkillId.Attack]: {
        type: "add",
        value: 3,
      },
    },
  },
];

const defenseArtifacts: (ItemData & SkillModifierObjectData)[] = [
  {
    id: ArtifactId.ArmoredGauntletsOfProtection,
    skillModifier: {
      [SkillId.Defense]: {
        type: "add",
        value: 1,
      },
    },
  },
  {
    id: ArtifactId.DefenderHelmOfProtection,
    skillModifier: {
      [SkillId.Defense]: {
        type: "add",
        value: 1,
      },
    },
  },
  {
    id: ArtifactId.StealthShieldOfProtection,
    skillModifier: {
      [SkillId.Defense]: {
        type: "add",
        value: 2,
      },
    },
  },
  {
    id: ArtifactId.DivineBreastplateOfProtection,
    skillModifier: {
      [SkillId.Defense]: {
        type: "add",
        value: 3,
      },
    },
  },
];

const spellPowerArtifacts: (ItemData & SkillModifierObjectData)[] = [
  {
    id: ArtifactId.CastersBraceletOfMagic,
    skillModifier: {
      [SkillId.SpellPower]: {
        type: "add",
        value: 2,
      },
    },
  },
  {
    id: ArtifactId.MagesRingOfPower,
    skillModifier: {
      [SkillId.SpellPower]: {
        type: "add",
        value: 2,
      },
    },
  },
  {
    id: ArtifactId.WitchsBroachOfMagic,
    skillModifier: {
      [SkillId.SpellPower]: {
        type: "add",
        value: 3,
      },
    },
  },
  {
    id: ArtifactId.ArcaneNecklaceOfMagic,
    skillModifier: {
      [SkillId.SpellPower]: {
        type: "add",
        value: 4,
      },
    },
  },
];

const knowledgeArtifacts: (ItemData & SkillModifierObjectData)[] = [
  {
    id: ArtifactId.MinorScrollOfKnowledge,
    skillModifier: {
      [SkillId.Knowledge]: {
        type: "add",
        value: 2,
      },
    },
  },
  {
    id: ArtifactId.MajorScrollOfKnowledge,
    skillModifier: {
      [SkillId.Knowledge]: {
        type: "add",
        value: 3,
      },
    },
  },
  {
    id: ArtifactId.SuperiorScrollOfKnowledge,
    skillModifier: {
      [SkillId.Knowledge]: {
        type: "add",
        value: 4,
      },
    },
  },
  {
    id: ArtifactId.ForemostScrollOfKnowledge,
    skillModifier: {
      [SkillId.Knowledge]: {
        type: "add",
        value: 5,
      },
    },
  },
];

const moraleArtifacts: ItemData[] = [
  {
    id: ArtifactId.MedalOfValor,
  },
  {
    id: ArtifactId.MedalOfCourage,
  },
  {
    id: ArtifactId.MedalOfHonor,
  },
  {
    id: ArtifactId.MedalOfDistinction,
  },
];

const luckArtifacts: ItemData[] = [
  {
    id: ArtifactId.LuckyRabbitsFoot,
  },
  {
    id: ArtifactId.GoldenHoreshoe,
  },
  {
    id: ArtifactId.GamblersLuckyCoin,
  },
  {
    id: ArtifactId.FourLeafClover,
  },
];

const incomeArtifacts: (ItemData & ResourceGeneratorObjectData)[] = [
  {
    id: ArtifactId.EndlessPurseOfGold,
    resourceGenerator: {
      amount: 500,
      resource: ResourceId.Gold,
    },
  },
  {
    id: ArtifactId.EndlessBagOfGold,
    resourceGenerator: {
      amount: 750,
      resource: ResourceId.Gold,
    },
  },
  {
    id: ArtifactId.EndlessSackOfGold,
    resourceGenerator: {
      amount: 1000,
      resource: ResourceId.Gold,
    },
  },
];

const mobilityArtifacts: (ItemData & MobilityModifierObjectData)[] = [
  {
    id: ArtifactId.TravelersBootsOfMobility,
    mobilityModifier: landTerrains.reduce((b, t) => ({
      ...b,
      [t]: 12,
    }), {}),
  },
  {
    id: ArtifactId.NomadBootsOfMobility,
    mobilityModifier: landTerrains.reduce((b, t) => ({
      ...b,
      [t]: 24,
    }), {}),
  },
  {
    id: ArtifactId.SailorsAstrolabeOfMobility,
    mobilityModifier: {
      type: "add",
      value: 20,
    },
  },
  {
    id: ArtifactId.TrueCompassOfMobility,
    mobilityModifier: {
      [TerrainType.Water]: {
        type: "add",
        value: 40,
      },
    },
  },
];

const siegeWeaponsArtifacts: ItemData[] = [
  {
    id: ArtifactId.BallistaOfQuickness,
  },
];

const spellBookArtifacts: ItemData[] = [
  {
    id: ArtifactId.Spellbook,
  },
];

const cursedArtifacts: ItemData[] = [
  {
    id: ArtifactId.FizbinOfMisfortune,
  },
];

const ultimateArtifacts: (ItemData & SkillModifierObjectData & UltimateObjectData)[] = [
  {
    id: ArtifactId.UltimateSwordOfDominion,
    isUltimate: true,
    skillModifier: {
      [SkillId.Attack]: {
        type: "add",
        value: 12,
      },
    },
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
  },
];

const order: string[] = [
  ArtifactId.ArcaneNecklaceOfMagic,
  ArtifactId.CastersBraceletOfMagic,
  ArtifactId.MagesRingOfPower,
  ArtifactId.WitchsBroachOfMagic,

  ArtifactId.MedalOfValor,
  ArtifactId.MedalOfCourage,
  ArtifactId.MedalOfHonor,
  ArtifactId.MedalOfDistinction,

  ArtifactId.FizbinOfMisfortune,

  ArtifactId.ThunderMaceOfDominion,
  ArtifactId.ArmoredGauntletsOfProtection,
  ArtifactId.DefenderHelmOfProtection,
  ArtifactId.GiantFlailOfDominion,
  ArtifactId.BallistaOfQuickness,
  ArtifactId.StealthShieldOfProtection,
  ArtifactId.DragonSwordOfDominion,
  ArtifactId.PowerAxeOfDominion,
  ArtifactId.DivineBreastplateOfProtection,

  ArtifactId.MinorScrollOfKnowledge,
  ArtifactId.MajorScrollOfKnowledge,
  ArtifactId.SuperiorScrollOfKnowledge,
  ArtifactId.ForemostScrollOfKnowledge,

  ArtifactId.EndlessSackOfGold,
  ArtifactId.EndlessBagOfGold,
  ArtifactId.EndlessPurseOfGold,

  ArtifactId.NomadBootsOfMobility,
  ArtifactId.TravelersBootsOfMobility,

  ArtifactId.LuckyRabbitsFoot,
  ArtifactId.GoldenHoreshoe,
  ArtifactId.GamblersLuckyCoin,
  ArtifactId.FourLeafClover,
  ArtifactId.TrueCompassOfMobility,
  ArtifactId.SailorsAstrolabeOfMobility,
];

export const artifacts = [
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

type ArtifactObjectData =
  ItemData &
  ItemObjectData &
  PickableObjectData &
  TradableObjectData;

const mapObjectDataDefaults: MapObjectData & TerrainRestrictedObjectData & CategorisedObjectData = {
  category: ObjectType.Artifact,
  grid: [
    true,
  ],
  height: 1,
  id: "",
  restrictedTerrains: landTerrains,
  width: 1,
};

export const artifactObjects = artifacts
  .sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id))
  .map<ArtifactObjectData>((a) => ({
    ...a,
    item: a.id,
    pickable: true,
    tradable: a.id !== ArtifactId.Spellbook,
  }))
  .map((a) => a.id === ArtifactId.Spellbook || isUltimateObjectData(a) ?
    a :
    ({
      ...mapObjectDataDefaults,
      ...a,
    }),
  );

export const randomArtifactObject: MapObjectData & TerrainRestrictedObjectData = {
  ...mapObjectDataDefaults,
  id: ObjectId.RandomArtifact,
};
