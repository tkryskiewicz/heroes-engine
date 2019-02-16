import * as React from "react";

import { Artifact } from "heroes-core";
import { ArtifactId, SpellBook } from "heroes-homm1";
import { ArtifactDetailsPrompt, NoSpellsPrompt } from "heroes-homm1-react";

import { SpellBookWindow } from "../SpellBookWindow";

export const getArtifactDetails = (
  artifact: Artifact,
  props: {
    readonly onStatusTextChange: (statusText: string) => void;
    readonly onCloseClick: () => void;
  },
): React.ReactNode => {
  switch (artifact.id) {
    case ArtifactId.Spellbook: {
      const spellBook = artifact as SpellBook;

      if (!spellBook.data.spells.length) {
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
          spells={spellBook.data.spells}
          onStatusTextChange={props.onStatusTextChange}
          onExitClick={props.onCloseClick}
        />
      );
    }
    default: {
      return (
        <ArtifactDetailsPrompt
          artifact={artifact.id}
          visible={true}
          onConfirmClick={props.onCloseClick}
        />
      );
    }
  }
};
