import {useState} from "react";
import {v4 as uuid} from "uuid";
import {useTheme} from "../../../Context/Theme-Context";
import {useShortLink} from "../../../Context/shortLink-context";
import {searchFavicon} from "../searchFavicon";

const AddLinkModal = ({setIsAddLink}) => {
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const {themeObject} = useTheme();
  const {shortLinkDispatch} = useShortLink();
  const handleAddLink = () => {
    shortLinkDispatch({
      type: "ADD_SHORT_LINK",
      payload: {
        id: uuid(),
        title: linkTitle,
        link: linkUrl,
        icon: searchFavicon(linkUrl),
      },
    });
    setIsAddLink((prev) => !prev);
  };
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
          style={{
            backgroundColor: themeObject.secondary,
            color: themeObject.text,
          }}
          value={linkTitle}
          onChange={(e) => setLinkTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link URL"
          className="add-link-input"
          style={{
            backgroundColor: themeObject.secondary,
            color: themeObject.text,
          }}
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
