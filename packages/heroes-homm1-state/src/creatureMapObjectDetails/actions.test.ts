import {
  changeCount,
  ChangeCountAction,
  closeCountValueRangePrompt,
  CloseCountValueRangePromptAction,
  CreatureMapObjectDetailsActionType,
  openCountValueRangePrompt,
  OpenCountValueRangePromptAction,
} from "./actions";

describe("creatureMapObjectDetailsActions", () => {
  it("should create an action to change count", () => {
    const result = changeCount(1);

    const expected: ChangeCountAction = {
      type: CreatureMapObjectDetailsActionType.ChangeCount,
      value: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open count value range prompt", () => {
    const result = openCountValueRangePrompt();

    const expected: OpenCountValueRangePromptAction = {
      type: CreatureMapObjectDetailsActionType.OpenCountValueRangePrompt,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close count value range prompt", () => {
    const result = closeCountValueRangePrompt();

    const expected: CloseCountValueRangePromptAction = {
      type: CreatureMapObjectDetailsActionType.CloseCountValueRangePrompt,
    };

    expect(result).toEqual(expected);
  });
});
