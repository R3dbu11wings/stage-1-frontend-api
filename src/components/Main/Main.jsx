import { useState } from "react";
import "./Main.css";
import NewsCard from "../NewsCard/NewsCard.jsx";

function Main() {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    setIsLoading(true);
    setHasSearched(true);
    setError(null);

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=6&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main">
      <h2 className="main__title">What's going on in the world?</h2>
      <p className="main__subtitle">
        Find the latest news on any topic and save them in your personal account.
      </p>
      <form className="main__search" onSubmit={handleSearch}>
        <input
          type="text"
          className="main__search-input"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter topic"
        />
        <button type="submit" className="main__search-button">
          Search
        </button>
      </form>

      {isLoading && <p className="main__status">Loading...</p>}
      {error && <p className="main__status">{error}</p>}

      {!isLoading && hasSearched && articles.length === 0 && (
        <p className="main__status">No results found.</p>
      )}

      {articles.length > 0 && (
        <div className="main__cards">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;