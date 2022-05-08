
import {useTheme} from "../../../Context/Theme-Context";
import {useShortLink} from "../../../Context/shortLink-context";

const AddLinkModal = ({setIsAddLink}) => {
  const {themeObject} = useTheme();
  const {searchState,handleSubmit,changeHandler}=useShortLink();

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
          name="title"
          value={searchState.title}
          onChange={(e) => changeHandler(e)}
        />
        <input
          type="text"
          placeholder="Link URL"
          className="add-link-input"
          style={{
            backgroundColor: themeObject.secondary,
            color: themeObject.text,
          }}
          name="URL"
          value={searchState.URL}
          onChange={(e) => changeHandler(e)}
        />
        <button onClick={handleSubmit} className="btn-create-link">
          Create Shortcut
        </button>
      
      </div>
    </div>
  );
};

export {AddLinkModal};
