import { ChangeEventHandler } from "react";
import styles from "./index.module.scss";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  onClick: VoidFunction;
  expand: string;
};
const Editor = ({ onChange, value, expand, onClick }: Props) => {
  return (
    <div className={`${styles.container} ${styles[expand]}`}>
      <header className="header">
        <h2>Editor</h2>
        <FontAwesomeIcon className="button" icon={faExpand} onClick={onClick} />
      </header>
      <textarea
        id="editor"
        className={styles.body}
        placeholder="Write your markdown here"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Editor;
