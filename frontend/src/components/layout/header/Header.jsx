import SettingsDropdown from "../../dropdowns/settingsDropdown/SettingsDropdown";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.brand}>MageTales</h1>
        <SettingsDropdown />
      </div>
    </div>
  );
};

export default Header;
