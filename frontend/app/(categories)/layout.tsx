"use client"

import Header from "@/components/header/header";
import Filters from "@/components/filters/filters";
import styles from "./page.module.css";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Filters />
        {children}
      </main>
    </>
  );
}