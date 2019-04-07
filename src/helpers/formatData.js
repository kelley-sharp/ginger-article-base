import { parseString } from 'xml2js';
import slugify from 'slugify';

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

  //change author to authors
  for (let article of articles) {
    article.authors = article.author;
    delete article.author;
  }

  //trim whitespace from summary
  for (let article of articles) {
    article.summary = article.summary.trim();
  }

  //add id to author objects
  for (let article of articles) {
    article.authors.forEach(function(author) {
      author.id = slugify(author.name);
    });
  }

  //only return necessary keys
  const formattedArticles = articles.map(article => {
    return {
      id: article.id,
      title: article.title,
      summary: article.summary,
      authors: article.authors,
      published: article.published
    };
  });

  return formattedArticles;
}

export default formatData;
