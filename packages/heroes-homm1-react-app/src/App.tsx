import * as React from "react";
import { Route } from "react-router-dom";

import { AdventureScreen } from "./AdventureScreen";
import { EditorWindow } from "./EditorWindow";

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
