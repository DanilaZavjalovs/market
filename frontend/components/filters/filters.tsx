import React, { useEffect, useState } from "react";
import styles from "./filters.module.css";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

type Category = {
  name: string;
  id: string;
};

export default function Filters() {
  const [categories, setCategories] = useState<Category[]>([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [minPriceValue, setMinPriceValue] = useState("");
  const [maxPriceValue, setMaxPriceValue] = useState("");

  const handleChangeMin = (event: any) => {
    setMinPriceValue(event.target.value)
  }

  const handleChangeMax = (event: any) => {
    setMaxPriceValue(event.target.value)
  }

  let params = new URLSearchParams(searchParams);

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

  const handleFilter = (event: any) => {
    event.preventDefault();
    params = new URLSearchParams(searchParams);
    params.delete("query");
    params.delete("min");
    params.delete("max");


    if (minPriceValue) {
      params.append("min", minPriceValue);
    }

    if (maxPriceValue) {
      params.append("max", maxPriceValue);
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.content}>
        <div className={styles.categories}>
          <h4>Categories</h4>
          <ul className={styles.categories__list}>
            {categories.map((el) => (
              <Link href={`/${el.name.replace(/&/g, 'and').replace(/[\s]/g, '-')}`} key={el.id} className={styles.link}>
                <p>{el.name}</p>
              </Link>
            ))}
          </ul>
        </div>
        <div className={styles.price}>
          <h4>Price</h4>
          <form className={styles.price__list} onSubmit={handleFilter}>
              <input type="number" placeholder="Min $" value={minPriceValue} onChange={handleChangeMin} />
              <input type="number" placeholder="Max $" value={maxPriceValue} onChange={handleChangeMax} />
              <button type="submit">Ok</button>
          </form>
        </div>
      </div>
    </aside>
  );
}
