import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { GameText } from "heroes-homm1-react-components";

import * as styles from "./TownPopulationWindow.module.scss";

import { CreatureIcon } from "../base";
import { CastleOptionIcon } from "../CastleOptionIcon";
import { getCreatureNameMessage } from "../messages";
import {
  withTownDetailWindow,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps,
} from "../TownDetailWindow";
import { messages } from "./messages";

interface Dwelling {
  readonly id: string;
  readonly creature: string;
  readonly available?: number;
  readonly growthRate?: number;
}

interface TownPopulationWindowProps extends
  InjectedIntlProps,
  WithTownDetailWindowInjectedProps,
  WithTownDetailWindowProps {
  readonly town: string;
  readonly dwellings: Dwelling[];
}

class TownPopulationWindow extends React.Component<TownPopulationWindowProps> {
  public componentDidMount() {
    const statusText = this.props.intl.formatMessage(messages.defaultStatusText);

    this.props.onStatusTextChange(statusText);
  }

  public render() {
    return (
      <div className={styles.root}>
        {this.props.dwellings.map((d) => this.renderDwelling(this.props.town, d))}
      </div>
    );
  }

  private renderDwelling(town: string, dwelling: Dwelling) {
    return (
      <div
        key={dwelling.id}
        className={styles.dwelling}
      >
        <CastleOptionIcon
          town={town}
          option={dwelling.id}
        />
        <div className={styles.creature}>
          <CreatureIcon
            size="medium"
            creature={dwelling.creature}
          />
        </div>
        <div className={styles.dwellingInfo}>
          <div className={styles.creatureName}>
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

type TownPopulationWindowWrappedProps = ExtractProps<typeof TownPopulationWindowWrapped>;

export {
  TownPopulationWindowWrapped as TownPopulationWindow,
  TownPopulationWindowWrappedProps as TownPopulationWindowProps,
};
