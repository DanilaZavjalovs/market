import styles from "./products.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export type Product = {
  id: string,
  name: string,
  description: string,
  price: number,
  categoryId: {
    name: string,
    id: string,
  }
};

export default function Products() {
  const pathname = usePathname();
  let newPathname = pathname.replace(/-/g, ' ').replace(/and/g, '&');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([...products]);

  // Поиск по товарам и сортировка по цене

  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  const minPrice = searchParams.get("min");
  const maxPrice = searchParams.get("max");

  useEffect(() => {
    let filtered = [...products];

    if (search) {
      const newSearch = search.toLowerCase();
      filtered = filtered.filter(product => product.name.toLowerCase().includes(newSearch));
    }

    if (minPrice) {
      filtered = filtered.filter(product => product.price >= Number(minPrice));
    }

    if (maxPrice) {
      filtered = filtered.filter(product => product.price <= Number(maxPrice));
    }

    setFilteredProducts(filtered);

  }, [search, minPrice, maxPrice, products])

  // Если мы переходим на главную, у нас отображается весь список товаров (особенности бека)

  if (newPathname === "/") newPathname = "";

  // Получение списка товаров после открытия страницы

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/product${newPathname}`);
        const data: Product[] = await response.json();

        setProducts(data);
      } catch (error: any) {
        throw new Error(error);
      }
    }
    fetchData();
  }, [])
  

  return (
    <div className={styles.products}>
      {filteredProducts.map((product, index) => (
        <div className={styles.product} key={index}>
          <Image src="" alt="Image" width={240} height={190} />
          <div className={styles.text}>
          <Link href={`/${product.categoryId.name}/${product.id}`} className={styles.name}>{product.name}</Link>
            <span className={styles.bottom}>
              <h4>${product.price}</h4>
              <span className={styles.buttons}>
                <button className={styles.buy}>Buy</button>
                <button className={styles.favorite}>
                  <Image
                    src="/item_favorite.svg"
                    alt="Add to favorite"
                    width={25}
                    height={22}
                  />
                </button>
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
