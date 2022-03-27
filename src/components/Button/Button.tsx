import { FunctionComponent as FC, h } from "preact";

import styles from "./Button.module.css";

interface ButtonProps {
  title: string;
  bgColor?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ title, bgColor, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
    >
      {title}
    </button>
  );
};

export default Button;
