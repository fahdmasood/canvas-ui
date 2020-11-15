const base = {
  ghostWhite: '#f7f7ff',
  smokyBlack: '#131112',
  princetonOrange: '#ee8434',
  ruby: '#d81e5b',
  tuftsBlue: '#1a8fe3',
};

const dark = {
  ...base,
  background: '#000000',
  foreground: '#ffffff',
};

const light = {
  ...base,
  background: '#ffffff',
  foreground: '#000000',
};

export default { light, dark };
