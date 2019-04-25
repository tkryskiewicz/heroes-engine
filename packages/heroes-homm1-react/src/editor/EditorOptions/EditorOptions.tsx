import * as React from "react";

import { EditorOption } from "heroes-homm1";

import * as styles from "./EditorOptions.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";

export interface EditorOptionsProps {
  readonly selectedOption: EditorOption;
  readonly onSelectedOptionChange: (value: EditorOption) => void;
}

export class EditorOptions extends React.Component<EditorOptionsProps> {
  public static readonly defaultProps: Pick<EditorOptionsProps, "onSelectedOptionChange"> = {
    onSelectedOptionChange: () => undefined,
  };

  public render() {
    const { selectedOption } = this.props;

    return (
      <div className={styles.root}>
        <ImageButton
          className={styles.button}
          images={buttonImages.terrains}
          disabled={selectedOption === EditorOption.Terrains}
          onClick={this.onTerrainsClick}
        />
        <ImageButton
          className={styles.button}
          images={buttonImages.objects}
          disabled={selectedOption === EditorOption.Objects}
          onClick={this.onObjectsClick}
        />
        <ImageButton
          className={styles.button}
          images={buttonImages.details}
          disabled={selectedOption === EditorOption.Details}
          onClick={this.onDetailsClick}
        />
        <ImageButton
          className={styles.button}
          images={buttonImages.erase}
          disabled={selectedOption === EditorOption.Erase}
          onClick={this.onEraseClick}
        />
      </div>
    );
  }

  private readonly onTerrainsClick = () => {
    this.props.onSelectedOptionChange(EditorOption.Terrains);
  }

  private readonly onObjectsClick = () => {
    this.props.onSelectedOptionChange(EditorOption.Objects);
  }

  private readonly onDetailsClick = () => {
    this.props.onSelectedOptionChange(EditorOption.Details);
  }

  private readonly onEraseClick = () => {
    this.props.onSelectedOptionChange(EditorOption.Erase);
  }
}
