import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
  onFormSubmit = (term) => {
    console.log(term);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;