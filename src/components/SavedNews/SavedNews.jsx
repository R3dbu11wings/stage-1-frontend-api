import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard.jsx";

function SavedNews({ savedArticles, onSave, currentUser }) {
  return (
    <main className="saved-news">
      <div className="saved-news__header">
        <p className="saved-news__label">Saved articles</p>
        <h1 className="saved-news__title">
          {savedArticles.length > 0
            ? `${currentUser?.username}, you have ${savedArticles.length} article${savedArticles.length > 1 ? "s" : ""} saved`
            : "No saved articles yet"}
        </h1>
      </div>

      {savedArticles.length > 0 ? (
        <section className="saved-news__results">
          <div className="saved-news__cards">
            {savedArticles.map((article, index) => (
              <NewsCard
                key={index}
                article={article}
                onSave={onSave}
                isSaved={true}
                isOnSavedPage={true}
                currentUser={currentUser}
              />
            ))}
          </div>
        </section>
      ) : (
        <div className="saved-news__empty">
          <p className="saved-news__empty-text">
            You haven't saved any articles yet. Go back to the main page and
            save some!
          </p>
        </div>
      )}
    </main>
  );
}

export default SavedNews;
