export enum SoundVolume {
  Off = 0,
  Volume1 = 1,
  Volume2 = 2,
  Volume3 = 3,
  Volume4 = 4,
  Volume5 = 5,
  Volume6 = 6,
  Volume7 = 7,
  Volume8 = 8,
  Volume9 = 9,
  On = 10,
}

export const changeVolume = (volume: SoundVolume) => (SoundVolume.On + volume) % (SoundVolume.On + 1);
