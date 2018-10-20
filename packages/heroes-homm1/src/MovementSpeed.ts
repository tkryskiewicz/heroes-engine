export enum MovementSpeed {
  Walk = "walk",
  Trot = "trot",
  Canter = "canter",
  Gallop = "gallop",
  Jump = "jump",
}

// TODO: find a way to get rid of this?
const MovementSpeeds = [
  MovementSpeed.Walk,
  MovementSpeed.Trot,
  MovementSpeed.Canter,
  MovementSpeed.Gallop,
  MovementSpeed.Jump,
];

export const changeMovementSpeed = (value: MovementSpeed): MovementSpeed =>
  MovementSpeeds[(MovementSpeeds.indexOf(value) + 1) % MovementSpeeds.length];
