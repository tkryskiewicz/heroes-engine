import { nextOption, previousOption } from "./util";

describe("previousOption", () => {
  it("should return last option when first option selected", () => {
    const options = [
      "optionA",
      "optionB",
    ];

    const result = previousOption(options, "optionA");

    expect(result).toBe("optionB");
  });

  it("should return previous option", () => {
    const options = [
      "optionA",
      "optionB",
    ];

    const result = previousOption(options, "optionB");

    expect(result).toBe("optionA");
  });
});

describe("nextOption", () => {
  it("should return next option", () => {
    const options = [
      "optionA",
      "optionB",
    ];

    const result = nextOption(options, "optionA");

    expect(result).toBe("optionB");
  });

  it("should return first option when last option selected", () => {
    const options = [
      "optionA",
      "optionB",
    ];

    const result = nextOption(options, "optionB");

    expect(result).toBe("optionA");
  });
});
