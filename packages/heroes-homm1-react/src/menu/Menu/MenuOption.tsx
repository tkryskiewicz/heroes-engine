import React from "react";

import * as styles from "./MenuOption.module.scss";

export const MenuOption: React.SFC = (props) => (
  <div className={styles.root}>
    {props.children}
  </div>
);
