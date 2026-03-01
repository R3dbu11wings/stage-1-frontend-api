import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import SuccessModal from "../SuccessModal/SuccessModal.jsx";

import { authorize, checkToken } from "../../utils/auth.js";
import { getItems, saveArticle, removeArticle } from "../../utils/api.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [savedArticles, setSavedArticles] = useState(() => {
    const stored = localStorage.getItem("savedArticles");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token).then((res) => {
        setCurrentUser({ username: res.data.name, email: res.data.email });
      });
    }
    getItems().then((items) => {
      if (items.length > 0) {
        setSavedArticles(items);
      }
    });
  }, []);

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
    localStorage.setItem("token", "a-fake-token");
    setCurrentUser(user);
    closeLogin();
  };

  const handleRegisterSuccess = () => {
    closeRegister();
    setIsSuccessOpen(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const handleSave = (article) => {
    const isAlreadySaved = savedArticles.some((a) => a.url === article.url);

    if (isAlreadySaved) {
      const savedArticle = savedArticles.find((a) => a.url === article.url);
      removeArticle(savedArticle._id).then(() => {
        const updated = savedArticles.filter((a) => a.url !== article.url);
        setSavedArticles(updated);
        localStorage.setItem("savedArticles", JSON.stringify(updated));
      });
    } else {
      saveArticle(article).then((savedArticle) => {
        const updated = [...savedArticles, savedArticle];
        setSavedArticles(updated);
        localStorage.setItem("savedArticles", JSON.stringify(updated));
      });
    }
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
              <SavedNews
                currentUser={currentUser}
                savedArticles={savedArticles}
                onSave={handleSave}
              />
              <Footer />
            </div>
          }
        />
      </Routes>

      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        onSignInClick={() => {
          setIsSuccessOpen(false);
          openLogin();
        }}
      />

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
