"use client"

import {useSearchParams, usePathname} from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./loginModal.module.css";
import Link from "next/link";

export default function LoginModal() {

  // Изменения значений во время ввода

  const [values, setValues] = useState({
    username: "",
    password: "",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  // Открытие и закрытие модального окна

  const searchParams = useSearchParams();
  const login = searchParams.get("login");
  const pathname = usePathname();

  const handleClose = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("login");
    window.history.pushState({}, '', "?" + newSearchParams.toString());
  };

  // Функция авторизации

  const [error, setError] = useState("");

  const submitData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let isEmpty = Object.values(values).some((value) => value === "");

    if (isEmpty) {
      setError("Make sure you have entered all the data correctly.");
      return;
    }

    const response = await fetch(
      "http://localhost:8080/api/auth/authenticate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setError("You have entered an incorrect login or password.");
      console.log("Неудачная авторизация");
    } else {
      console.log("Успешная авторизация");
      handleClose();
      localStorage.setItem("jwtToken", data.token);
    }
  };

  useEffect(() => {
    if (!login) setError("");
  }, [login])

  return (  
    <div className={`${styles.login} ${login ? styles.open : ""}`}>
      <div className={styles.window}>
        <h2>Login</h2>
        <form className={styles.content} onSubmit={submitData}>
          <label htmlFor="username">
            Enter your username:
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Enter your password:
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <p className={styles.error}>{error}</p>
          <button type="submit" className={styles.submit}>
            Login
          </button>
        </form>
        <Link href="?register=true">
          <h4 className={styles.create__account}>Create new account</h4>
        </Link>
      </div>
      <div className={styles.background} onClick={handleClose}>{}</div>
    </div>
  )
}