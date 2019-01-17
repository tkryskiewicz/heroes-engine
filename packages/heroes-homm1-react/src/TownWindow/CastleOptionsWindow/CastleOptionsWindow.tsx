import { Col, Row } from "antd";
import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Resources, Structure } from "heroes-core";
import { CastleOptionStatus, getCastleOptionStatus } from "heroes-homm1";

import "./CastleOptionsWindow.scss";

import { BuildStructureWindow } from "../../BuildStructureWindow";
import { getStructureNameMessage } from "../../messages";
import {
  withTownDetailWindow,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps,
  WithTownDetailWindowRef,
} from "../../TownDetailWindow";
import { CastleOption } from "../CastleOption";
import { getOptionStatusTextMessage, messages } from "./messages";

export interface CastleOptionsWindowProps extends
  InjectedIntlProps,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps {
  town: string;
  canConstructStructures: boolean;
  structures: Structure[];
  resources: Resources;
  visibleOptionDetails?: string;
  onOpenOptionDetailsClick: (option: string) => void;
  onCloseOptionDetailsClick: () => void;
}

type DefaultProp =
  "onOpenOptionDetailsClick" |
  "onCloseOptionDetailsClick";

class CastleOptionsWindow extends React.Component<CastleOptionsWindowProps> implements WithTownDetailWindowRef {
  public static defaultProps: Pick<CastleOptionsWindowProps, DefaultProp> = {
    onCloseOptionDetailsClick: () => undefined,
    onOpenOptionDetailsClick: () => undefined,
  };

  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { town, structures, canConstructStructures, resources, visibleOptionDetails } = this.props;

    const optionDetails = visibleOptionDetails ?
      structures.find((s) => s.id === visibleOptionDetails) :
      undefined;

    return (
      <div className="castle-options-window">
        <Row>
          {structures.map((s) => this.renderStructure(town, s, canConstructStructures, resources))}
          {optionDetails && this.renderOptionDetails(town, optionDetails)}
        </Row>
      </div>
    );
  }

  public onExitMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(messages.exitStatusText);

    this.props.onStatusTextChange(statusText);
  }

  public onExitMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private renderStructure(town: string, structure: Structure, canConstructStrucutes: boolean, resources: Resources) {
    const status = getCastleOptionStatus(structure, canConstructStrucutes, resources);

    return (
      <Col
        key={structure.id}
        span={6}
      >
        <CastleOption
          town={town}
          structure={structure.id}
          status={status}
          onMouseEnter={this.onStructureMouseEnter}
          onMouseLeave={this.onStructureMouseLeave}
          onClick={this.onOptionClick}
        />
      </Col>
    );
  }

  private onStructureMouseEnter = (structure: string, status: CastleOptionStatus) => {
    const { formatMessage } = this.props.intl;

    const optionName = formatMessage(getStructureNameMessage(structure));

    const statusText = formatMessage(getOptionStatusTextMessage(status), { optionName });

    this.props.onStatusTextChange(statusText);
  }

  private onStructureMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private onOptionClick = (option: string) => {
    this.props.onOpenOptionDetailsClick(option);
  }

  private renderOptionDetails(town: string, option: Structure) {
    return (
      <BuildStructureWindow
        visible={true}
        town={town}
        structure={option.id}
        cost={option.cost}
        canBuild={true}
        onCancelClick={this.props.onCloseOptionDetailsClick}
      />
    );
  }

  private setDefaultStatusText() {
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.props.onStatusTextChange(statusText);
  }
}

const CastleOptionsWindowWrapped = injectIntl(
  withTownDetailWindow()(CastleOptionsWindow),
);

export {
  CastleOptionsWindowWrapped as CastleOptionsWindow,
};
