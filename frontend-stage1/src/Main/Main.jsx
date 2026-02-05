import "./Main.css";

function Main() {
  return (
    <div className="main">
        <h2 className="main__title">What's going on in the world?</h2>
    <p className="main__subtitle">Find the latest news on any topic and save them in your personal account.</p>
         <form className="main__search" >
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
    </div>
  )
} 
export default Main;