import React, { useState } from 'react';
import './register.css';
import { useSelector, useDispatch } from 'react-redux';
import { closeRegisterModal } from '../../actions/registerReducer';

function RegisterModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.registerModal.isOpen);

  const [values, setValues] = useState({
    email: '',
    password: '',
    repeatedPassword: '',
    username: '',
  });

  const handleBackgroundClick = (event: React.KeyboardEvent | React.MouseEvent) => {
    event.stopPropagation();
    dispatch(closeRegisterModal());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className={`register__window ${isOpen ? 'open' : ''}`}>
      <div className="register__content">
        <h2>Register</h2>
        <form className="register__form" onSubmit={submitData}>
          <label htmlFor="register-email">
            Enter your email:
            <input type="email" id="register-email" name="email" value={values.email} onChange={handleChange} />
          </label>
          <label htmlFor="register-username">
            Enter your username:
            <input type="text" id="register-username" name="username" value={values.username} onChange={handleChange} />
          </label>
          <label htmlFor="register-password">
            Enter your password:
            <input type="password" id="register-password" name="password" value={values.password} onChange={handleChange} />
          </label>
          <label htmlFor="register-repeat_password">
            Repeat your password:
            <input type="password" id="register-repeat_password" name="repeatedPassword" value={values.repeatedPassword} onChange={handleChange} />
          </label>
          <p>{}</p>
          <button type="submit" className="register__submit">Register</button>
        </form>
        <button type="button" className="register__create__account">
          Sign in
        </button>
      </div>
      <div className="background" onClick={handleBackgroundClick} onKeyDown={handleBackgroundClick} role="button" tabIndex={0}>{}</div>
    </div>
  );
}

export default RegisterModal;
