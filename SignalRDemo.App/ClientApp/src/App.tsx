import React, { Component } from 'react';
import { LiveChat } from "./livechat/components/LiveChat";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LiveChat />
      </div>
    );
  }
}

export default App;
