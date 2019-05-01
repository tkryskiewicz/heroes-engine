import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import * as styles from "./ResourcePickupStatus.module.scss";

import { ResourceIcon } from "../base";
import { GameText } from "../core";
import { getResourceNameMessage } from "../messages";
import { StatusWindow } from "../StatusWindow";
import { messages } from "./messages";

interface ResourcePickupStatusProps extends InjectedIntlProps {
  readonly resource: string;
  readonly amount: number;
}

class ResourcePickupStatus extends React.Component<ResourcePickupStatusProps> {
  public render() {
    const { resource, amount } = this.props;

    const resourceName = this.props.intl.formatMessage(getResourceNameMessage(resource));

    return (
      <StatusWindow>
        <div className={styles.root}>
          <GameText size="small">
            <FormattedMessage {...messages.content} values={{ resource: resourceName.toLowerCase() }} />
          </GameText>
          <div>
            <ResourceIcon
              size="large"
              resource={resource}
            />
          </div>
          <GameText size="small">
            {amount}
          </GameText>
        </div>
      </StatusWindow>
    );
  }
}

const ComponentWrapped = injectIntl(ResourcePickupStatus);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as ResourcePickupStatus,
  ComponentWrappedProps as ResourcePickupStatusProps,
};
