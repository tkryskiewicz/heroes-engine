import React from "react";
import { Route } from "react-router-dom";

import { AdventureScreen } from "./AdventureScreen";
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
          path="/"
          exact={true}
          component={MainWindow}
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
