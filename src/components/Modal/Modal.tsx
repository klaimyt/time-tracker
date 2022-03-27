import { FunctionComponent as FC, h } from "preact";
import ContentBox from "../ContentBox/ContentBox";

import styles from "./Modal.module.css";

interface ModalProps {
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  function outsideClickHandler(e: any) {
    if (e.target.className === "container-center") {
      onClose();
    }
  }
  return (
    <div className={styles.modal} onClick={outsideClickHandler}>
      <div className="container-center">
        <ContentBox>{children}</ContentBox>
      </div>
    </div>
  );
};

export default Modal;
