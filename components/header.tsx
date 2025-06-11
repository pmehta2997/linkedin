"use client";
import React, { useState, useCallback, useMemo } from "react";
import styles from "@/styles/page.module.css";
import { IoHome } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { GiHandBag } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import Image from "@/images/logo.png";
import Icon from "@/components/icons/icons";
import { BiBorderNone } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import profilepic from "@/images/i1.jpg";
import Dropdown from "@/components/Dropdown/Dropdown";
import Dropdownstyle from "@/components/Dropdown/Dropdown.module.css";
import Homepage from "@/components/Home/Homepage";
import ImageGallery from "@/components/ImageGallery/imageGallery";

interface HeaderProps {
  onMenuSelect: (menu: MenuItem) => void;
}

type MenuItem = "home" | "MyNetwork" | "ViewProfile" | null;

export default function Header({ onMenuSelect }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownOptions = [
    {
      heading: "",
      image: profilepic.src,
      items: [
        { label: "Pragya Mehta" },
        { label: "Experienced Dotnet Developer..." },
        { label: "View Profile" },
      ],
    },
    {
      heading: "Account",
      items: [
        { label: "Reactivate Premium: 50% Off" },
        { label: "Settings & Privacy" },
        { label: "Help" },
        { label: "Language" },
      ],
    },
    {
      heading: "Manage",
      items: [
        { label: "Posts & Activity" },
        { label: "Job Posting Account" },
        { label: "Sign Out" },
      ],
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("clicked", e.target.value);
    setSearchTerm(e.target.value);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <img src={Image.src} alt="LinkedIn" className={styles.logo} />
        <div className={styles.sicon}>
          <span>
            {" "}
            <FaSearch />
          </span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />{" "}
        </div>
        <span className={styles.searchicon}>
          <FaSearch />
        </span>
      </div>

      <nav className={styles.nav}>
        <a
          onClick={() => onMenuSelect("home")}
          className={`${styles.navItem} ${styles.active}`}
        >
          <Icon>
            <IoHome />
          </Icon>
          Home
        </a>

        <a onClick={() => onMenuSelect("MyNetwork")} className={styles.navItem}>
          <Icon>
            <FaUserFriends />
          </Icon>
          My Network
        </a>
        <a className={styles.navItem}>
          <Icon>
            <GiHandBag />
          </Icon>
          <span> Jobs</span>
        </a>

        <div
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiMenu size={24} />
        </div>

        {isMenuOpen && (
          <div className={Dropdownstyle.dropdownMenu}>
            <a className={styles.navItem}>
              <img
                src={profilepic.src}
                alt="Me"
                style={{ width: 24, height: 24, borderRadius: "50%" }}
              />
            </a>
            <div className={styles.navItem}>
              <Icon>
                <BiBorderNone />
              </Icon>
            </div>
          </div>
        )}

        <div className={styles.rightIcons}>
          <a className={styles.navItem}>
            <Icon>
              <AiOutlineMessage />
            </Icon>
            Messaging
          </a>
          <a className={styles.navItem}>
            <Icon>
              <FaBell />
            </Icon>
            Notifications
          </a>
          <a className={styles.navItem}>
            <img
              src={profilepic.src}
              alt="Me"
              style={{ width: 32, height: 32, borderRadius: "50%" }}
            />
            <Dropdown options={dropdownOptions} />
          </a>
          <a
            className={styles.navItem}
            style={{ borderLeft: "0.5px solid #ccc" }}
          >
            <Icon>
              <BiBorderNone />
            </Icon>
            <div style={{ display: "flex" }}>
              For Business
              <IoMdArrowDropdown />
            </div>
          </a>
          <div className={styles.navItem}>
            <a href="#" style={{ textAlign: "center" }}>
              Buy Premium <br /> 50% off
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
