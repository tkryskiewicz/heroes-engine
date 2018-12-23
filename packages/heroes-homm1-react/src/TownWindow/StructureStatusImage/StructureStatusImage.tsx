import * as React from "react";

import { StructureStatus } from "heroes-homm1";

import "./StructureStatusImage.scss";

import { StructureIcon } from "../../StructureIcon";
import { structureStatusImages } from "./assets";

export interface StructureStatusImageProps {
  town: string;
  structure: string;
  status: StructureStatus;
}

export class StructureStatusImage extends React.Component<StructureStatusImageProps> {
  public render() {
    return (
      <div>
        <StructureIcon
          town={this.props.town}
          structure={this.props.structure}
        />
        {this.renderStatusIcon(this.props.status)}
      </div>
    );
  }

  private renderStatusIcon(status: StructureStatus) {
    return (
      <img
        className="structure-status-image-status-icon"
        src={structureStatusImages[status]}
      />
    );
  }
}
