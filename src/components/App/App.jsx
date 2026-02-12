import { useState } from 'react'
import './App.css'
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import About from '../About/About.jsx'
import Footer from '../Footer/Footer.jsx'
import LoginModal from '../LoginModal/LoginModal.jsx'
import RegisterModal from '../RegisterModal/RegisterModal.jsx'

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

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

  return (
    <div className='page'>
      <Header onSignInClick={openLogin} />
      <Main />
      <About />
      <Footer />
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={closeLogin}
        onSwitchToRegister={switchToRegister}
      />

      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={closeRegister}
        onSwitchToLogin={switchToLogin}
      />
    </div>
  )
}

export default App