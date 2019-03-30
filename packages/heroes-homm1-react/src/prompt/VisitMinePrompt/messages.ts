import { defineMessages } from "react-intl";

export const messages = defineMessages({
  amount: {
    defaultMessage: "{amount} {resource}",
    id: "ui.visitMinePrompt.amount",
  },
  amountPerDay: {
    defaultMessage: "{amount}/day",
    id: "ui.visitMinePrompt.amountPerDay",
  },
  amountUnits: {
    defaultMessage: "{amount, plural, =1 {one unit} =2 {two units} other {# units}} of {resource}",
    id: "ui.visitMinePrompt.amountUnits",
  },
  // FIXME: should be 'of an ore mine'
  content: {
    defaultMessage: "You gain control of a {mine}. It will provide you with {amount} per day.",
    id: "ui.visitMinePrompt.content",
  },
  contentAlchemist: {
    defaultMessage: "You have taken control of the local {mine} shop. It will provide you with {amount} per day.",
    id: "ui.visitMinePrompt.contentAlchemist",
  },
});
