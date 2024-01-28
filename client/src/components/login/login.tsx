import React, { useState } from 'react';
import './login.css';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../actions/loginReducer';
import { openRegisterModal } from '../../actions/registerReducer';

function LoginModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.loginModal.isOpen);

  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackgroundClick = (event: React.KeyboardEvent | React.MouseEvent) => {
    event.stopPropagation();
    dispatch(closeModal());
  };

  const openRegister = () => {
    dispatch(closeModal());
    dispatch(openRegisterModal());
  };

  return (
    <div className={`login__window ${isOpen ? 'open' : ''}`}>
      <div className="login__content">
        <h2>Login</h2>
        <form className="login__form">
          <label htmlFor="username">
            Enter your username:
            <input type="text" id="username" name="username" value={values.username} onChange={handleChange} />
          </label>
          <label htmlFor="password">
            Enter your password:
            <input type="password" id="password" name="password" value={values.password} onChange={handleChange} />
          </label>
          <p>Remember me</p>
          <p>{}</p>
          <button type="submit" className="login__submit">Login</button>
        </form>
        <button type="button" className="login__create__account" onClick={openRegister}>
          Create new account
        </button>
      </div>
      <div className="background" onClick={handleBackgroundClick} onKeyDown={handleBackgroundClick} role="button" tabIndex={0}>{}</div>
    </div>
  );
}

export default LoginModal;
