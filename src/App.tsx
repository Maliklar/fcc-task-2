import { ChangeEventHandler, useState } from "react";
import "./App.scss";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { INITIAL_MARKDOWN } from "./utils/constants";

function App() {
  const [editorValue, setEditorValue] = useState(INITIAL_MARKDOWN);

  const [eExpand, setEExpand] = useState("default");
  const [pExpand, setPExpand] = useState("default");

  const editorChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setEditorValue(e.target.value);
  };

  const expandEditor = () => {
    if (eExpand === "expand") defaultAll();
    else {
      setEExpand("expand");
      setPExpand("shrink");
    }
  };

  const expandPreviewer = () => {
    if (pExpand === "expand") defaultAll();
    else {
      setPExpand("expand");
      setEExpand("shrink");
    }
  };

  const defaultAll = () => {
    setEExpand("default");
    setPExpand("default");
  };

  return (
    <div className="App">
      <Editor
        onChange={editorChangeHandler}
        value={editorValue}
        onClick={expandEditor}
        expand={eExpand}
      />
      <div className="divider" />
      <Previewer
        value={editorValue}
        onClick={expandPreviewer}
        expand={pExpand}
      />
    </div>
  );
}

export default App;
