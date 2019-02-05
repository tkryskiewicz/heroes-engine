import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Artifact } from "heroes-core";
import { ArtifactId, SpellBook } from "heroes-homm1";

import { GameModal } from "../base";
import { GameText } from "../core";
import { SpellBookWindow } from "../SpellBookWindow";
import { messages } from "./messages";

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
          <GameModal
            type="okay"
            visible={true}
            onConfirmClick={props.onCloseClick}
          >
            <GameText size="large">
              <FormattedMessage {...messages.noSpells} />
            </GameText>
          </GameModal>
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
