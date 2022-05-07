import {useState} from "react";
import {v4 as uuid} from "uuid";
import {useTheme} from "../../../Context/Theme-Context";
import {useShortLink} from "../../../Context/shortLink-context";
import {searchFavicon} from "../searchFavicon";

const AddLinkModal = ({setIsAddLink}) => {
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const {themeObject} = useTheme();
  const {shortLinkState, shortLinkDispatch} = useShortLink();
  const handleAddLink = (e) => {
    e.preventDefault();
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
        <form className="add-link-form" onSubmit={handleAddLink}>
          <input
            type="text"
            placeholder="Link Title"
            className="add-link-input"
            required
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
            required
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          />
          <button className="btn-create-link">Create Shortcut</button>
        </form>
      </div>
    </div>
  );
};

export {AddLinkModal};
