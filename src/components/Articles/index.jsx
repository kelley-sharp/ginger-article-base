import React, { Component } from 'react';

class Articles extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.articles.map(article => {
      return (
        <div>
          {article.title} by {article.author}
        </div>
      );
    });
  }
}

Articles.defaultProps = {
  articles: [
    {
      title: 'Test Title',
      author: 'Kelley Sharp'
    },
    {
      title: 'Test Title 2',
      author: 'Michael Jane'
    },
    {
      title: 'Test Title 3',
      author: 'Berry Rockafeller'
    }
  ]
};

export default Articles;
