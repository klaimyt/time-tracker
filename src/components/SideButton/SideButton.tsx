import { FunctionalComponent as FC, h } from "preact";

import styles from "./SideButton.module.css";

interface SideButtonProps {
  title: string;
  className: string;
  onClick: () => void;
}

const SideButton: FC<SideButtonProps> = ({ title, className, onClick }) => {
  return (
    <div className={`${styles.sideButton} ${className}`} onClick={onClick}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default SideButton;
