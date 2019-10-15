import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "./jsdomSetup";

Enzyme.configure({
  adapter: new Adapter(),
});
