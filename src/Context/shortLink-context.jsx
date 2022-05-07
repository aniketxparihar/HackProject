import {useContext, createContext, useReducer} from "react";
import {v4 as uuid} from "uuid";
const ShortLinkContext = createContext();

const initialShortLink = [
  {
    id: uuid(),
    title: "youtube",
    link: "https://youtube.com",
    icon: "fab fa-youtube",
  },
  {
    id: uuid(),
    title: "github",
    link: "https://github.com",
    icon: "fab fa-github",
  },
  {
    id: uuid(),
    title: "twitter",
    link: "https://twitter.com",
    icon: "fab fa-twitter",
  },
];

const shortLinkReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SHORT_LINK":
      return {state};
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
