// FIXME: simpler way to do it? react-intl fixed HOC?
export type ComponentWithDefaultProps<TProps extends TDefaultProps, TDefaultProps> = React.ComponentClass<
  Partial<Pick<TProps, keyof TDefaultProps>> &
  Pick<TProps, Exclude<keyof TProps, keyof TDefaultProps>>>;
