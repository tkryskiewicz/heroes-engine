import * as React from "react";

import { Artifact } from "heroes-core";
import { ArtifactId, SpellBook } from "heroes-homm1";
import { NoSpellsPrompt } from "heroes-homm1-react";

import { SpellBookWindow } from "../SpellBookWindow";

export const getArtifactDetails = (
  artifact: Artifact,
  props: {
    readonly onStatusTextChange: (statusText: string) => void;
    readonly onCloseClick: () => void;
  },
): React.ReactNode | undefined => {
  switch (artifact.id) {
    case ArtifactId.Spellbook: {
      const spellBook = artifact as SpellBook;

      if (!spellBook.data.length) {
        return (
          <NoSpellsPrompt
            visible={true}
            onOkayClick={props.onCloseClick}
          />
        );
      }

      return (
        <SpellBookWindow
          visible={true}
          spells={spellBook.data}
          onStatusTextChange={props.onStatusTextChange}
          onExitClick={props.onCloseClick}
        />
      );
    }
  }
};
