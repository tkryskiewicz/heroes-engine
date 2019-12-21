import { CampaignId } from "./campaigns";
import { CreatureId } from "./data";
import { GameType } from "./GameType";

export interface HighScores {
  readonly [GameType.Campaign]: CampaignGameScore[];
  readonly [GameType.Standard]: StandardGameScore[];
}

export interface CampaignGameScore {
  readonly playerName: string;
  readonly campaign: string;
  readonly daysCount: number;
}

export const initialCampaignGameScores: CampaignGameScore[] = [
  {
    campaign: CampaignId.LordIronfist,
    daysCount: 500,
    playerName: "Maximus",
  },
  {
    campaign: CampaignId.LordSlayer,
    daysCount: 700,
    playerName: "Antoine",
  },
  {
    campaign: CampaignId.QueenLamanda,
    daysCount: 900,
    playerName: "Astra",
  },
  {
    campaign: CampaignId.LordAlamar,
    daysCount: 1200,
    playerName: "Agar",
  },
  {
    campaign: CampaignId.QueenLamanda,
    daysCount: 1500,
    playerName: "Vatawna",
  },
  {
    campaign: CampaignId.LordAlamar,
    daysCount: 1700,
    playerName: "Vesper",
  },
  {
    campaign: CampaignId.LordIronfist,
    daysCount: 2000,
    playerName: "Ambrose",
  },
  {
    campaign: CampaignId.QueenLamanda,
    daysCount: 2400,
    playerName: "Troyan",
  },
  {
    campaign: CampaignId.LordSlayer,
    daysCount: 3200,
    playerName: "Jojosh", // TODO: shoould be JoJosh??
  },
  {
    campaign: CampaignId.LordAlamar,
    daysCount: 4400,
    playerName: "Wrathmont",
  },
];

const campaignGameRatings: { readonly [days: number]: string } = {
  500: CreatureId.Paladin,
  700: CreatureId.Ghost,
  900: CreatureId.Druid,
  1200: CreatureId.Griffin,
  1500: CreatureId.Wolf,
  1700: CreatureId.Dwarf,
  2000: CreatureId.Gargoyle,
  2400: CreatureId.Orc,
  3200: CreatureId.Sprite,
  4400: CreatureId.Peasant,
};

export const getCampaignGameRating = (days: number) => {
  const scores = Object.keys(campaignGameRatings)
    .map(Number)
    .filter((s) => days <= s).sort((a, b) => a - b);

  return campaignGameRatings[scores[0]] || CreatureId.Peasant;
};

export interface StandardGameScore {
  readonly playerName: string;
  readonly scenario: string;
  readonly score: number;
}

export const initialStandardGameScores: StandardGameScore[] = [
  {
    playerName: "Lord Killburn",
    scenario: "The Jester",
    score: 130,
  },
  {
    playerName: "Tsabu",
    scenario: "Two if by Sea",
    score: 110,
  },
  {
    playerName: "Sir Galant",
    scenario: "Knight's Quest",
    score: 90,
  },
  {
    playerName: "Thundax",
    scenario: "Crossroads",
    score: 70,
  },
  {
    playerName: "Lord Haart",
    scenario: "Shangri-La",
    score: 60,
  },
  {
    playerName: "Ariel",
    scenario: "River's End",
    score: 50,
  },
  {
    playerName: "Rebecca",
    scenario: "Pathways",
    score: 40,
  },
  {
    playerName: "Sandro",
    scenario: "Squirrel Lake",
    score: 30,
  },
  {
    playerName: "Crodo",
    scenario: "Continentia",
    score: 20,
  },
  {
    playerName: "Barok",
    scenario: "The Claw",
    score: 10,
  },
];

export const initialHighScores: HighScores = {
  [GameType.Standard]: initialStandardGameScores,
  [GameType.Campaign]: initialCampaignGameScores,
};

const standardGameRatings: { readonly [score: number]: string } = {
  130: CreatureId.Cavalry,
  110: CreatureId.Ogre,
  90: CreatureId.Elf,
  70: CreatureId.Wolf,
  60: CreatureId.Dwarf,
  50: CreatureId.Gargoyle,
  40: CreatureId.Orc,
  30: CreatureId.Rogue,
  20: CreatureId.Sprite,
  10: CreatureId.Goblin,
};

export const getStandardGameRating = (score: number) => {
  const scores = Object.keys(standardGameRatings)
    .map(Number)
    .filter((s) => score >= Number(s)).sort((a, b) => b - a);

  return standardGameRatings[scores[0]] || CreatureId.Goblin;
};
