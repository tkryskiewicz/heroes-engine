import * as React from "react";

import { HeroLocators } from "./HeroLocators";

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
        <HeroLocators
        />
      </>
    );
  }
}
