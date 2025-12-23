module.exports = function ({ collections }) {
  const map = {};

  collections.writings.forEach(item => {
    const cat = item.data.type;
    if (!map[cat]) map[cat] = [];
    map[cat].push(item);
  });

  return map;
};
