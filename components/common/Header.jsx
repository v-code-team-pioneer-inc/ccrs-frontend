import Link from 'next/link';
import Image from "next/image";
import styles from '~/styles/common/Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className='ml-3'>
          <Image src="/images/logo.png" alt="logo" width={70} height={70} />
        </a>
      </Link>
    </header>
  );
};
