// NOTE: can this be turned into a function?
const experienceLevels: { readonly [level: number]: number } = {
  1: 0,
  2: 1000,
  3: 2000,
  4: 3200,
  5: 4500,
  6: 6000,
  7: 7700,
  8: 9000,
  9: 11000,
  10: 13200,
  11: 15500,
  12: 18500,
  13: 22101,
  14: 26421,
  15: 31605,
  16: 37825,
  17: 45289,
  18: 54245,
  19: 64992,
  20: 77888,
  21: 93363,
  22: 111933,
  23: 134217,
  24: 160957,
  25: 193045,
  26: 231550,
  27: 277756,
  28: 333203,
  29: 399739,
  30: 479582,
  31: 575393,
  32: 690366,
  33: 828333,
  34: 993893,
  35: 1192565,
  36: 1430971,
  37: 1717058,
  38: 2060362,
  39: 2472326,
  40: 2966682,
  41: 3559909,
  42: 4271781,
  43: 5126027,
  44: 6151122,
  45: 7381236,
  46: 8857372,
  47: 10628735,
  48: 12754370,
  49: 15305132,
  50: 18366046,
  51: 22039142,
  52: 26446857,
  53: 31736115,
  54: 38083224,
  55: 45699754,
  56: 54839590,
  57: 65807396,
  58: 78968756,
  59: 94762391,
  60: 113714753,
  61: 136457587,
  62: 163748987,
  63: 196498667,
  64: 235798283,
  65: 282957822,
  66: 339549268,
  67: 407459003,
  68: 488950685,
  69: 586740703,
  70: 704088724,
  71: 844906349,
  72: 1013887499,
  73: 1216664879,
  74: 1459997735,
  75: 1751997162,
};

export const getCurrentLevel = (experience: number): number => {
  if (experience < 0) {
    throw new Error("Experience must be a non-negative value");
  }

  const levels = Object.keys(experienceLevels).map(Number);

  const maxLevel = levels[levels.length - 1];

  const level = levels.find((l) => experience >= experienceLevels[l] && experience < experienceLevels[l + 1]);

  return level || maxLevel;
};

export const getNextLevelExperience = (experience: number): number | undefined =>
  experienceLevels[getCurrentLevel(experience) + 1];
