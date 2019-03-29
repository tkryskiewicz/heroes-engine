import * as React from "react";

interface Props {
  readonly resource: string;
}

export class ResourceMapObject extends React.Component<Props> {
  public render() {
    return (
      <img src={`/assets/resources/${this.props.resource}/mapObject.png`} />
    );
  }
}

export {
  Props as ResourceMapObjectProps,
};
