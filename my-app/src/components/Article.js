import React from "react";
import "../styles/articleStyle.css"; // برای استایل‌ها

const Article = ({ title, date, author,image, onClick }) => {
    return (
      <div className="article-container" onClick={onClick}>
          {image && <img src={image} alt={title} className="article-image" />}
        <h2 className="article-title">{title}</h2>
        <div className="article-meta">
          <span className="article-date">{date}</span>
          <span className="article-author">{author}</span>
        </div>
      </div>
    );
  };
  

export default Article;
