import { RouteComponentProps } from "react-router";

declare module "react-router" {
  export function withRouter<P extends RouteComponentProps<any>, C extends React.ComponentType<P>>(
    component: C & React.ComponentType<P>,
  ): React.ComponentClass<Omit<ExtractPublicProps<C>, keyof RouteComponentProps<any>> & WithRouterProps<C>> & WithRouterStatics<C>;
}
