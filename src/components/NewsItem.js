import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,date,source} = this.props;
    return (
      <div className="my-3">
   
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
    {source}
    
  </span>
          <img
            src={
              !imageUrl
                ? "https://akm-img-a-in.tosshub.com/sites/headlinestoday/resources/images/headlinestoday_fb.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="card-text text-muted">{new Date(date).toGMTString()}</div>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
