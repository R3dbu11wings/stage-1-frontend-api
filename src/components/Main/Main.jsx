import { useState } from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";

const INITIAL_COUNT = 3;
const LOAD_MORE_COUNT = 3;

function Main({ savedArticles, onSave }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [query, setQuery] = useState("");

  const newsApiBaseUrl =
    process.env.NODE_ENV === "production"
      ? "https://nomoreparties.co/news/v2/everything"
      : "https://newsapi.org/v2/everything";

  const handleSearch = async (query) => {
    setIsLoading(true);
    setHasSearched(true);
    setQuery(query);
    setError(null);
    setVisibleCount(INITIAL_COUNT);

    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);

    const to = today.toISOString().split("T")[0];
    const from = sevenDaysAgo.toISOString().split("T")[0];

    try {
      const response = await fetch(
        `${newsApiBaseUrl}?q=${query}&from=${from}&to=${to}&pageSize=100&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  return (
    <div className="main">
      <h2 className="main__title">What's going on in the world?</h2>
      <p className="main__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>

      <SearchForm onSearch={handleSearch} />

      {isLoading && <Preloader />}
      {error && <p className="main__status">{error}</p>}

      {!isLoading && hasSearched && articles.length === 0 && (
        <p className="main__status">No results found.</p>
      )}

      {visibleArticles.length > 0 && (
        <section className="main__results">
          <h2 className="main__results-title">Search results</h2>
          <div className="main__cards">
            {visibleArticles.map((article, index) => (
              <NewsCard
                key={index}
                article={article}
                onSave={onSave}
                isSaved={savedArticles.some((a) => a.url === article.url)}
                keyword={query}
              />
            ))}
          </div>
          {hasMore && (
            <button
              className="main__see-more"
              onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
            >
              See More
            </button>
          )}
        </section>
      )}
    </div>
  );
}

export default Main;
