import { FormattedMessage } from "react-intl";

export const unknownMessage: FormattedMessage.MessageDescriptor = {
  defaultMessage: "Unknown",
  id: "unknown",
};

export const convertValue = (value: string): string =>
  value.replace(/-\w/, (str) => str[1].toUpperCase());
