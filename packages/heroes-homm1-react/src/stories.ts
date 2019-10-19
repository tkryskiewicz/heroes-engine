import { number, select } from "@storybook/addon-knobs";

import { CombatSide, GameDate, MapObjectOrientation, Resources } from "heroes-core";
import {
  AlignmentId,
  ArmySize,
  ArtifactId,
  CastleOptionStatus,
  CreatureId,
  EditorOption,
  FarmStructureId,
  ForestStructureId,
  GameDifficulty,
  GameOption,
  GameType,
  HeroClass,
  HeroId,
  LuckType,
  MapObjectId,
  MapObjectType,
  MoraleType,
  MountainsStructureId,
  MovementSpeed,
  OpponentSetting,
  PlainsStructureId,
  ResourceId,
  resources,
  ScenarioDifficulty,
  ScenarioSize,
  Skill,
  SoundVolume,
  SpellId,
  SpellType,
  StructureId,
  TerrainTransition,
  TerrainType,
  TownId,
} from "heroes-homm1";

export const gameOption = (name: string) =>
  select<GameOption>(name, Object.values(GameOption), GameOption.NewGame);

export const gameType = (name: string) =>
  select<GameType>(name, Object.values(GameType), GameType.Standard);

export const gameDifficulty = (name: string) =>
  select<GameDifficulty>(name, Object.values(GameDifficulty), GameDifficulty.Easy);

export const alignment = (name: string) =>
  select<AlignmentId>(name, Object.values(AlignmentId), AlignmentId.Red);

export const resource = (name: string) =>
  select<ResourceId>(name, Object.values(ResourceId), ResourceId.Gold);

export const mine = (name: string) =>
  select<MapObjectId>(name, Object.values(resources).map((r) => r.mine) as MapObjectId[], MapObjectId.OreMine);

export const heroClass = (name: string) =>
  select<HeroClass>(name, Object.values(HeroClass), HeroClass.Knight);

export const skill = (name: string) =>
  select<Skill>(name, Object.values(Skill), Skill.Attack);

export const skillValue = (name: string) => number(name, 0, { range: true, min: 0, max: 999, step: 1 });

export const skills = (name: string) => ({
  [Skill.Attack]: skillValue(`${name} / Attack`),
  [Skill.Defense]: skillValue(`${name} / Defense`),
  [Skill.SpellPower]: skillValue(`${name} / Spell Power`),
  [Skill.Knowledge]: skillValue(`${name} / Knowledge`),
});

export const morale = (name: string) => number(name, 0, { range: true, min: -3, max: 3, step: 1 });

export const moraleType = (name: string) =>
  select<MoraleType>(name, Object.values(MoraleType), MoraleType.Neutral);

export const luck = (name: string) => number(name, 0, { range: true, min: -3, max: 3, step: 1 });

export const luckType = (name: string) =>
  select<LuckType>(name, Object.values(LuckType), LuckType.Neutral);

export const troopIndex = (name: string) => number(name, 0, { range: true, min: 0, max: ArmySize - 1, step: 1 });

export const hero = (name: string) =>
  select<HeroId>(name, Object.values(HeroId), HeroId.LordKilburn);

export const town = (name: string) =>
  select<TownId>(name, Object.values(TownId), TownId.Farm);

const structureOptions: string[] = [
  ...Object.values(StructureId),
  ...Object.values(FarmStructureId),
  ...Object.values(PlainsStructureId),
  ...Object.values(ForestStructureId),
  ...Object.values(MountainsStructureId),
];

export const structure = (name: string) =>
  select(name, structureOptions, StructureId.Castle);

export const castleOptionStatus = (name: string) =>
  select<CastleOptionStatus>(name, Object.values(CastleOptionStatus), CastleOptionStatus.Built);

export const creature = (name: string) =>
  select<CreatureId>(name, Object.values(CreatureId), CreatureId.Peasant);

export const soundVolume = (name: string) =>
  number(name, SoundVolume.On, {
    max: SoundVolume.On,
    min: SoundVolume.Off,
    range: true,
    step: 1,
  });

