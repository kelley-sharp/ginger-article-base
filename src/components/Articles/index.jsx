import React, { Component } from 'react';
import './style.scss';

class Articles extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.articles.map(article => {
      return (
        <div>
          {article.title} by {article.authors}
        </div>
      );
    });
  }
}

Articles.defaultProps = {
  articles: [
    {
      title: 'Test Title',
      summary:
        'fjfjieofj sjfdjfkls jfaiejfjkf sjafjeifojfei jfjdkla fjk. fjeiha fj jeijfo jsfisalfjeifjlksajdkfljei fdjfkalsjfksheh. fjdslajf ejkfl jsjfkajsd fjae ifjajfe jfaleifjialfielahfia efae.',
      authors: ['Kelley Sharp', 'Jimmy Li', 'Viragi Shaw']
    },
    {
      title: 'Test Title 2',
      summary:
        'fjfjieofj sjfdjfkls jfaiejfjkf sjafjeifojfei jfjdkla fjk. fjeiha fj jeijfo jsfisalfjeifjlksajdkfljei fdjfkalsjfksheh. fjdslajf ejkfl jsjfkajsd fjae ifjajfe jfaleifjialfielahfia efae.',
      authors: ['Michael Jane', 'Kelley Sharp']
    },
    {
      title: 'Test Title 3',
      summary:
        'fjfjieofj sjfdjfkls jfaiejfjkf sjafjeifojfei jfjdkla fjk. fjeiha fj jeijfo jsfisalfjeifjlksajdkfljei fdjfkalsjfksheh. fjdslajf ejkfl jsjfkajsd fjae ifjajfe jfaleifjialfielahfia efae.',
      authors: ['Tyler Ketron', 'Jimmy Li', 'Kelley Sharp']
    }
  ]
};

export default Articles;
