import { Col, Row } from "antd";
import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Resources, Structure } from "heroes-core";
import { CastleOptionStatus, getCastleOptionStatus, StructureId } from "heroes-homm1";

import * as styles from "./CastleOptionsWindow.module.scss";

import { getStructureNameMessage } from "../messages";
import {
  withTownDetailWindow,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps,
  WithTownDetailWindowRef,
} from "../TownDetailWindow";
import { CastleOption } from "./CastleOption";
import { getOptionStatusTextMessage, messages } from "./messages";

interface CastleOptionsWindowProps extends
  InjectedIntlProps,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps {
  readonly town: string;
  readonly canConstructStructures: boolean;
  readonly options: Structure[];
  readonly resources: Resources;
  readonly getOptionDetails: (town: string, option: Structure, props: {
    readonly onCloseClick: () => void;
  }) => React.ReactNode | undefined;
  readonly visibleOptionDetails?: string;
  readonly onOpenOptionDetailsClick: (option: string) => void;
  readonly onCloseOptionDetailsClick: () => void;
}

type DefaultProp =
  "getOptionDetails" |
  "onOpenOptionDetailsClick" |
  "onCloseOptionDetailsClick";

class CastleOptionsWindow extends React.Component<CastleOptionsWindowProps> implements WithTownDetailWindowRef {
  public static readonly defaultProps: Pick<CastleOptionsWindowProps, DefaultProp> = {
    getOptionDetails: () => undefined,
    onCloseOptionDetailsClick: () => undefined,
    onOpenOptionDetailsClick: () => undefined,
  };

  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { town, options, canConstructStructures, resources, visibleOptionDetails } = this.props;

    const visibleOptions = options.filter((s) => s.id !== StructureId.Castle);

    const optionDetails = visibleOptionDetails ?
      options.find((s) => s.id === visibleOptionDetails) :
      undefined;

    return (
      <div className={styles.root}>
        <Row>
          {visibleOptions.map((s) => this.renderOption(town, s, canConstructStructures, resources))}
          {optionDetails && this.renderOptionDetails(town, optionDetails)}
        </Row>
      </div>
    );
  }

  public readonly onExitMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(messages.exitStatusText);

    this.props.onStatusTextChange(statusText);
  }

  public readonly onExitMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private renderOption(town: string, structure: Structure, canConstructStrucutes: boolean, resources: Resources) {
    const status = getCastleOptionStatus(structure, canConstructStrucutes, resources);

    return (
      <Col
        key={structure.id}
        span={6}
      >
        <CastleOption
          town={town}
          option={structure.id}
          status={status}
          onMouseEnter={this.onOptionMouseEnter}
          onMouseLeave={this.onOptionMouseLeave}
          onClick={this.onOptionClick}
        />
      </Col>
    );
  }

  private readonly onOptionMouseEnter = (structure: string, status: CastleOptionStatus) => {
    const { formatMessage } = this.props.intl;

    const optionName = formatMessage(getStructureNameMessage(structure));

    const statusText = formatMessage(getOptionStatusTextMessage(status), { optionName });

    this.props.onStatusTextChange(statusText);
  }

  private readonly onOptionMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly onOptionClick = (option: string) => {
    this.props.onOpenOptionDetailsClick(option);
  }

  private renderOptionDetails(town: string, option: Structure) {
    const optionDetails = this.props.getOptionDetails(town, option, {
      onCloseClick: this.props.onCloseOptionDetailsClick,
    });

    return optionDetails;
  }

  private setDefaultStatusText() {
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.props.onStatusTextChange(statusText);
  }
}

const CastleOptionsWindowWrapped = injectIntl(
  withTownDetailWindow()(CastleOptionsWindow),
);

type CastleOptionsWindowWrappedProps = ExtractProps<typeof CastleOptionsWindowWrapped>;

export {
  CastleOptionsWindowWrapped as CastleOptionsWindow,
  CastleOptionsWindowWrappedProps as CastleOptionsWindowProps,
};
