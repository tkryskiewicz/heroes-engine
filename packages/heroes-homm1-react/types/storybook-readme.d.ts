declare module "storybook-readme" {
  import { RenderFunction, StoryDecorator } from "@storybook/react";

  function withReadme(readme: string | string[]): StoryDecorator;
  function withReadme(readme: string | string[], callback: RenderFunction): RenderFunction;
}
