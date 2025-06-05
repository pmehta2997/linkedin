"use client";
import { useState } from "react";
import styles from "@/styles/page.module.css";
import { IoHome } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { GiHandBag } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>

            <div className={styles.leftSection}>
                <img src="/linkedin-logo.png" alt="LinkedIn" className={styles.logo} />
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search"
                />
                <span className={styles.searchicon}><FaSearch /></span>
            </div>


            <nav className={styles.nav}>
                <div className={`${styles.navItem} ${styles.active}`}>
                    <span className={styles.icon}><IoHome /></span>
                    Home
                </div>
                <div className={styles.navItem}>
                    <span className={styles.icon}><FaUserFriends /></span>
                    <br />
                    My Network
                </div>
                <div className={styles.navItem}>
                    <span className={styles.icon}><GiHandBag /></span>
                    <span> Jobs</span>
                </div>


                <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <HiMenu size={24} />
                </div>


                {isMenuOpen && (
                    <div className={styles.dropdownMenu}>
                        <div className={styles.navItem}>
                            <span className={styles.icon}><AiOutlineMessage /></span>
                            Messaging
                        </div>
                        <div className={styles.navItem}>
                            <span className={styles.icon}><FaBell /></span>
                            Notifications
                        </div>
                        <div className={styles.navItem}>
                            <img
                                src="/profile.jpg"
                                alt="Me"
                                style={{ width: 24, height: 24, borderRadius: "50%" }}
                            />
                            Me ▼
                        </div>
                    </div>
                )}


                <div className={styles.rightIcons}>
                    <div className={styles.navItem}>
                        <span className={styles.icon}><AiOutlineMessage /></span>
                        Messaging
                    </div>
                    <div className={styles.navItem}>
                        <span className={styles.icon}><FaBell /></span>
                        Notifications
                    </div>
                    <div className={styles.navItem}>
                        <img
                            src="/profile.jpg"
                            alt="Me"
                            style={{ width: 24, height: 24, borderRadius: "50%" }}
                        />
                        Me ▼
                    </div>
                </div>
            </nav>
        </header>
    );
}