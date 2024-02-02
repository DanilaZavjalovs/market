"use client"

import React, { useEffect, useState } from "react";
import styles from "./product.module.css";
import { usePathname } from "next/navigation";
import { Product } from "@/components/product/product";

export default function Page() {

  const pathname = usePathname();
  const [selectedProduct, setSelectedProduct] = useState<Product>({});

  useEffect(() => {
    const pathnameParts = pathname.split("/");

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/product/${pathnameParts[1]}`);
        const data = await response.json();

        const product: Product = data.find(item => item.id.includes(pathnameParts[2]));

        setSelectedProduct({ ...product });
        
      } catch (error: any) {
        throw new Error(error);
      }
    }
    fetchData();

  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.left__side}>

      </div>
      <div className={styles.right__side}>
        <div className={styles.title}>
          <span className={styles.title__top}>
            <h4>{selectedProduct.name}</h4>
            <p className={styles.seller}>Device shop</p>
          </span>
          <span className={styles.title__bottom}>
            <span className={styles.price}>${selectedProduct.price}</span>
            <div className={styles.buttons}>
              <button type="button" className={styles.add__button}>Add to cart</button>
              <button type="button" className={styles.fav__button}>Favorite</button>
            </div>
            <p className={styles.id}>Id: {selectedProduct.id}</p>
          </span>
        </div>
        <div className={styles.description}>
          <h4>Product Description</h4>
          <p className={styles.description__text}>{selectedProduct.description}</p>
        </div>
      </div>
    </main>
  ) 
}
