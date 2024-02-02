"use client"

import React, { useEffect, useState } from "react";
import Products, { Product } from "@/components/product/product";
import Filters from "@/components/filters/filters";
import { usePathname } from "next/navigation";
import styles from "../home.module.css";

export default function Page() {

  return (
    <div className={styles.main}>
      <Filters />
      <div className={styles.products}>
        <Products />
      </div>
    </div>
  );
}
