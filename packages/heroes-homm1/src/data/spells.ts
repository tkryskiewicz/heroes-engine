import { Spell } from "../Spell";
import { SpellId } from "./SpellId";
import { SpellType } from "./SpellType";

export const spells: Spell[] = [
  {
    id: SpellId.Antimagic,
    level: 2,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Armageddon,
    level: 4,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Berserk,
    level: 3,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Bless,
    level: 1,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Blind,
    level: 2,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Curse,
    level: 1,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Cure,
    level: 2,
    type: SpellType.Combat,
  },
  {
    id: SpellId.DimensionDoor,
    level: 4,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.Dispel,
    level: 1,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Fireball,
    level: 3,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Haste,
    level: 2,
    type: SpellType.Combat,
  },
  {
    id: SpellId.IdentifyHero,
    level: 3,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.Lightning,
    level: 2,
    type: SpellType.Combat,
  },
  {
    id: SpellId.MeteorShower,
    level: 4,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Paralyze,
    level: 3,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Protection,
    level: 1,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Resurrect,
    level: 4,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Slow,
    level: 1,
    type: SpellType.Combat,
  },
  {
    id: SpellId.Storm,
    level: 3,
    type: SpellType.Combat,
  },
  {
    id: SpellId.SummonBoat,
    level: 2,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.Teleport,
    level: 3,
    type: SpellType.Combat,
  },
  {
    id: SpellId.TownGate,
    level: 4,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.TurnUndead,
    level: 2,
    type: SpellType.Combat,
  },
  {
    id: SpellId.ViewAll,
    level: 4,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.ViewArtifacts,
    level: 2,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.ViewHeroes,
    level: 3,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.ViewMines,
    level: 1,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.ViewResources,
    level: 1,
    type: SpellType.Adventure,
  },
  {
    id: SpellId.ViewTowns,
    level: 3,
    type: SpellType.Adventure,
  },
];
