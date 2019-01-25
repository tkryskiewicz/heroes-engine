import { Scenario } from "heroes-core";

export const campaignScenarios: Scenario[] = [
  {
    description: `
      You have established a foothold in the new land.
      This small island is fiercely contested by three other factions,
      all yving to capture the strategic town - Gateway.
      The town is located in the center of the island, and so dominates its surroundings
      that the other factions will surrender to the lord that captures it.
      Beware the dragon guardian of Gateway!
    `,
    name: "Gateway",
  },
  {
    description: `
      Your way to the mainland is blocked by the Archipelago of the Ancients,
      a series of four large islands, each held by a different lord.
      The opposition must all be subdued, and they are better led this time.
      Boats are a necessity - use them wisely!
    `,
    name: "The Archipelago",
  },
  {
    description: `
      Chaos. A maelstorm of combat plagues the land. The people suffer,
      but will rally behind the wielder of the Eye of Goros, an artifact that can heal the wounded land.
      It was buried and lost eons ago. The first lord to uncover the Eye will untie the people and
      conquer the land - but it lies in a vast territory with only pieces of a puzzle to guide the way.
    `,
    name: "The Wounded Land",
  },
  {
    description: `
      With the founding of a homeland, the other lords now take you seriously.
      All seek to dominate the central continent, and each is suspicious of the others.
      The territory is huge, the opposition distant. Resources are scarce and should be fiercely defended.
      You must be the last lord left to claim victory.
    `,
    name: "Free-for-All",
  },
  {
    description: `
      The land of the Knights, led by Lord Ironfist, is divided by the twisting Floodwater River.
      Ironfist is counting on the river to protect him. The only town suitable to boat-building
      lies upon the river far to the east.
      To defeat Ironfist, you must capture his home castle in the far northwest.
    `,
    name: "Castle Ironfist",
  },
  {
    description: `
      Far to the north, beyond the Trackless Desert, lies the Frozen Wastes.
      It is the homeland of Lord Slayer and his barbarian followers.
      Once the mountain pass has been breached by either side, barbarian raiders will stream south.
      The desert may harbor unknown allies who can aid you. Slayer's castle lies just northeast of the pass.
    `,
    name: "Castle Slayer",
  },
  {
    description: `
      Warned of your approach, the sorceress Queen Lamanda worked on a dreadful magic and
      sank the approach to the only port.
      You must find the teleport gate to assult the southwestern land and capture the port.
      The only landfall is far to the northeast. From there you must struggle through the forest
      maze to locate her castle in the extreme northwest.
    `,
    name: "Castle Lamanda",
  },
  {
    description: `
      The warlocks' castle lies shrouded in the somkey volcanic rift.
      To reach Lord Alamar's home castle in the extreme southeast, you must wander through the Minotaur Maze.
      The warlocks are overconfident and not expecting an attack, so sure are they that none can navigate the maze.
      Gargoyles have been set to dissuade invaders from the true path.
    `,
    name: "Castle Alamar",
  },
  {
    description: `
      Final victory lies within your grasp - but the defeated warlords have pooled their last resources
      and have banded together against you.
      If you can bend the dragons to your will and force them to side with you,
      all the other warlords will be yours to rule.
      Capture the Dragon Citadel on the central island and victory is yours!
    `,
    name: "King-of-the-Hill",
  },
];
