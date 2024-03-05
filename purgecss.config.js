module.exports = {
  content: ["index.html"],
  css: ["styles.css"],
  output: "purge/",
  options: {
    safelist: ["gallery-item"],
  },
  keyframes: true,
  variables: true,
  rejected: true,
};
