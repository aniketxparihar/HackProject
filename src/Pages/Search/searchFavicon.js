const searchFavicon = (url) => {
  const favImg = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=64`;
  return favImg;
};

export {searchFavicon};
