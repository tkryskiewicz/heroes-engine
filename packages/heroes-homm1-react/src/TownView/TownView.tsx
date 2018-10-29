import * as React from "react";

import { Structure } from "heroes-core";
import { StructureId, TownId } from "heroes-homm1";

const CommonStructures: string[] = [
  StructureId.MageGuild,
  StructureId.ThievesGuild,
  StructureId.Tavern,
  StructureId.Shipyard,
  StructureId.Well,
];

const isCommonStructure = (structure: string) =>
  CommonStructures.indexOf(structure) !== -1;

interface StructureInfo {
  position: {
    left: number;
    top: number;
  };
}

const CommonStructuresInfo: { [structure: string]: StructureInfo } = {
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

const FarmStructuresInfo: { [structure: string]: StructureInfo } = {
  [StructureId.Tent]: {
    // FIXME: fix position
    position: {
      left: 57,
      top: 32,
    },
  },
  [StructureId.Castle]: {
    position: {
      left: 171,
      top: 0,
    },
  },
  ...CommonStructuresInfo,
};

const PlainsStructuresInfo: { [structure: string]: StructureInfo } = {
  [StructureId.Tent]: {
    position: {
      left: 380,
      top: 57,
    },
  },
  [StructureId.Castle]: {
    position: {
      left: 220,
      top: 0,
    },
  },
  ...CommonStructuresInfo,
};

const ForestStructuresInfo: { [structure: string]: StructureInfo } = {
  [StructureId.Tent]: {
    position: {
      left: 378,
      top: 77,
    },
  },
  [StructureId.Castle]: {
    position: {
      left: 268,
      top: 1,
    },
  },
  ...CommonStructuresInfo,
};

const MountainsStructuresInfo: { [structure: string]: StructureInfo } = {
  [StructureId.Tent]: {
    position: {
      left: 372,
      top: 84,
    },
  },
  [StructureId.Castle]: {
    position: {
      left: 172,
      top: 0,
    },
  },
  ...CommonStructuresInfo,
};

const StructuresInfo: { [town: string]: { [structure: string]: StructureInfo } } = {
  [TownId.Farm]: FarmStructuresInfo,
  [TownId.Plains]: PlainsStructuresInfo,
  [TownId.Forest]: ForestStructuresInfo,
  [TownId.Mountains]: MountainsStructuresInfo,
};

export interface TownViewProps {
  town: {
    id: string;
    structures: Structure[];
  };
}

export class TownView extends React.Component<TownViewProps> {
  public render() {
    const { town } = this.props;

    const style: React.CSSProperties = {
      background: `url('assets/towns/${town.id}/background.jpg')`,
      height: 256,
      width: 640,
    };

    return (
      <div style={style}>
        {town.structures.map((s) => this.renderStructure(town.id, s))}
      </div>
    );
  }

  private renderStructure(town: string, structure: Structure) {
    const structureInfo = StructuresInfo[town][structure.id];

    const style: React.CSSProperties = {
      position: "absolute",
      ...structureInfo.position,
    };

    const townPath = isCommonStructure(structure.id) ? "common" : town;

    return (
      <img
        style={style}
        key={structure.id}
        src={`assets/towns/${townPath}/structures/${structure.id}/image.png`}
      />
    );
  }
}
