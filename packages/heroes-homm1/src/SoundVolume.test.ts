import { changeVolume, SoundVolume } from "./SoundVolume";

describe("changeVolume", () => {
  it("should return on when off", () => {
    const result = changeVolume(SoundVolume.Off);

    expect(result).toBe(SoundVolume.On);
  });

  it("should return off when 1", () => {
    const result = changeVolume(SoundVolume.Volume1);

    expect(result).toBe(SoundVolume.Off);
  });

  it("should return 9 when on", () => {
    const result = changeVolume(SoundVolume.On);

    expect(result).toBe(SoundVolume.Volume9);
  });
});
