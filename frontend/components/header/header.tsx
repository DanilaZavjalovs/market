"use client";

import { useRouter } from "next/router";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.line}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              className={styles.logo}
              width={193}
              height={37}
            />
          </Link>
          <form className={styles.search}>
            <input type="text" placeholder="Searching..." />
            <button type="submit">
              <Image src="/search.svg" alt="Search" width={25} height={25} />
            </button>
          </form>
          <div className={styles.icons}>
            <Link href="?cart=true">
              <Image src="/cart.svg" alt="Cart" width={38} height={30} />
            </Link>
            <Link href="?favorite=true">
              <Image
                src="/favorite.svg"
                alt="Favorite"
                width={33}
                height={30}
              />
            </Link>
            <Link href="?login=true">
              <Image src="/profile.svg" alt="Profile" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
