export const getIconUrl = (path) => {
  return new URL(`./assets/icon/${path}`, import.meta.url).href;
};

export const getImageUrl = (path) => {
  return new URL(`./assets/images/${path}`, import.meta.url).href;
};
