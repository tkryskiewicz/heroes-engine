import { SpellType } from "./SpellType";

export enum SpellId {
  Antimagic = "antimagic",
  Armageddon = "armageddon",
  Berserk = "berserk",
  Bless = "bless",
  Blind = "blind",
  Curse = "curse",
  Cure = "cure",
  DimensionDoor = "dimension-door",
  Dispel = "dispel",
  Fireball = "fireball",
  Haste = "haste",
  IdentifyHero = "identify-hero",
  Lightning = "lightning",
  MeteorShower = "meteor-shower",
  Paralyze = "paralyze",
  Protection = "protection",
  Resurrect = "resurrect",
  Slow = "slow",
  Storm = "storm",
  SummonBoat = "summon-boat",
  Teleport = "teleport",
  TownGate = "town-gate",
  TurnUndead = "turn-undead",
  ViewAll = "view-all",
  ViewArtifacts = "view-artifacts",
  ViewHeroes = "view-heroes",
  ViewMines = "view-mines",
  ViewResources = "view-resources",
  ViewTowns = "view-towns",
}

export const spells = [
  {
    id: SpellId.Antimagic,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Armageddon,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Berserk,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Bless,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Blind,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Curse,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Cure,
    type: SpellType.Combat,
  },
  {
    id: SpellId.DimensionDoor,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.Dispel,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Fireball,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Haste,
    type: SpellType.Combat,
  },
  {
    id: SpellId.IdentifyHero,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.Lightning,
    type: SpellType.Combat,
  },
  {
    id: SpellId.MeteorShower,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Paralyze,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Protection,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Resurrect,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Slow,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Storm,
    type: SpellType.Combat,
  },
  {
    id: SpellId.SummonBoat,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.Teleport,
    type: SpellType.Combat,
  },
  {
    id: SpellId.TownGate,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.TurnUndead,
    type: SpellType.Combat,
  },
  {
    id: SpellId.ViewAll,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.ViewArtifacts,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.ViewHeroes,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.ViewMines,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.ViewResources,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.ViewTowns,
    type: SpellType.Adventure,
  },
];
