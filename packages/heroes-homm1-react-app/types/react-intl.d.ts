import { WrappedComponentProps, IntlConfig, MessageDescriptor, IntlShape } from "react-intl";

declare module "react-intl" {
  export type InjectedIntlProps = WrappedComponentProps;

  function injectIntl<C extends React.ComponentClass<ExtractProps<C> & InjectedIntlProps>, P = ExtractProps<C>>(component: C):
    React.ComponentClass<Pick<JSX.LibraryManagedAttributes<C, P>, Exclude<keyof P, keyof InjectedIntlProps>>> &
    { readonly WrappedComponent: React.ComponentType<P> };
}
