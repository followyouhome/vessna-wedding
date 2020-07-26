const LRU = require('lru-cache');

const cache = LRU({
  max: 100,
  maxAge: 1000 * 60 * 60 * 24,
});

module.exports = cache;
