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
    <section
      className="search-ctn rounded-xl"
      style={{backgroundColor: themeObject.primary}}
    >
      <div className="search-head">
        <div
          className="search-bar"
          style={{
            backgroundColor: themeObject.secondary,
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
          className="h-14 w-14 rounded-full bg-cyan-500 flex items-center justify-center"
          onClick={() => setIsAddLink((prev) => !prev)}
        >
          <span className="material-icons ">add</span>
        </button>
      </div>
      <div className="links-ctn">
        {shortLinkState.map((item) => (
          <a key={item.id} href={item.link} target="_blank">
            <div className="favicon-ctn">
              <img src={item.icon} alt={item.title} className="site-favicon" />
            </div>
            <p style={{color: themeObject.text}}>{item.title}</p>
          </a>
        ))}
      </div>
      {isAddLink && <AddLinkModal setIsAddLink={setIsAddLink} />}
    </section>
  );
};

export default Search;
