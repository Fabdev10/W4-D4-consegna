import './App.css';
import MyNav from './Components/MyNav';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import NotFound from './Components/NotFound';
import BookDetails from './Components/BookDetails';
import MyFooter from './Components/MyFooter';
import About from './Components/About';
import { ThemeContext} from './Context';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <BrowserRouter>
       <ThemeContext.Provider value={theme}>
            <div
              className={`App ${theme}`}
              data-bs-theme={theme}>
      <MyNav toggleTheme={toggleTheme} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Welcome/>
        <Routes>
          <Route path="/" element={<AllTheBooks searchQuery={searchQuery} />} />
          <Route path="/details/:asin" element={<BookDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter/>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
