import { parseString } from 'xml2js';

function promisifiedParseString(xmlString) {
  return new Promise((resolve, reject) => {
    parseString(xmlString, { explicitArray: false }, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}

async function formatData(xmlString) {
  const result = await promisifiedParseString(xmlString);
  const articles = result.feed.entry;
  for (let article of articles) {
    console.log(article);
    article.authors = article.author;
    delete article.author;
  }
  return articles;
}

export default formatData;
