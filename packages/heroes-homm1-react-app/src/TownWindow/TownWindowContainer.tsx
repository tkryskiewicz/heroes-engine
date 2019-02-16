import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import {
  Crest,
  kingdomOverviewWindowMessages,
  TownWindow,
  townWindowMessages,
  TownWindowProps,
  Treasury,
} from "heroes-homm1-react";

interface TownWindowContainerProps extends InjectedIntlProps, TownWindowProps {
}

interface TownWindowContainerState {
  readonly statusText: string;
}

class TownWindowContainer extends React.Component<TownWindowContainerProps, TownWindowContainerState> {
  public readonly state: TownWindowContainerState = {
    statusText: "",
  };

  public render() {
    return (
      <TownWindow
        {...this.props}
        renderCrest={this.renderCrest}
        renderTreasury={this.renderTreasury}
      />
    );
  }

  private readonly renderCrest = () => {
    const { town } = this.props;

    return (
      <Crest
        alignment={town.alignment}
        heroClass={town.heroClass}
        onMouseEnter={this.onCrestMouseEnter}
        onMouseLeave={this.onCrestMouseLeave}
        onClick={this.props.onCrestClick}
      />
    );
  }

  private readonly onCrestMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(kingdomOverviewWindowMessages.title);

    this.setStatusText(statusText);
  }

  private readonly onCrestMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private readonly renderTreasury = () => {
    return (
      <Treasury
        resources={this.props.resources}
        onExitMouseEnter={this.onExitMouseEnter}
        onExitMouseLeave={this.onExitMouseLeave}
        onExitClick={this.props.onExitClick}
      />
    );
  }

  private readonly onExitMouseEnter = () => {
    const statusText = this.props.intl.formatMessage(townWindowMessages.exit);

    this.setStatusText(statusText);
  }

  private readonly onExitMouseLeave = () => {
    this.setDefaultStatusText();
  }

  private setStatusText(statusText: string) {
    this.setState({
      statusText,
    });
  }

  private setDefaultStatusText() {
    const statusText = this.props.intl.formatMessage(townWindowMessages.defaultStatusText);

    this.setStatusText(statusText);
  }
}

const TownWindowContainerWrapped = injectIntl(TownWindowContainer);

type TownWindowContainerWrappedProps = ExtractProps<typeof TownWindowContainerWrapped>;

export {
  TownWindowContainerWrapped as TownWindowContainer,
  TownWindowContainerWrappedProps as TownWindowContainerProps,
};
