"use client"

import styles from "./home.module.css";
import Products, { Product } from "@/components/product/product";
import Filters from "@/components/filters/filters";
import React, { useState } from "react";

export default function Home() {

  return (
    <>
      <main className={styles.main}>
        <Filters />
        <div className={styles.products}>
          <Products />
        </div>
      </main>
    </>
  );
}
