"use client"

import React from "react";
import styles from "./product.module.css";

export default function Page() {

  return (
    <main className={styles.main}>
      <div className={styles.left__side}>

      </div>
      <div className={styles.right__side}>
        <div className={styles.title}>
          <span className={styles.title__top}>
            <h4>Product name</h4>
            <p className={styles.seller}>Device shop</p>
          </span>
          <span className={styles.title__bottom}>
            <span className={styles.price}>$50</span>
            <div className={styles.buttons}>
              <button type="button" className={styles.add__button}>Add to cart</button>
              <button type="button" className={styles.fav__button}>Favorite</button>
            </div>
            <p className={styles.id}>Id: 3123213123</p>
          </span>
        </div>
        <div className={styles.description}>
          <h4>Product Description</h4>
          <p className={styles.description__text}>Description</p>
        </div>
      </div>
    </main>
  ) 
}
