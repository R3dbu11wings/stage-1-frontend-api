import "./NewsCard.css";

function NewsCard({ article, onSave, isSaved }) {
  const { urlToImage, title, description, publishedAt, source, url } = article;

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          className="card__image"
          src={urlToImage || "/placeholder.png"}
          alt={title}
        />
      </a>{" "}
      <button
        className={`card__save-btn ${isSaved ? "card__save-btn_active" : ""}`}
        onClick={() => onSave(article)}
      >
        {isSaved ? "✕" : "🔖"}
      </button>
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
