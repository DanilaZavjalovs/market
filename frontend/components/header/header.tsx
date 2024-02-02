"use client";

import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Header() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchValue, setSearchValue] = useState("");
  let params = new URLSearchParams(searchParams);

  // Ввод текста в поиск

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event?.target.value);
  }

  // Изменения юрл после нажатия на кнопку поиска

  const handleSearch = (event: any) => {
    event.preventDefault();
    params = new URLSearchParams(searchParams);
    params.delete("query");

    if (searchValue) {
      params.append("query", searchValue);
    }

    replace(`${pathname}?${params.toString()}`);
  }

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
          <form className={styles.search} onSubmit={handleSearch}>
            <input type="text" placeholder="Searching..." onChange={handleInput} value={searchValue} />
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
            <Link href={`?login=true&${params.toString()}`}>
              <Image src="/profile.svg" alt="Profile" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
