import styles from "@/styles/page.module.css";
import { ReactNode } from "react";

export default function postReaction() {
  return (
    <div className={styles.postReaction}>
      <div className={styles.buttonGroup}>
        <button className={styles.video}> Like</button>
        <button className={styles.photo}> Comment</button>
        <button className={styles.article}> Repost</button>
        <button className={styles.article}> Share</button>
      </div>
    </div>
  );
}
