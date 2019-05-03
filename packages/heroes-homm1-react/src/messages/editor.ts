import { defineMessages, Messages } from "react-intl";

import { EditorObjectType } from "heroes-homm1";

// FIXME: remove numbers
const editorObjectTypeMessages: Messages = defineMessages({
  [EditorObjectType.WaterObjects]: {
    defaultMessage: "1 - Water Objs",
    id: "game.editor.objectType.waterObjects",
  },
  [EditorObjectType.GrassObjects]: {
    defaultMessage: "2 - Grass Objs",
    id: "game.editor.objectType.grassObjects",
  },
  [EditorObjectType.SnowObjects]: {
    defaultMessage: "3 - Snow Objs",
    id: "game.editor.objectType.snowObjects",
  },
  [EditorObjectType.SwampObjects]: {
    defaultMessage: "4 - Swamp Objs",
    id: "game.editor.objectType.swampObjects",
  },
  [EditorObjectType.LavaObjects]: {
    defaultMessage: "5 - Lava Objs",
    id: "game.editor.objectType.lavaObjects",
  },
  [EditorObjectType.DesertObjects]: {
    defaultMessage: "6 - Desert Objs",
    id: "game.editor.objectType.desertObjects",
  },
  [EditorObjectType.DirtObjects]: {
    defaultMessage: "7 - Dirt Objs",
    id: "game.editor.objectType.dirtObjects",
  },
  [EditorObjectType.Towns]: {
    defaultMessage: "8 - Towns",
    id: "game.editor.objectType.towns",
  },
  [EditorObjectType.Monsters]: {
    defaultMessage: "9 - Monsters",
    id: "game.editor.objectType.monsters",
  },
  [EditorObjectType.Artifacts]: {
    defaultMessage: "10 - Artifacts",
    id: "game.editor.objectType.artifacts",
  },
  [EditorObjectType.Treasures]: {
    defaultMessage: "11 - Treasures",
    id: "game.editor.objectType.treasures",
  },
});

export const getEditorObjectTypeNameMessage = (type: EditorObjectType) =>
  editorObjectTypeMessages[type];
