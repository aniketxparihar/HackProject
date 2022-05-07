import "./Search.css";
import {useState} from "react";
import {useTheme} from "../../Context/Theme-Context";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const {themeObject} = useTheme();

  const handleSearchResult = (e) => {
    if (e.key === "Enter") {
      window.open(`https://www.google.com/search?q=${searchInput}`, "_blank");
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
          style={{
            backgroundColor: themeObject.primary,
            color: themeObject.text,
          }}
        >
          <span className="material-icons pr-2">add</span>Add Link
        </button>
      </div>
      <div className="links-ctn"></div>
    </section>
  );
};

export default Search;
