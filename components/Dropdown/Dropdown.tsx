import React, { useState } from "react";
import styles from "@/components/Dropdown/Dropdown.module.css";
import { IoMdArrowDropdown } from "react-icons/io";

interface DropdownOption {
  heading?: string;
  image?: string;
  items: { label: string; href?: string }[];
}

interface DropdownProps {
  options: DropdownOption[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: "flex", cursor: "pointer" }}
      >
        Me <IoMdArrowDropdown />
      </button>

      {isOpen && (
        <div className={styles.dropdowncontent}>
          {options.map((section, index) => (
            <div key={index} className={styles.section}>
              {section.image && (
                <div className={styles.profileSection}>
                  <img
                    src={section.image}
                    alt="Profile"
                    className={styles.profileImage}
                  />
                </div>
              )}
              {section.heading && (
                <div className={styles.heading}>{section.heading}</div>
              )}
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx} className={styles.dropdownitem}>
                    <a href={item.href || "#"}>{item.label}</a>
                  </li>
                ))}
              </ul>
              {index < options.length - 1 && <hr className={styles.divider} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
