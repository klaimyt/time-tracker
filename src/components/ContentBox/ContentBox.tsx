import { FunctionComponent as FC, h } from "preact"

import styles from "./ContentBox.module.css"

const ContentBox: FC = ({children}) => {
  return (
    <div className={styles.contentBox}>{children}</div>
  )
}

export default ContentBox