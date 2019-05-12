import { defineMessages, Messages } from "react-intl";

import { EditorObjectType } from "heroes-homm1";

const editorObjectTypeMessages: Messages = defineMessages({
  [EditorObjectType.WaterObjects]: {
    defaultMessage: "Water Objs",
    id: "game.editor.objectType.waterObjects",
  },
  [EditorObjectType.GrassObjects]: {
    defaultMessage: "Grass Objs",
    id: "game.editor.objectType.grassObjects",
  },
  [EditorObjectType.SnowObjects]: {
    defaultMessage: "Snow Objs",
    id: "game.editor.objectType.snowObjects",
  },
  [EditorObjectType.SwampObjects]: {
    defaultMessage: "Swamp Objs",
    id: "game.editor.objectType.swampObjects",
  },
  [EditorObjectType.LavaObjects]: {
    defaultMessage: "Lava Objs",
    id: "game.editor.objectType.lavaObjects",
  },
  [EditorObjectType.DesertObjects]: {
    defaultMessage: "Desert Objs",
    id: "game.editor.objectType.desertObjects",
  },
  [EditorObjectType.DirtObjects]: {
    defaultMessage: "Dirt Objs",
    id: "game.editor.objectType.dirtObjects",
  },
  [EditorObjectType.Towns]: {
    defaultMessage: "Towns",
    id: "game.editor.objectType.towns",
  },
  [EditorObjectType.Monsters]: {
    defaultMessage: "Monsters",
    id: "game.editor.objectType.monsters",
  },
  [EditorObjectType.Artifacts]: {
    defaultMessage: "Artifacts",
    id: "game.editor.objectType.artifacts",
  },
  [EditorObjectType.Treasures]: {
    defaultMessage: "Treasures",
    id: "game.editor.objectType.treasures",
  },
});

export const getEditorObjectTypeNameMessage = (type: EditorObjectType) =>
  editorObjectTypeMessages[type];
