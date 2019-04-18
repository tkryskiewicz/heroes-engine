import * as React from "react";

import * as styles from "./TerrainsOptionDetails.module.scss";

import { SelectionImage } from "./assets";

export interface TerrainsOptionDetailsProps {
  readonly options: string[];
  readonly selectedOption: string;
  readonly onSelectedOptionChange: (value: string) => void;
}

export class TerrainsOptionDetails extends React.Component<TerrainsOptionDetailsProps> {
  public static readonly defaultProps: Pick<TerrainsOptionDetailsProps, "onSelectedOptionChange"> = {
    onSelectedOptionChange: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        {this.props.options.map((o) => this.renderOption(o))}
      </div>
    );
  }

  private renderOption(option: string) {
    const onClick = () => this.props.onSelectedOptionChange(option);

    return (
      <div
        key={option}
        className={styles.option}
        onClick={onClick}
      >
        <img src={`/assets/terrains/${option}/editor-option.jpg`} />
        {this.props.selectedOption === option && this.renderSelection()}
      </div>
    );
  }

  private renderSelection() {
    return (
      <img
        className={styles.selection}
        src={SelectionImage}
      />
    );
  }
}
