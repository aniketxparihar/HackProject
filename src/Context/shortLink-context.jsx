import {useContext, createContext, useReducer} from "react";
import {v4 as uuid} from "uuid";
import {searchFavicon} from "../Pages/Search/searchFavicon";

const ShortLinkContext = createContext();

const initialShortLink = [
  
  {
    id: uuid(),
    title: "github",
    link: "https://github.com",
    icon: searchFavicon("https://github.com"),
  },
  {
    id: uuid(),
    title: "twitter",
    link: "https://twitter.com",
    icon: searchFavicon("https://twitter.com"),
  },
];

const shortLinkReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SHORT_LINK":
      return [...state, action.payload];
    case "REMOVE_SHORT_LINK":
      return {state};
    default:
      return {state};
  }
};

const ShortLinkProvider = ({children}) => {
  const [shortLinkState, shortLinkDispatch] = useReducer(
    shortLinkReducer,
    initialShortLink
  );
  return (
    <ShortLinkContext.Provider value={{shortLinkState, shortLinkDispatch}}>
      {children}
    </ShortLinkContext.Provider>
  );
};

const useShortLink = () => useContext(ShortLinkContext);

export {useShortLink, ShortLinkProvider};
