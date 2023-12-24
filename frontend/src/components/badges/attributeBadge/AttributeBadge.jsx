import styles from "./AttributeBadge.module.scss";

const AttributeBadge = ({ isActive, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={[
        styles.badge,
        isActive ? styles.badge__active : styles.badge__inactive,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default AttributeBadge;
