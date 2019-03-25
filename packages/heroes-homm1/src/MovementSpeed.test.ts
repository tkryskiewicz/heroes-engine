import { changeMovementSpeed, MovementSpeed } from "./MovementSpeed";

describe("changeMovementSpeed", () => {
  it("should return trot when walk", () => {
    const result = changeMovementSpeed(MovementSpeed.Walk);

    expect(result).toEqual(MovementSpeed.Trot);
  });

  it("should return canter when trot", () => {
    const result = changeMovementSpeed(MovementSpeed.Trot);

    expect(result).toEqual(MovementSpeed.Canter);
  });

  it("should return gallop when canter", () => {
    const result = changeMovementSpeed(MovementSpeed.Canter);

    expect(result).toEqual(MovementSpeed.Gallop);
  });

  it("should return jump when gallop", () => {
    const result = changeMovementSpeed(MovementSpeed.Gallop);

    expect(result).toEqual(MovementSpeed.Jump);
  });

  it("should return walk when jump", () => {
    const result = changeMovementSpeed(MovementSpeed.Jump);

    expect(result).toEqual(MovementSpeed.Walk);
  });
});
