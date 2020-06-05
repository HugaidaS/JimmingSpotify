import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermCHange = this.handleTermCHange.bind(this);
    this.state = {
      term: ""
    };
  }

  handleTermCHange(event) {
    this.setState({ term: event.target.value });
  }

  search(term) {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div class="SearchBar">
        <input
          onChange={this.handleTermCHange}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
