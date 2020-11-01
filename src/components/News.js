import React from 'react';
import './News.css';
import axios from 'axios';

export default class News extends React.Component{
  constructor(props){
    super(props);
      this.state = {
      listNews:[]
    }
  };

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://newsapi.org/v2/everything?q=apple&from=2020-10-31&to=2020-10-31&sortBy=popularity&apiKey=2ba737ac7f9b4e5aa2df4eeeb7730895'
    })
      .then( res => {
        console.info('articles', res.data.articles)
        this.setState({listNews: res.data.articles})
      })
      .catch( res => {
      });
  }


  render(){
    return(
      <div className="news-container">
          {this.state.listNews.map((news, index) => (
            <div className="news-card">
              <div className="news-img">
                <img className="image" src={news.urlToImage} alt="News Image"/>
              </div>
              <div className="news-content" key={index}>
                <div className="title-news"><a href={news.url}>{news.title}</a></div>
                <div className="title-author"> <div className="icon"></div> {news.author}</div>
                <div className="title-publish"> <div className="icon"></div> {news.publishedAt}</div>
                <div className="title-desc">{news.content}</div>

                
              </div>
            </div>
          ))}
        </div>
    )
  }
}
