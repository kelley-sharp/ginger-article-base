import moment from 'moment';

function mapArticleToAuthor(article, author, mappingObj) {
  //if author is not already in mappingObj, set a new record.
  if (!mappingObj.hasOwnProperty(author.id)) {
    mappingObj[author.id] = {
      name: author.name,
      articles: [article],
      mostRecentPublication: moment(article.published)
    };
  } else {
    //else push article into existing record.
    mappingObj[author.id].articles.push(article);
    mappingObj[author.id].mostRecentPublication = moment.max(
      moment(article.published),
      moment(mappingObj[author.id].mostRecentPublication)
    );
  }
}

export default mapArticleToAuthor;
