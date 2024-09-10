import React from "react";

import styles from "./NotFoundBlock.module.scss";

console.log(styles);

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Нічого не знайдено
      </h1>
      <p className={styles.description}>На жаль, така сторінка відсутня</p>
    </div>
  );
};

export default NotFound;
