"use client"

import styles from "./home.module.css";
import Products, { Product } from "@/components/product/product";
import Filters from "@/components/filters/filters";
import React, { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product>([]);

  return (
    <>
      <main className={styles.main}>
        <Filters />
        <div className={styles.products}>
          <Products products={products}/>
        </div>
      </main>
    </>
  );
}
