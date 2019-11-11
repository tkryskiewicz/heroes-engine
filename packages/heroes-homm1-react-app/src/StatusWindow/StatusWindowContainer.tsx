import React from "react";

import { nextOption } from "heroes-core";
import { noop } from "heroes-helpers";
import {
  DateInformation,
  DateInformationProps,
  HeroStatus,
  HeroStatusProps,
  ResourceSummary,
  ResourceSummaryProps,
} from "heroes-homm1-react";
import { StatusWindowOption } from "heroes-homm1-state";

type DateInformationData = DateInformationProps;
type ResourceSummaryData = ResourceSummaryProps;
type HeroStatusData = HeroStatusProps;

interface StatusWindowContainerProps {
  readonly dateInformation: DateInformationData;
  readonly resourceSummary: ResourceSummaryData;
  readonly heroStatus?: HeroStatusData;
  readonly selectedOption: StatusWindowOption;
  readonly onSelectedOptionChange: (value: StatusWindowOption) => void;
}

class StatusWindowContainer extends React.Component<StatusWindowContainerProps> {
  public static readonly defaultProps: Pick<StatusWindowContainerProps, "onSelectedOptionChange"> = {
    onSelectedOptionChange: noop,
  };

  public render() {
    return (
      <div onClick={this.onClick}>
        {this.renderOption(this.props.selectedOption)}
      </div>
    );
  }

  private renderOption(option: StatusWindowOption) {
    switch (option) {
      case StatusWindowOption.DateInformation:
        return (
          <DateInformation
            {...this.props.dateInformation}
          />
        );
      case StatusWindowOption.ResourceSummary:
        return (
          <ResourceSummary
            {...this.props.resourceSummary}
          />
        );
      case StatusWindowOption.HeroStatus:
        return this.props.heroStatus && (
          <HeroStatus
            {...this.props.heroStatus}
          />
        );
    }
  }

  private readonly onClick = () => {
    const options = [
      StatusWindowOption.ResourceSummary,
      StatusWindowOption.DateInformation,
    ];

    if (this.props.heroStatus) {
      options.push(StatusWindowOption.HeroStatus);
    }

    const option = nextOption(options, this.props.selectedOption);

    this.props.onSelectedOptionChange(option);
  }
}

export {
  StatusWindowContainer as StatusWindow,
  StatusWindowContainerProps as StatusWindowProps,
};
