import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "./index.module.scss";
type Props = {
  value: string;
  onClick: VoidFunction;
  expand: string;
};
const Editor = ({ value, expand, onClick }: Props) => {
  return (
    <div className={`${styles.container} ${styles[expand]}`}>
      <header className="header">
        <h2>Preview</h2>
        <FontAwesomeIcon className="button" icon={faExpand} onClick={onClick} />
      </header>
      <div className={styles.body} id="preview">
        <ReactMarkdown>{value}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Editor;
