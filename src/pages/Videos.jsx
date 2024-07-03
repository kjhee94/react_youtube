import React from "react";
import styles from "./Videos.module.css";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();

  return (
    <div className={styles.result}>
      Videos {keyword}
    </div>
  );
}
