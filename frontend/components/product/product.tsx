import styles from "./products.module.css";
import Image from "next/image";

export type Product = {
  name: string;
  categoryId: string;
};

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <div className={styles.products}>
      {products.map((item, index) => (
        <div className={styles.product} key={index}>
          <Image src="" alt="Image" width={240} height={190} />
          <div className={styles.text}>
            <p>{item.name}</p>
            <span className={styles.bottom}>
              <h4>$50</h4>
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
