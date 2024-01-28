import React from "react";
import Aside from '../../components/aside/aside';
import './homePage.css';
import fav from '../../assets/item_favorite.svg';

function HomePage() {
  return (
    <div className="home__page container">
      <Aside />
      <main>
        <div className="product__item">
          <img src="https://content1.rozetka.com.ua/goods/images/big/252395009.jpg" alt="Product" className="item__img" />
          <div className="item__text">
            <p>Mouse Logitech G305</p>
            <span className="item__bottom">
              <h4>$ 50</h4>
              <span className="item__buttons">
                <button className="buy__button" type="button">Buy</button>
                <button className="fav__button" type="button">
                  <img src={fav} alt="Add to favorite" />
                </button>
              </span>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
