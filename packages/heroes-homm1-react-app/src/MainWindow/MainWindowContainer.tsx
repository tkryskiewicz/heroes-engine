import React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";

import { AlignmentId, alignments, CampaignId, GameDifficulty } from "heroes-homm1";
import {
  CampaignMenu,
  CreditsWindow,
  DialingPrompt,
  DirectConnectDialPrompt,
  EnterTelephoneNumberPrompt,
  FileSelectorWindow,
  GameTypeMenu,
  HostGuestMenu,
  MainMenu,
  MainWindow,
  MultiPlayerGameMenu,
  NewGameWindow,
  PlayersMenu,
  WaitingForRingPrompt,
} from "heroes-homm1-react";

import { HighScoresWindow } from "../HighScoresWindow";

class MainWindowContainer extends React.Component<RouteComponentProps> {
  public render() {
    return (
      <MainWindow>
        <Switch>
          <Route
            path={`${this.props.match.path}`}
            exact={true}
            render={this.renderMainMenu}
          />
          <Route path={`${this.props.match.path}/new-game`} render={this.renderNewGameRoutes} />
          <Route path={`${this.props.match.path}/load-game`} render={this.renderLoadGameRoutes} />
          <Route path={`${this.props.match.path}/high-scores`}>
            <HighScoresWindow
              visible={true}
              onExitClick={this.onCancelClick}
            />
          </Route>
          <Route path={`${this.props.match.path}/credits`}>
            <CreditsWindow
              visible={true}
              onClick={this.onCancelClick}
            />
          </Route>
        </Switch>
      </MainWindow>
    );
  }

  private readonly renderMainMenu = (props: RouteComponentProps) => {
    const onNewGameClick = () => props.history.push(`${props.match.path}/new-game`);
    const onLoadGameClick = () => props.history.push(`${props.match.path}/load-game`);
    const onViewHighScoresClick = () => props.history.push(`${props.match.path}/high-scores`);
    const onViewCreditsClick = () => props.history.push(`${props.match.path}/credits`);
    const onQuitClick = () => alert("Quit?");

    return (
      <MainMenu
        onNewGameClick={onNewGameClick}
        onLoadGameClick={onLoadGameClick}
        onViewHighScoresClick={onViewHighScoresClick}
        onViewCreditsClick={onViewCreditsClick}
        onQuitClick={onQuitClick}
      />
    );
  }

  private readonly renderNewGameRoutes = (props: RouteComponentProps) => {
    return (
      <Switch>
        <Route
          path={props.match.path}
          exact={true}
          render={this.renderGameTypeMenu}
        />
        <Route path={`${props.match.path}/standard`}>
          <NewGameWindow
            selectedGameDifficulty={GameDifficulty.Easy}
            alignments={alignments}
            selectedAlignment={AlignmentId.Red}
            kingOfTheHill={false}
            opponentSettings={[]}
            onCancelClick={this.onCancelClick}
          />
        </Route>
        <Route
          path={`${props.match.path}/campaign`}
          render={this.renderCampaignMenu}
        />
        <Route
          path={`${props.match.path}/multi-player`}
          render={this.renderNewGameMultiPlayerRoutes}
        />
      </Switch>
    );
  }

  private readonly renderNewGameMultiPlayerRoutes = (props: RouteComponentProps) => {
    return (
      <Switch>
        <Route
          path={props.match.path}
          exact={true}
          render={this.renderMultiPlayerGameMenu}
        />
        <Route
          path={`${props.match.path}/hot-seat`}
          render={this.renderNewGameHotSeatRoutes}
        />
        <Route
          path={`${props.match.path}/network`}
          render={this.renderHostGuestMenu}
        />
        <Route
          path={`${props.match.path}/modem`}
          render={this.renderModemRoutes}
        />
        <Route
          path={`${props.match.path}/direct-connect`}
          render={this.renderDirectConnectRoutes}
        />
      </Switch>
    );
  }

  private readonly renderNewGameHotSeatRoutes = (props: RouteComponentProps) => {
    return (
      <Switch>
        <Route
          path={props.match.path}
          exact={true}
          render={this.renderPlayersMenu}
        />
        <Route path={`${props.match.path}/:playerCount`}>
          <NewGameWindow
            selectedGameDifficulty={GameDifficulty.Easy}
            alignments={alignments}
            selectedAlignment={AlignmentId.Red}
            kingOfTheHill={false}
            opponentSettings={[]}
            onCancelClick={this.onCancelClick}
          />
        </Route>
      </Switch>
    );
  }

  private readonly renderLoadGameRoutes = (props: RouteComponentProps) => {
    return (
      <Switch>
        <Route
          path={props.match.path}
          exact={true}
          render={this.renderGameTypeMenu}
        />
        <Route path={`${props.match.path}/standard`}>
          <FileSelectorWindow
            visible={true}
            type="load"
            confirmDisabled={true}
            onCancelClick={this.onCancelClick}
          />
        </Route>
        <Route path={`${props.match.path}/campaign`}>
          <FileSelectorWindow
            visible={true}
            type="load"
            confirmDisabled={true}
            onCancelClick={this.onCancelClick}
          />
        </Route>
        <Route
          path={`${props.match.path}/multi-player`}
          render={this.renderLoadGameMultiPlayerRoutes}
        />
      </Switch>
    );
  }

  private readonly renderLoadGameMultiPlayerRoutes = (props: RouteComponentProps) => {
    return (
      <Switch>
        <Route
          path={props.match.path}
          exact={true}
          render={this.renderMultiPlayerGameMenu}
        />
        <Route
          path={`${props.match.path}/hot-seat`}
          render={this.renderLoadGameHotSeatRoutes}
        />
        <Route
          path={`${props.match.path}/network`}
          render={this.renderHostGuestMenu}
        />
        <Route
          path={`${props.match.path}/modem`}
          render={this.renderModemRoutes}
        />
        <Route
          path={`${props.match.path}/direct-connect`}
          render={this.renderDirectConnectRoutes}
        />
      </Switch>
    );
  }

