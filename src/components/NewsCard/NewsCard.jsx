import "./NewsCard.css";
import BookmarkIcon from "../../assets/bookmark.svg";
import BookmarkHover from "../../assets/blackmark.svg";
import BookmarkActive from "../../assets/bluemark.svg";
import { useState } from "react";

function NewsCard({ article, onSave, isSaved }) {
  const { urlToImage, title, description, publishedAt, source, url } = article;
  const [isHovered, setIsHovered] = useState(false);

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getBookmarkIcon = () => {
    if (isSaved) return BookmarkActive;
    if (isHovered) return BookmarkHover;
    return BookmarkIcon;
  };

  return (
    <div className="card">
      <div className="card__image-container">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            className="card__image"
            src={urlToImage || "/placeholder.png"}
            alt={title}
          />
        </a>
        <button
          className="card__save-btn"
          onClick={() => onSave(article)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={getBookmarkIcon()} alt="Save" className="card__save-icon" />
        </button>
      </div>
      <div className="card__content">
        <p className="card__date">{formattedDate}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <p className="card__source">{source.name}</p>
      </div>
    </div>
  );
}

export default NewsCard;
