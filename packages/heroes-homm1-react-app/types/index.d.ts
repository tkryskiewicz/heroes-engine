declare module "*.scss" {
  const content: { readonly [index: string]: string };

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

type ExtractProps<C> = C extends React.ComponentType<infer P> ? P : never;

type ExtractPublicProps<C> = JSX.LibraryManagedAttributes<C, ExtractProps<C>>;
