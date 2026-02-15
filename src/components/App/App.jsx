import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  const switchToRegister = () => {
    closeLogin();
    openRegister();
  };

  const switchToLogin = () => {
    closeRegister();
    openLogin();
  };

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    closeLogin();
  };

  const handleRegisterSuccess = (user) => {
    setCurrentUser(user);
    closeRegister();
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const handleSave = (article) => {
    setSavedArticles((prev) => {
      const isAlreadySaved = prev.some((a) => a.url === article.url);
      if (isAlreadySaved) {
        return prev.filter((a) => a.url !== article.url);
      }
      return [...prev, article];
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="page">
              <Header
                currentUser={currentUser}
                onSignInClick={openLogin}
                onLogout={handleLogout}
              />
              <Main savedArticles={savedArticles} onSave={handleSave} />
              <About />
              <Footer />
            </div>
          }
        />
        <Route
          path="/saved-news"
          element={
            <div className="page page_saved">
              <Header
                currentUser={currentUser}
                onSignInClick={openLogin}
                onLogout={handleLogout}
                isDark={true}
              />
              <SavedNews savedArticles={savedArticles} onSave={handleSave} />
              <Footer />
            </div>
          }
        />
      </Routes>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeLogin}
        onSwitchToRegister={switchToRegister}
        onLoginSuccess={handleLoginSuccess}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={closeRegister}
        onSwitchToLogin={switchToLogin}
        onRegisterSuccess={handleRegisterSuccess}
      />
    </BrowserRouter>
  );
}

export default App;
