import {useState} from "react";
import {useTheme} from "../../../Context/Theme-Context";

const AddLinkModal = ({setIsAddLink}) => {
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const {themeObject} = useTheme();

  const handleAddLink = () => {};
  return (
    <div
      className="modal-overlay"
      onClick={() => setIsAddLink((prev) => !prev)}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{backgroundColor: themeObject.primary}}
      >
        <input
          type="text"
          placeholder="Link Title"
          className="add-link-input"
          value={linkTitle}
          onChange={(e) => setLinkTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link URL"
          className="add-link-input"
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
        />
        <button onClick={handleAddLink} className="btn-create-link">
          Create Shortcut
        </button>
      </div>
    </div>
  );
};

export {AddLinkModal};
