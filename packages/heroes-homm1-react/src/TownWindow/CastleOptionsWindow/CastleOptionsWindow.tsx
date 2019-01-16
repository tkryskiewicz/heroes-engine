import { Col, Row } from "antd";
import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { Resources, Structure } from "heroes-core";
import { CastleOptionStatus, getCastleOptionStatus } from "heroes-homm1";

import "./CastleOptionsWindow.scss";

import { getStructureNameMessage } from "../../messages";
import {
  withTownDetailWindow,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps,
  WithTownDetailWindowRef,
} from "../../TownDetailWindow";
import { CastleOption } from "../CastleOption";
import { getStructureStatusMessage, messages } from "./messages";

export interface CastleOptionsWindowProps extends
  InjectedIntlProps,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps {
  town: string;
  canConstructStructures: boolean;
  structures: Structure[];
  resources: Resources;
}

class CastleOptionsWindow extends React.Component<CastleOptionsWindowProps> implements WithTownDetailWindowRef {
  public componentDidMount() {
    this.setDefaultStatusText();
  }

  public render() {
    const { town, structures, canConstructStructures, resources } = this.props;

    return (
      <div className="castle-options-window">
        <Row>
          {structures.map((s) => this.renderStructure(town, s, canConstructStructures, resources))}
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
        />
      </Col>
    );
  }

  private onStructureMouseEnter = (structure: string, status: CastleOptionStatus) => {
    const { formatMessage } = this.props.intl;

    const structureName = formatMessage(getStructureNameMessage(structure));

    const statusText = formatMessage(getStructureStatusMessage(status), { structureName });

    this.props.onStatusTextChange(statusText);
  }

  private onStructureMouseLeave = () => {
    this.setDefaultStatusText();
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
