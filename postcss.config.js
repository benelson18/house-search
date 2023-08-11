// eslint-disable-next-line @typescript-eslint/no-var-requires
const stylelint = require("stylelint");

module.exports = {
  plugins: {
    "postcss-import": {
      plugins: [stylelint()],
    },
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
