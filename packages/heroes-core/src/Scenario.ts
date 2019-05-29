import { Map } from "./map";

export interface Scenario {
  readonly name: string;
  readonly description: string;
  // FIXME: should this have a map? it's already on Game object...
  readonly map: Map;
}
