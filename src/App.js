import React, { useEffect } from 'react';
import { Homepage, AboutPage,ContactPage } from './pages';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/contact" exact component={ContactPage} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
