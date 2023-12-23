import { useState, useEffect, useRef } from "react";
import { logoutUser } from "../../../utils/authApi";
import SettingsIcon from "../../icons/SettingsIcon";
import styles from "./SettingsDropdown.module.scss";

const SettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={styles.dropdown__button}
        onClick={() => setIsOpen(!isOpen)}
      >
        <SettingsIcon className={styles.button__icon} />
      </button>
      {isOpen && (
        <div className={styles.dropdown__menu}>
          <ul className={styles.dropdown__menu__list}>
            <li className={styles.dropdown__menu__list__item}>
              <span>Personnage</span>
            </li>
            <li className={styles.dropdown__menu__list__item}>
              <span onClick={() => logoutUser()}>Déconnection</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SettingsDropdown;
