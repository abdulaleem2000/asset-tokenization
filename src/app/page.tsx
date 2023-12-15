import Image from "next/image";
import Link from "next/link";
import styles from "../styles/index.module.sass";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerOne}>
          <Link href="/" className={styles.logoAnchor}>
            <Image src="/white-vector.svg" alt="Logo" width="31" height="31" />
            <p>TOKEN</p>
          </Link>
        </div>
        <div className={styles.headerTwo}>
          <p>Solution</p>
          <p>Events</p>
          <p>Resources</p>
          <p>About us</p>
          <p>Invest in TC</p>
        </div>
        <div className={styles.headerThree}>
          <Link href="/login">
            <button>Login</button>
          </Link>
          <Link href="/singup">
            <button>Singup</button>
          </Link>
        </div>
      </header>
    </main>
  );
}
