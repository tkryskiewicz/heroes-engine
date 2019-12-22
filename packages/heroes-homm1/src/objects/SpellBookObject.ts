import { GameObject, GameObjectData } from "heroes-core";

export interface SpellBookObjectData extends GameObjectData {
  readonly spellBook: true;
}

export const isSpellBookObjectData = (objectData: GameObjectData): objectData is SpellBookObjectData =>
  (objectData as SpellBookObjectData).spellBook === true;

export interface SpellBookSpell {
  readonly id: string;
  readonly charges: number;
}

export interface SpellBookObject extends GameObject {
  readonly spells: SpellBookSpell[];
}

export const isSpellBookObject = (object: GameObject): object is SpellBookObject =>
  (object as SpellBookObject).spells !== undefined;

export const initializeSpellBookObject = (object: GameObject): SpellBookObject => ({
  ...object,
  spells: [],
});

// TODO: merge spells
export const addSpellBookSpells = (object: SpellBookObject, spells: SpellBookSpell[]): SpellBookObject => ({
  ...object,
  spells: [
    ...object.spells,
    ...spells,
  ],
});
