module.exports = function (str = "") {
  return str
    .toString()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\u0980-\u09FF\-]/g, "");
};
