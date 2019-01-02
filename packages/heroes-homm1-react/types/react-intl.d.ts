// tslint:disable-next-line:no-namespace
declare namespace ReactIntl {
  function injectIntl<C extends React.ComponentClass<P & InjectedIntlProps>, P>(
    component: C,
    options?: InjectIntlConfig,
  ):
    React.ComponentClass<Pick<JSX.LibraryManagedAttributes<C, P>, Exclude<keyof P, keyof InjectedIntlProps>>> &
    { WrappedComponent: React.ComponentType<P> };
}
