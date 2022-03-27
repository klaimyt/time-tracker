import { FunctionComponent as FC, h } from "preact";
import ContentBox from "../../components/ContentBox/ContentBox";

import styles from "./MainContent.module.css";

interface MainContentProps {
    text: string;
    time: any;
}

const MainContent: FC<MainContentProps> = ({ text, time }) => {
  return (
    <div className={`container-center ${styles.mainContent}`}>
      <ContentBox>
        <div className="font-40px">{text}</div>
        <div className={styles.timer}>{`${time.h} Hours ${time.m} Minutes ${time.s} Seconds`}</div>
      </ContentBox>
    </div>
  );
};

export default MainContent;
