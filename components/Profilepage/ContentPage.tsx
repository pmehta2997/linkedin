import React from "react";
import styles from "@/components/Profilepage/Contentpage.module.css";
import bgImage from "@/images/1629112074798.jpg";
import { useUser } from "@/app/page";

export default function ContentPage() {
  const { user } = useUser();
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={bgImage.src} alt="Banner" className={styles.bannerImage} />
        <img
          src={user.profilePic}
          alt="Profile"
          className={styles.profileImage}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.nameSection}>
          <h2>
            {user.name} <span className={styles.pronouns}>She/Her</span>
          </h2>
          <p className={styles.description}>
            {user.jobTitle} with Proficiency in .NET Framework and jQuery
          </p>
          <p className={styles.location}>
            Bengaluru, Karnataka, India <a href="#">Contact info</a>
          </p>
          <p className={styles.connections}>347 connections</p>
        </div>

        <div className={styles.actions}>
          <button className={`${styles.button} ${styles.open}`}>Open to</button>
          <button className={styles.button}>Add profile section</button>
          <button className={styles.button}>Enhance profile</button>
          <button className={styles.button}>Resources</button>
        </div>

        <div className={styles.infoBoxes}>
          <div className={styles.infoBox}>
            <strong>Open to work</strong>
            <p>
              <a href="#">Software Developer roles</a>
            </p>
            <a href="#" className={styles.link}>
              Show details
            </a>
          </div>
          <div className={styles.infoBox}>
            <p>Share that you're hiring and attract qualified candidates</p>
            <a href="#" className={styles.link}>
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
