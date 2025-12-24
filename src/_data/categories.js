module.exports = function (data) {
  // Eleventy build এর শুরুতে collections undefined হতে পারে
  const writings = data?.collections?.writings || [];

  // লেখা না থাকলে empty object return করো
  if (!writings.length) {
    return {};
  }

  const categories = {};

  writings.forEach(item => {
    const cat = item.data.type;
    if (!cat) return;

    if (!categories[cat]) {
      categories[cat] = [];
    }

    categories[cat].push(item);
  });

  return categories;
};

