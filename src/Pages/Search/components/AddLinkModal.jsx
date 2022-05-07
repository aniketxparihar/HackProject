import {useState} from "react";

const AddLinkModal = ({isAddLink}) => {
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const handleAddLink = () => {};
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <input
          type="text"
          placeholder="Link Title"
          value={linkTitle}
          onChange={(e) => setLinkTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link URL"
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
        />
        <button onClick={handleAddLink}>Create Shortcut</button>
      </div>
    </div>
  );
};

export {AddLinkModal};
