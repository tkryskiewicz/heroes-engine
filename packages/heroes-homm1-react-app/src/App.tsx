import React from "react";
import { Route } from "react-router-dom";

import { MainMenu, MainWindow } from "heroes-homm1-react";

import { AdventureScreen } from "./AdventureScreen";
import { EditorWindow } from "./EditorWindow";

const renderMainWindow = () => (
  <MainWindow>
    <MainMenu />
  </MainWindow>
);

export class App extends React.Component {
  public render() {
    return (
      <>
        <h1>
          heroes-engine
        </h1>
        <p>
          A Heroes of Might and Magic engine written in TypeScript.
        </p>
        <Route
          path="/"
          exact={true}
          component={renderMainWindow}
        />
        <Route
          path="/adventure"
          component={AdventureScreen}
        />
        <Route
          path="/editor"
          component={EditorWindow}
        />
      </>
    );
  }
}
