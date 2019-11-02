import React from "react";
import { Redirect, Route } from "react-router";

import { AdventureWindow } from "./AdventureWindow";
import { EditorWindow } from "./EditorWindow";
import { MainWindow } from "./MainWindow";

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
          path="/main"
          component={MainWindow}
        />
        <Route
          path="/adventure"
          component={AdventureWindow}
        />
        <Route
          path="/editor"
          component={EditorWindow}
        />
        <Redirect to="/main" />
      </>
    );
  }
}
