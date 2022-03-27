import { FunctionComponent as FC, h, Ref } from "preact";

import styles from "./TextField.module.css";

interface TextFieldProps {
  title: string;
  name: string;
  tfRef: Ref<HTMLInputElement>;
}

const TextField: FC<TextFieldProps> = ({ title, name, tfRef }) => {
  return (
    <div className={styles.textField}>
      <label className={styles.title} for={name}>{title}</label>
      <input ref={tfRef} className={styles.inputField} name={name} type="text" autocomplete="off"></input>
    </div>
  );
};

export default TextField;
