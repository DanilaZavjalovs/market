import React, { useEffect, useState } from "react";
import styles from "./filters.module.css";
import Link from "next/link";

type Category = {
  name: string;
  id: string;
};

export default function Filters() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/category/all");
        const data: Category[] = await response.json();
        setCategories(data);
      } catch (error: any) {
        throw new Error("Ошибка", error);
      }
    };

    fetchData();
  }, []);

  return (
    <aside className={styles.aside}>
      <div className={styles.content}>
        <div className={styles.categories}>
          <h4>Categories</h4>
          <ul className={styles.categories__list}>
            {categories.map((el) => (
              <Link href={`/${el.id}`} key={el.id}>
                {el.name.charAt(0).toUpperCase() + el.name.slice(1)}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
