"use client"

import React, { useEffect, useState } from "react";
import Products, { Product } from "@/components/product/product";
import Filters from "@/components/filters/filters";
import { usePathname } from "next/navigation";
import styles from "../home.module.css";

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/product${pathname}`);
        const data: Product[] = await response.json();

        setProducts(data);
      } catch (error: any) {
        throw new Error("Ошибка:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <main className={styles.main}>
      <Filters />
      <div className={styles.products}>
        <Products products={products}/>
      </div>
    </main>
  );
}