export const movementSpeed = (name: string) =>
  select<MovementSpeed>(name, Object.values(MovementSpeed), MovementSpeed.Walk);

export const opponentSetting = (name: string) =>
  select<OpponentSetting>(name, Object.values(OpponentSetting), OpponentSetting.Dumb);

export const artifact = (name: string) =>
  select<ArtifactId>(name, Object.values(ArtifactId), ArtifactId.ThunderMaceOfDominion);

export const terrainType = (name: string) =>
  select<TerrainType>(name, Object.values(TerrainType), TerrainType.Water);

export const combatSide = (name: string) =>
  select<CombatSide>(name, Object.values(CombatSide), CombatSide.Attacker);

export const scenarioSize = (name: string) =>
  select<ScenarioSize>(name, Object.values(ScenarioSize), ScenarioSize.Small);

export const scenarioDifficulty = (name: string) =>
  select<ScenarioDifficulty>(name, Object.values(ScenarioDifficulty), ScenarioDifficulty.Easy);

export const spellType = (name: string) =>
  select<SpellType>(name, Object.values(SpellType), SpellType.Combat);

export const spell = (name: string) =>
  select<SpellId>(name, Object.values(SpellId), SpellId.Bless);

export const mapObject = (name: string) =>
  select<MapObjectId>(name, Object.values(MapObjectId), MapObjectId.Buoy);

export const mapObjectSize = (name: string) =>
  select(name, ["large", "small"], "large");

export const mapObjectOrientation = (name: string) =>
  select<MapObjectOrientation>(name, Object.values(MapObjectOrientation), MapObjectOrientation.North);

const dwellingObjectOptions: MapObjectId[] = [
  MapObjectId.Cottage,
  MapObjectId.Hut,
  MapObjectId.ThatchedHut,
];

export const dwellingObject = (name: string) =>
  select(name, dwellingObjectOptions, MapObjectId.Cottage);

export const editorOption = (name: string) =>
  select<EditorOption>(name, Object.values(EditorOption), EditorOption.Terrains);

export const mapObjectType = (name: string) =>
  select<MapObjectType>(name, Object.values(MapObjectType), MapObjectType.Water);

export const terrainTransition = (name: string) =>
  select<TerrainTransition>(name, Object.values(TerrainTransition), TerrainTransition.None);

export const gameDate = (name: string): GameDate => ({
  day: number(`${name} / Day`, 1, { range: true, min: 1, max: 7, step: 1 }),
  month: number(`${name} / Month`, 1, { range: true, min: 1, max: 99, step: 1 }),
  week: number(`${name} / Week`, 1, { range: true, min: 1, max: 4, step: 1 }),
});

const resourceAmount = (res: ResourceId, name: string, value: number = 0) =>
  number(name, value, { range: true, min: 0, max: res !== ResourceId.Gold ? 999 : 999999, step: 1 });

export const resourceAmounts = (name: string, value: Resources = {}): Resources => ({
  [ResourceId.Wood]: resourceAmount(ResourceId.Wood, `${name} / Wood`, value[ResourceId.Wood]),
  [ResourceId.Mercury]: resourceAmount(ResourceId.Mercury, `${name} / Mercury`, value[ResourceId.Mercury]),
  [ResourceId.Ore]: resourceAmount(ResourceId.Ore, `${name} / Ore`, value[ResourceId.Ore]),
  [ResourceId.Sulfur]: resourceAmount(ResourceId.Sulfur, `${name} / Sulfur`, value[ResourceId.Sulfur]),
  [ResourceId.Crystal]: resourceAmount(ResourceId.Crystal, `${name} / Crystal`, value[ResourceId.Crystal]),
  [ResourceId.Gems]: resourceAmount(ResourceId.Gems, `${name} / Gems`, value[ResourceId.Gems]),
  [ResourceId.Gold]: resourceAmount(ResourceId.Gold, `${name} / Gold`, value[ResourceId.Gold]),
});
