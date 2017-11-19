import React, { Component } from 'react';
import './App.css';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";

class App extends Component {
  componentDidMount() {
    this.viewer = new Viewer(this.cesiumContainer);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Photo Story</h1>
          <h3>Tell the world your tales</h3>
        </header>
        <div id="cesiumContainer" ref={ element => this.cesiumContainer = element }/>
      </div>
    );
  }
}

export default App;
