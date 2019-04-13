import React, { Component } from 'react';
import './App.css';
import {Home} from './pages'
import './styles.js'
import { GlobalStyle } from './styles.js' 


class App extends Component {
  render() {
    return (
        <React.Fragment>
          <GlobalStyle />
          <Home />
        </React.Fragment>
    );
  }
}

export default App;
