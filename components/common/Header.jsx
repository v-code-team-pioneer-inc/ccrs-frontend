// TODO: 恒松さん実装お願いします
//       divの中に実装をお願いします
//       CSSはHeader.module.cssを使用してください
//       http://localhost:3000/ に実装が反映されます

import styles from '~/styles/common/Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>中央大学 教室検索</h1>
    </header>
  );
};
