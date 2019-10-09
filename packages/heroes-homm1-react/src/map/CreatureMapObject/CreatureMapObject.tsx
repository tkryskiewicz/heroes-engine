import React from "react";

import { CreatureIcon } from "../../base";

export interface CreatureMapObjectProps {
  readonly size: "large" | "small";
  readonly creature: string;
}

// FIXME
export class CreatureMapObject extends React.Component<CreatureMapObjectProps> {
  public render() {
    return (
      <CreatureIcon
        size={this.props.size === "large" ? "small" : "tiny"}
        creature={this.props.creature}
      />
    );
  }
}
