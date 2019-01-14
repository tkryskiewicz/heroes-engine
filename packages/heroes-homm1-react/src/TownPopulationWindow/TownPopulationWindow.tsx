import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import "./TownPopulationWindow.scss";

import { CreatureIcon } from "../base";
import { GameText } from "../core";
import { getCreatureNameMessage } from "../messages";
import { StructureIcon } from "../StructureIcon";
import {
  withTownDetailWindow,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps,
} from "../TownDetailWindow";
import { messages } from "./messages";

interface Dwelling {
  id: string;
  creature: string;
  available?: number;
  growthRate?: number;
}

export interface TownPopulationWindowProps extends
  InjectedIntlProps,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps {
  town: string;
  dwellings: Dwelling[];
}

class TownPopulationWindow extends React.Component<TownPopulationWindowProps> {
  public componentDidMount() {
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.props.onStatusTextChange(statusText);
  }

  public render() {
    return (
      <div className="town-population-window">
        {this.props.dwellings.map((d) => this.renderDwelling(this.props.town, d))}
      </div>
    );
  }

  private renderDwelling(town: string, dwelling: Dwelling) {
    return (
      <div
        key={dwelling.id}
        className="town-population-window-dwelling"
      >
        <StructureIcon
          town={town}
          structure={dwelling.id}
        />
        <div className="town-population-window-creature">
          <CreatureIcon
            size="medium"
            creature={dwelling.creature}
          />
        </div>
        <div className="town-population-window-dwelling-info">
          <div className="town-population-window-creature-name">
            <GameText size="small">
              <FormattedMessage {...getCreatureNameMessage(dwelling.creature)} />
            </GameText>
          </div>
          <GameText size="normal">
            <FormattedMessage {...messages.available} />:
            <br />
            {dwelling.available !== undefined ? dwelling.available : <FormattedMessage {...messages.noneAvailable} />}
            <br />
            <FormattedMessage {...messages.growthRateTitle} />:
            <br />
            <FormattedMessage
              {...dwelling.growthRate !== undefined ? messages.growthRate : messages.growthRateUnavailable}
              values={{ value: dwelling.growthRate }}
            />
          </GameText>
        </div>
      </div>
    );
  }
}

const TownPopulationWindowWrapped = injectIntl(
  withTownDetailWindow()(TownPopulationWindow),
);

export {
  TownPopulationWindowWrapped as TownPopulationWindow,
};
