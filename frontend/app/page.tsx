"use client"

import Image from "next/image";
import styles from "./home.module.css";
import Products from "@/components/product/product";
import Filters from "@/components/filters/filters";
import Header from "@/components/header/header";
import React, { useState } from "react";

type Product = {
  name: string,
  categoryId: string;
}

export default function Home() {
  const [products, setProducts] = useState([
    {
      name: "No category",
      categoryId: "1",
      id: "1321",
    },
  ])

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
