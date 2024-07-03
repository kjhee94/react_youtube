import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const haldleSubmit = (e) => {
    e.preventDefault(); 
    navigate(`/videos/${text}`)
  }

  return (
    <header className={styles.header}>
      <Link to='/Videos' className={styles.logo}>
        <FaYoutube className={styles.icon} />
        <h1 className={styles.title}>YouTube</h1>
      </Link>
      <form className={styles.searchbar} onSubmit={haldleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="검색"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.button}>
          <IoIosSearch />
        </button>
      </form>
    </header>
  );
}
