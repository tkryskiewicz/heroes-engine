import React from "react";

import { CreditsWindow, MainMenu, MainWindow } from "heroes-homm1-react";

interface Props {
  readonly creditsVisible: boolean;
  readonly onOpenCreditsClick: () => void;
  readonly onCloseCreditsClick: () => void;
}

type DefaultProp =
  "creditsVisible" |
  "onOpenCreditsClick" |
  "onCloseCreditsClick";

export class MainWindowContainer extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    creditsVisible: false,
    onCloseCreditsClick: () => undefined,
    onOpenCreditsClick: () => undefined,
  };

  public render() {
    return (
      <MainWindow>
        <MainMenu
          onViewCreditsClick={this.props.onOpenCreditsClick}
        />
        <CreditsWindow
          visible={this.props.creditsVisible}
          onClick={this.props.onCloseCreditsClick}
        />
      </MainWindow>
    );
  }
}

export type MainWindowContainerProps = ExtractPublicProps<typeof MainWindowContainer>;
