import React from "react";

import { Item } from "heroes-core";
import { isSpellBookObject } from "heroes-homm1";
import { ArtifactDetailsPrompt, NoSpellsPrompt } from "heroes-homm1-react";

import { SpellBookWindow } from "../SpellBookWindow";

export const getArtifactDetails = (
  object: Item,
  props: {
    readonly onStatusTextChange: (statusText: string) => void;
    readonly onCloseClick: () => void;
  },
): React.ReactNode => {
  if (isSpellBookObject(object)) {
    if (!object.spells.length) {
      return (
        <NoSpellsPrompt
          visible={true}
          onConfirmClick={props.onCloseClick}
        />
      );
    }

    return (
      <SpellBookWindow
        visible={true}
        spells={object.spells}
        onStatusTextChange={props.onStatusTextChange}
        onExitClick={props.onCloseClick}
      />
    );
  }

  return (
    <ArtifactDetailsPrompt
      artifact={object.id}
      visible={true}
      onConfirmClick={props.onCloseClick}
    />
  );
};
