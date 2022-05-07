import "./Search.css";
import {useState} from "react";
import {useTheme} from "../../Context/Theme-Context";
import {useShortLink} from "../../Context/shortLink-context";
import {AddLinkModal} from "./components/AddLinkModal";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isAddLink, setIsAddLink] = useState(false);
  const {themeObject} = useTheme();
  const {shortLinkState, shortLinkDispatch} = useShortLink();

  const handleSearchResult = (e) => {
    if (e.key === "Enter") {
      window.open(`https://www.google.com/search?q=${searchInput}`, "_blank");
      setSearchInput("");
    }
  };
  return (
    <section className="search-ctn">
      <div className="search-head">
        <div
          className="search-bar"
          style={{
            backgroundColor: themeObject.primary,
            color: themeObject.text,
          }}
        >
          <span className="material-icons search-icon">search</span>
          <input
            type="text"
            placeholder="Seach web"
            autoFocus
            className="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={(e) => handleSearchResult(e)}
          />
        </div>
        <button
          className="btn-add-link"
          // style={{
          //   backgroundColor: themeObject.primary,
          //   color: themeObject.text,
          // }}
          onClick={() => setIsAddLink((prev) => !prev)}
        >
          <span className="material-icons pr-2">add</span>Add Link
        </button>
      </div>
      <div className="links-ctn">
        {/* <i className="fab fa-twitter link-icon"></i>
        <i className="fab fa-linkedin-in link-icon"></i>
        <i className="fab fa-github link-icon"></i>
        <i className="fab fa-youtube link-icon"></i>
        <i className="fab fa-instagram link-icon"></i>
        <i className="fab fa-facebook link-icon"></i> */}
        {shortLinkState.map((item) => (
          <a key={item.id} href={item.link} target="_blank">
            <div>
              <i className={`${item.icon} link-icon`}></i>
            </div>
            <p>{item.title}</p>
          </a>
        ))}
      </div>
      {isAddLink && <AddLinkModal setIsAddLink={setIsAddLink} />}
    </section>
  );
};

export default Search;