  private readonly renderLoadGameHotSeatRoutes = (props: RouteComponentProps) => {
    return (
      <Switch>
        <Route
          path={props.match.path}
          exact={true}
          render={this.renderPlayersMenu}
        />
        <Route path={`${props.match.path}/:playerCount`}>
          <FileSelectorWindow
            visible={true}
            type="load"
            confirmDisabled={true}
            onCancelClick={this.onCancelClick}
          />
        </Route>
      </Switch>
    );
  }

  private readonly renderGameTypeMenu = (props: RouteComponentProps) => {
    const onStandardGameClick = () => props.history.push(`${props.match.path}/standard`);
    const onCampaignGameClick = () => props.history.push(`${props.match.path}/campaign`);
    const onMultiPlayerGameClick = () => props.history.push(`${props.match.path}/multi-player`);

    return (
      <GameTypeMenu
        onStandardGameClick={onStandardGameClick}
        onCampaignGameClick={onCampaignGameClick}
        onMultiPlayerGameClick={onMultiPlayerGameClick}
        onCancelClick={this.onCancelClick}
      />
    );
  }

  private readonly renderCampaignMenu = (props: RouteComponentProps) => {
    const onOptionClick = (_value: CampaignId) => props.history.push("/adventure");

    return (
      <CampaignMenu
        onOptionClick={onOptionClick}
        onCancelClick={this.onCancelClick}
      />
    );
  }

  private readonly renderMultiPlayerGameMenu = (props: RouteComponentProps) => {
    const onHotSeatClick = () => props.history.push(`${props.match.path}/hot-seat`);
    const onNetworkClick = () => props.history.push(`${props.match.path}/network`);
    const onModemClick = () => props.history.push(`${props.match.path}/modem`);
    const onDirectConnectClick = () => props.history.push(`${props.match.path}/direct-connect`);

    return (
      <MultiPlayerGameMenu
        onHotSeatClick={onHotSeatClick}
        onNetworkClick={onNetworkClick}
        onModemClick={onModemClick}
        onDirectConnectClick={onDirectConnectClick}
        onCancelClick={this.onCancelClick}
      />
    );
  }

  private readonly renderPlayersMenu = (props: RouteComponentProps) => {
    const onOptionClick = (value: number) => props.history.push(`${props.match.path}/${value}`);

    return (
      <PlayersMenu
        onOptionClick={onOptionClick}
        onCancelClick={this.onCancelClick}
      />
    );
  }

  private readonly renderModemRoutes = (props: RouteComponentProps) => {
    return (
      <Switch>
        <Route
          path={props.match.path}
          exact={true}
          render={this.renderHostGuestMenuWithDescription}
        />
        <Route path={`${props.match.path}/host`}>
          <Switch>
            <Route
              path={`${props.match.path}/host`}
              exact={true}
              render={this.renderEnterNumberDialog}
            />
            <Route
              path={`${props.match.path}/host/ring/:number`}
              render={this.renderDialingDialog}
            />
          </Switch>
        </Route>
        <Route
          path={`${props.match.path}/guest`}
          render={this.renderWaitingForRingDialog}
        />
      </Switch>
    );
  }

  private readonly renderEnterNumberDialog = (props: RouteComponentProps) => {
    const onConfirmClick = () => props.history.push(`${props.match.path}/ring/NUMBER`);

    return (
      <EnterTelephoneNumberPrompt
        visible={true}
        onConfirmClick={onConfirmClick}
      />
    );
  }

  private readonly renderDialingDialog = (props: RouteComponentProps<{ readonly number: string; }>) => {
    return (
      <DialingPrompt
        visible={true}
        number={props.match.params.number}
        onCancelClick={this.onCancelClick}
      />
    );
  }

  private readonly renderWaitingForRingDialog = () => {
    return (
      <WaitingForRingPrompt
        visible={true}
        onCancelClick={this.onCancelClick}
      />
    );
  }

  private readonly renderDirectConnectRoutes = (props: RouteComponentProps) => {
    return (
      <Switch>
        <Route
          path={props.match.path}
          exact={true}
          render={this.renderHostGuestMenuWithDescription}
        />
        <Route
          path={`${props.match.path}/host`}
          render={this.renderDirectConnectDialog}
        />
        <Route
          path={`${props.match.path}/guest`}
          render={this.renderDirectConnectDialog}
        />
      </Switch>
    );
  }

  private readonly renderDirectConnectDialog = () => {
    return (
      <DirectConnectDialPrompt
        visible={true}
        onCancelClick={this.onCancelClick}
      />
    );
  }

  private readonly renderHostGuestMenu = (props: RouteComponentProps, descriptionVisible: boolean = false) => {
    const onHostClick = () => props.history.push(`${props.match.path}/host`);
    const onGuestClick = () => props.history.push(`${props.match.path}/guest`);

    return (
      <HostGuestMenu
        descriptionVisible={descriptionVisible}
        onHostClick={onHostClick}
        onGuestClick={onGuestClick}
        onCancelClick={this.onCancelClick}
      />
    );
  }

  private readonly renderHostGuestMenuWithDescription = (props: RouteComponentProps) =>
    this.renderHostGuestMenu(props, true)

  private readonly onCancelClick = () => {
    this.props.history.push(this.props.match.path);
  }
}

const ComponentWrapped = withRouter(MainWindowContainer);

export type ComponentWrappedProps = ExtractPublicProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as MainWindowContainer,
  ComponentWrappedProps as MainWindowContainerProps,
};
