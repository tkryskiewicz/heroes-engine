import { WithGameWindowProps } from "../core";

export interface ConfirmPromptProps extends WithGameWindowProps {
  readonly onConfirmClick?: () => void;
}

export interface CancelPromptProps extends WithGameWindowProps {
  readonly onCancelClick?: () => void;
}

export interface PromptProps extends ConfirmPromptProps, CancelPromptProps {
}
