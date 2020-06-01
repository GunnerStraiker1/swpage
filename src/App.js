import React from 'react';
import {Route, Router} from 'react-router-dom'
import Navbar from './components/Navbar/NavbarSW';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory as createHistory } from "history"
import './index.css'
import BGParallax from './components/bgParallax/bgParallax';

const history = createHistory()

function App() {
  return (
    <div>
      <Router history={history}>
        <Navbar />
        <Route path="/" exact component={BGParallax} />
      </Router>

      {/* <header>
        <Navbar />
      </header>
      <div id="bodyApp">
        <BGParallax />
        <h2>Hola</h2>
      </div> */}
      
    </div>
  );
}

export default App;
