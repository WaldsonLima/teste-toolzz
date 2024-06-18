import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './GlobalStyles';

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Login
                theme={theme}
                setTheme={setTheme}
              />
            }
          />
          <Route
            path='/home'
            element={<Home/>}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
