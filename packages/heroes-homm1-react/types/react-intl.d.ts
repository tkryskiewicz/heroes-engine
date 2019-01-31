// tslint:disable-next-line:no-namespace
declare namespace ReactIntl {
  type ExtractProps<C> = C extends React.ComponentType<infer P> ? P : never;

  function injectIntl<C extends React.ComponentClass<ExtractProps<C> & InjectedIntlProps>, P = ExtractProps<C>>(
    component: C,
    options?: InjectIntlConfig,
  ):
    React.ComponentClass<Pick<JSX.LibraryManagedAttributes<C, P>, Exclude<keyof P, keyof InjectedIntlProps>>> &
    { readonly WrappedComponent: React.ComponentType<P> };
}
