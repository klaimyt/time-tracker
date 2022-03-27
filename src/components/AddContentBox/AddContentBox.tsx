import { FunctionComponent as FC, h } from "preact";
import { useRef } from "preact/hooks";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import TextField from "../TextField/TextField";

import styles from "./AddContentBox.module.css";

interface AddContentBoxProps {
  onClose: () => void;
  addTask: (task: string) => void;

}

const AddContentBox: FC<AddContentBoxProps> = ({ onClose, addTask }) => {
  const textfieldRef = useRef<HTMLInputElement>(null);

  function submitHandler() {
    if (textfieldRef.current?.value) {
      addTask(textfieldRef.current.value);
      onClose();
    }
  }

  return (
    <Modal onClose={onClose}>
      <div>
        <TextField tfRef={textfieldRef} title="Task Title" name="task_title" />
        <div className={styles.buttons}>
          <Button onClick={onClose} bgColor="red" title="Cancel" />
          <Button onClick={submitHandler} bgColor="green" title="Add" />
        </div>
      </div>
    </Modal>
  );
};

export default AddContentBox;
