import { HeroMapObjectDetails } from "heroes-homm1";

import {
  changeValue,
  ChangeValueAction,
  closeCreatureValueRangePrompt,
  CloseCreatureValueRangePromptAction,
  HeroMapObjectDetailsActionType,
  openCreatureValueRangePrompt,
  OpenCreatureValueRangePromptAction,
} from "./actions";

describe("heroMapObjectDetailsActions", () => {
  it("should create an action to change value", () => {
    const value: HeroMapObjectDetails = {
      alignment: "alignment",
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      artifacts: [
        "artifact",
      ],
      experience: 0,
      hero: "hero",
    };

    const result = changeValue(value);

    const expected: ChangeValueAction = {
      type: HeroMapObjectDetailsActionType.ChangeValue,
      value,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open creature value range prompt", () => {
    const result = openCreatureValueRangePrompt();

    const expected: OpenCreatureValueRangePromptAction = {
      type: HeroMapObjectDetailsActionType.OpenCreatureValueRangePrompt,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close creature value range prompt", () => {
    const result = closeCreatureValueRangePrompt();

    const expected: CloseCreatureValueRangePromptAction = {
      type: HeroMapObjectDetailsActionType.CloseCreatureValueRangePrompt,
    };

    expect(result).toEqual(expected);
  });
});
