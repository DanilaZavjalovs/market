"use client"

import React, { useState } from "react";
import Products, { Product } from "@/components/product/product";
import styles from "../page.module.css";

export default function Page() {
  const [products, setProducts] = useState<Product []>([
    {
      name: "Clothes",
      categoryId: "1",
    },
  ])

  return (
    <div className={styles.products}>
      <Products products={products}/>
    </div>
  )
}