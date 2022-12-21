type KEY_STORAGE = keyof typeof StorageKey;
const StorageKey = {
  TOKEN: '@TOKEN', // object
  USER: '@USER', // object
  PROVINCES: '@PROVINCES', // JSON string
  IS_ALREADY_WATCH_TUTORIAL: '@IS_ALREADY_WATCH_TUTORIAL', // boolean
};

export {StorageKey, type KEY_STORAGE};
