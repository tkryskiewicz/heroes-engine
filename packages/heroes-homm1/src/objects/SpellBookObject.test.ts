import { GameObject, GameObjectData } from "heroes-core";

import {
  addSpellBookSpells,
  initializeSpellBookObject,
  isSpellBookObject,
  isSpellBookObjectData,
  SpellBookObject,
  SpellBookObjectData,
  SpellBookSpell,
} from "./SpellBookObject";

describe("isSpellBookObjectData", () => {
  it("should return true when spell book object data", () => {
    const objectData: SpellBookObjectData = {
      id: "dataId",
      spellBook: true,
    };

    const result = isSpellBookObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not spell book object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isSpellBookObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("isSpellBookObject", () => {
  it("should return true when spell book object", () => {
    const object: SpellBookObject = {
      dataId: "dataId",
      id: "id",
      spells: [],
    };

    const result = isSpellBookObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not spell book object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isSpellBookObject(object);

    expect(result).toBe(false);
  });
});

describe("initializeSpellBookObject", () => {
  it("should initialize spell book object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = initializeSpellBookObject(object);

    const expected: SpellBookObject = {
      ...object,
      spells: [],
    };

    expect(result).toEqual(expected);
  });
});

describe("addSpellBookSpells", () => {
  it("should add spells to spell book", () => {
    const object: SpellBookObject = {
      dataId: "dataId",
      id: "id",
      spells: [],
    };

    const spell: SpellBookSpell = {
      charges: 0,
      id: "spell",
    };

    const result = addSpellBookSpells(object, [spell]);

    const expected: SpellBookObject = {
      ...object,
      spells: [
        spell,
      ],
    };

    expect(result).toEqual(expected);
  });
});
