import * as React from "react";

import { CastleOptionsWindowProps } from "heroes-homm1-react";

import { BuildStructureWindow } from "../BuildStructureWindow";

export const getOptionDetails: CastleOptionsWindowProps["getOptionDetails"] = (town, option, props) => {
  const dwellingCreature = option.dwelling ?
    option.dwelling.creature :
    undefined;

  return (
    <BuildStructureWindow
      visible={true}
      town={town}
      structure={option.id}
      dwellingCreature={dwellingCreature}
      cost={option.cost}
      canBuild={true}
      onCancelClick={props.onCloseClick}
    />
  );
};
