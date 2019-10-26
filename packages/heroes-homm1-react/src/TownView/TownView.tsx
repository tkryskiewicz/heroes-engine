import React from "react";

import { Structure } from "heroes-core";
import {
  FarmStructureId,
  ForestStructureId,
  MountainsStructureId,
  PlainsStructureId,
  StructureId,
  TownId,
} from "heroes-homm1";

import { ScreenWidth } from "../core";
import { StructureView } from "../StructureView";

interface StructurePosition {
  readonly left: number;
  readonly top: number;
}

interface StructureInfo {
  readonly position: StructurePosition;
  readonly placeholderPosition?: StructurePosition;
}

const CommonStructuresInfo: { readonly [structure: string]: StructureInfo } = {
  [StructureId.MageGuild]: {
    position: {
      left: 297,
      top: 4,
    },
  },
  [StructureId.ThievesGuild]: {
    position: {
      left: 132,
      top: 81,
    },
  },
  [StructureId.Tavern]: {
    position: {
      left: 204,
      top: 74,
    },
  },
  [StructureId.Shipyard]: {
    position: {
      left: 0,
      top: 165,
    },
  },
  [StructureId.Well]: {
    position: {
      left: 174,
      top: 200,
    },
  },
};

const FarmStructuresInfo: { readonly [structure: string]: StructureInfo } = {
  [StructureId.Castle]: {
    // FIXME: fix position
    placeholderPosition: {
      left: 57,
      top: 32,
    },
    position: {
      left: 171,
      top: 0,
    },
  },
  ...CommonStructuresInfo,
  [FarmStructureId.ThatchedHut]: {
    position: {
      left: 81,
      top: 90,
    },
  },
  [FarmStructureId.ArcheryRange]: {
    position: {
      left: 0,
      top: 89,
    },
  },
  [FarmStructureId.Blacksmith]: {
    position: {
      left: 406,
      top: 124,
    },
  },
  [FarmStructureId.Armory]: {
    position: {
      left: 308,
      top: 144,
    },
  },
  [FarmStructureId.JoustingArena]: {
    position: {
      left: 388,
      top: 71,
    },
  },
  [FarmStructureId.Cathedral]: {
    position: {
      left: 556,
      top: 9,
    },
  },
};

const PlainsStructuresInfo: { readonly [structure: string]: StructureInfo } = {
  [StructureId.Castle]: {
    placeholderPosition: {
      left: 380,
      top: 57,
    },
    position: {
      left: 220,
      top: 0,
    },
  },
  ...CommonStructuresInfo,
  [PlainsStructureId.Hut]: {
    position: {
      left: 82,
      top: 72,
    },
  },
  [PlainsStructureId.StickHut]: {
    position: {
      left: 334,
      top: 126,
    },
  },
  [PlainsStructureId.Den]: {
    position: {
      left: 532,
      top: 30,
    },
  },
  [PlainsStructureId.Adobe]: {
    position: {
      left: 437,
      top: 82,
    },
  },
  [PlainsStructureId.Bridge]: {
    position: {
      left: 8,
      top: 102,
    },
  },
  [PlainsStructureId.Pyramid]: {
    position: {
      left: 478,
      top: 75,
    },
  },
};

const ForestStructuresInfo: { readonly [structure: string]: StructureInfo } = {
  [StructureId.Castle]: {
    placeholderPosition: {
      left: 378,
      top: 77,
    },
    position: {
      left: 268,
      top: 1,
    },
  },
  ...CommonStructuresInfo,
  [ForestStructureId.Treehouse]: {
    position: {
      left: 512,
      top: 24,
    },
  },
  [ForestStructureId.Cottage]: {
    position: {
      left: 83,
      top: 41,
    },
  },
  [ForestStructureId.ArcheryRange]: {
    position: {
      left: 10,
      top: 24,
    },
  },
  [ForestStructureId.Stonehenge]: {
    position: {
      left: 389,
      top: 107,
    },
  },
  [ForestStructureId.FencedMeadow]: {
    position: {
      left: 324,
      top: 24,
    },
  },
  [ForestStructureId.RedTower]: {
    position: {
      left: 506,
      top: 14,
    },
  },
};

const MountainsStructuresInfo: { readonly [structure: string]: StructureInfo } = {
  [StructureId.Castle]: {
    placeholderPosition: {
      left: 372,
      top: 84,
    },
    position: {
      left: 172,
      top: 0,
    },
  },
  ...CommonStructuresInfo,
  [MountainsStructureId.Cave]: {
    position: {
      left: 528,
      top: 9,
    },
  },
  [MountainsStructureId.Crypt]: {
    position: {
      left: 562,
      top: 106,
    },
  },
  [MountainsStructureId.Nest]: {
    position: {
      left: 423,
      top: 0,
    },
  },
  [MountainsStructureId.Maze]: {
    position: {
      left: 0,
      top: 0,
    },
  },
  [MountainsStructureId.Swamp]: {
    position: {
      left: 0,
      top: 116,
    },
  },
  [MountainsStructureId.BlackTower]: {
    position: {
      left: 44,
      top: 7,
    },
  },
};

const StructuresInfo: { readonly [town: string]: { readonly [structure: string]: StructureInfo } } = {
  [TownId.Farm]: FarmStructuresInfo,
  [TownId.Plains]: PlainsStructuresInfo,
  [TownId.Forest]: ForestStructuresInfo,
  [TownId.Mountains]: MountainsStructuresInfo,
};

interface Town {
  readonly id: string;
  readonly structures: Structure[];
}

export interface TownViewProps {
  readonly town: Town;
  readonly onStructureMouseEnter?: (structure: string) => void;
  readonly onStructureMouseLeave?: (structure: string) => void;
  readonly onStructureClick?: (structure: string) => void;
}

export class TownView extends React.Component<TownViewProps> {
  public render() {
    const { town } = this.props;

    const style: React.CSSProperties = {
      background: `url("assets/towns/${town.id}/background.jpg")`,
      height: 256,
      width: ScreenWidth,
    };

    return (
      <div style={style}>
        {town.structures.map((s) => this.renderStructure(town.id, s))}
      </div>
    );
  }

  private renderStructure(town: string, structure: Structure) {
    const structureInfo = StructuresInfo[town][structure.id];

    const hasPlaceholder = structureInfo.placeholderPosition !== undefined;

    if (!structure.isBuilt && !hasPlaceholder) {
      return;
    }

    const renderPlaceholder = !structure.isBuilt && hasPlaceholder;

    const style: React.CSSProperties = {
      position: "absolute",
      ...renderPlaceholder ? structureInfo.placeholderPosition : structureInfo.position,
    };

    return (
      <div
        key={structure.id}
        style={style}
      >
        <StructureView
          town={town}
          structure={structure.id}
          placeholder={renderPlaceholder}
          onMouseEnter={this.props.onStructureMouseEnter}
          onMouseLeave={this.props.onStructureMouseLeave}
          onClick={this.props.onStructureClick}
        />
      </div>
    );
  }
}
