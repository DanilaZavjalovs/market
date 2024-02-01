"use client";

import { useSearchParams, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import styles from "./registerModal.module.css";

export default function RegisterModal() {
  // Изменения значений во время ввода

  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
    repeatedPassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  // Открытие и закрытие модального окна

  const searchParams = useSearchParams();
  const register = searchParams.get("register");
  const pathname = usePathname();

  const handleClose = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("register");
    window.history.pushState({}, "", "?" + newSearchParams.toString());
  };

  // Функция авторизации

  const [error, setError] = useState("");

  const submitData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let isEmpty = Object.values(values).some((value) => value === "");

    if (isEmpty || values.repeatedPassword !== values.password) {
      setError("Make sure you have entered all the data correctly.");
      return;
    }

    const response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        username: values.username,
        password: values.password,
      }),
    });

    if (!response.ok) {
      setError("You have entered an incorrect login or password.");
    } else {
      console.log("Успешная авторизация");
      handleClose();
    }

    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    if (!register) setError("");
  }, [register])

  return (
    <div className={`${styles.register} ${register ? styles.open : ""}`}>
      <div className={styles.window}>
        <h2>Register</h2>
        <form className={styles.content} onSubmit={submitData}>
          <label htmlFor="register-email">
            Enter your email:
            <input
              type="email"
              id="register-email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="register-username">
            Enter your username:
            <input
              type="text"
              id="register-username"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="register-password">
            Enter your password:
            <input
              type="password"
              id="register-password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="register-repeat_password">
            Repeat your password:
            <input
              type="password"
              id="register-repeat_password"
              name="repeatedPassword"
              value={values.repeatedPassword}
              onChange={handleChange}
            />
          </label>
          <p className={styles.error}>{error}</p>
          <button type="submit" className={styles.submit}>
            Register
          </button>
        </form>
      </div>
      <div
        className={styles.background}
        onClick={handleClose}
      >
        {}
      </div>
    </div>
  );
}
