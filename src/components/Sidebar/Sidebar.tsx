import { FunctionalComponent as FC, h } from "preact";
import SideButton from "../SideButton/SideButton";

import styles from "./Sidebar.module.css";

interface SidebarProps {
  openModal: () => void;
  isActive: boolean;
  tasks: Task[];
  chooseTask: (id: number) => void;
  actionClick: () => void;
}

const Sidebar: FC<SidebarProps> = ({
  openModal,
  isActive,
  tasks,
  chooseTask,
  actionClick
}) => {
  const actionText = isActive ? "Stop" : "Start";

  return (
    <div className={styles.sidebar}>
      <div className={styles.actionBar}>
        <div></div>
        <div onClick={actionClick}>{actionText}</div>
        <div onClick={openModal}>+</div>
      </div>
      {tasks.map((task) => (
        <SideButton
          onClick={() => chooseTask(task.id)}
          className={styles.sideButton}
          title={task.text}
        />
      ))}
    </div>
  );
};

export default Sidebar;
