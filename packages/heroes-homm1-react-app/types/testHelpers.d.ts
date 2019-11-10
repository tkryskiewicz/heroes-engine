declare module "heroes-test-helpers" {
  import { mount, shallow } from "enzyme";

  export const shallowWithIntl: typeof shallow;
  export const mountWithIntl: typeof mount;

  export const byTestId: (value: string) => string;
}
