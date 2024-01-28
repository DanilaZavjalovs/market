import React from 'react';
import { useDispatch } from 'react-redux';
import './header.css';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import cart from '../../assets/cart.svg';
import profile from '../../assets/profile.svg';
import favorite from '../../assets/favorite.svg';
import { openModal } from '../../actions/loginReducer';

function Header() {
  const dispatch = useDispatch();

  const handleOpenLogin = () => {
    dispatch(openModal());
  };

  return (
    <header>
      <div className="container">
        <div className="header__line">
          <img src={logo} alt="Logo" className="header__logo" />
          <form action="" className="header__search">
            <input type="text" placeholder="Searching..." />
            <button type="submit">
              <img src={search} alt="Search" />
            </button>
          </form>
          <div className="header__icons">
            <button type="button">
              <img src={cart} alt="Cart" />
            </button>
            <button type="button">
              <img src={favorite} alt="Favorite" />
            </button>
            <button type="button" onClick={handleOpenLogin}>
              <img src={profile} alt="Profile" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
