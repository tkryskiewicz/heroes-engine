import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { resource } from "../../stories";
import { ResourceMapObject, ResourceMapObjectProps } from "./ResourceMapObject";

const sizeOptions: { readonly [s: string]: ResourceMapObjectProps["size"] } = {
  Large: "large",
  Small: "small",
};

storiesOf("map/ResourceMapObject", module)
  .add("default", () => (
    <ResourceMapObject
      size={select("Size", sizeOptions, "large")}
      resource={resource("Resource")}
    />
  ));
