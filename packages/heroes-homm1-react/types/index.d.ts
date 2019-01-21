declare module "*.scss" {
  const content: { [index: string]: string };

  export = content;
}

declare module "*.jpg" {
  const content: string;

  export = content;
}

declare module "*.png" {
  const content: string;

  export = content;
}

declare module "*.md" {
  const content: string;

  export = content;
}
