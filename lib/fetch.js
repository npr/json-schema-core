const fs = require("fs");
const makeFetchHappen = require("make-fetch-happen");
const { Response } = require("minipass-fetch");


const fetch = makeFetchHappen.defaults({ cacheManager: null });

module.exports = (url, options) => {
  if (url.startsWith("file://")) {
    const path = url.match(/file:\/\/(.+)/)[1];
    const stream = fs.createReadStream(path);
    return new Response(stream);
  } else {
    return fetch(url, options);
  }
};
