import "./Search.css";
import { useState } from "react";
import { useTheme } from "../../Context/Theme-Context";
import { useShortLink } from "../../Context/shortLink-context";
import { AddLinkModal } from "./components/AddLinkModal";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const { themeObject } = useTheme();
  const {
    searchState,
    searchData,
    handleSubmit,
    changeHandler,
    isAddLink,
    setIsAddLink,
    handleDelete,
  } = useShortLink();

  const handleSearchResult = (e) => {
    if (e.key === "Enter") {
      window.open(`https://www.google.com/search?q=${searchInput}`, "_blank");
      setSearchInput("");
    }
  };

  const handleDeleteLink = (item) => {
    console.log(item);
  };
  return (
    <section
      className="search-ctn rounded-xl"
      style={{ backgroundColor: themeObject.secondary }}
    >
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
          className="h-14 w-14 rounded-full bg-cyan-500 flex items-center justify-center"
          onClick={() => setIsAddLink((prev) => !prev)}
        >
          <span className="material-icons ">add</span>
        </button>
      </div>
      <div className="links-ctn">
        {searchData.map((item) => {
          let domain = new URL(item.URL);
          domain = domain.hostname.replace("www.", "");
          return (
            <>
              <button
                className="delete-link"
                onClick={(e) => handleDelete(item.id)}
              >
                <span class="material-symbols-outlined">close</span>
              </button>
              <a
                key={item.id}
                href={item.URL}
                target="_blank"
                className="link"
              >
                <div className="favicon-ctn">
                  <img
                    src={`https://api.faviconkit.com/${domain}/100`}
                    alt={item.title}
                    className="site-favicon"
                  />
                </div>
                <span style={{ color: themeObject.text }}>{item.title}</span>
              </a>
            </>
          );
        })}
      </div>
      {isAddLink && <AddLinkModal setIsAddLink={setIsAddLink} />}
    </section>
  );
};

export default Search;
