import { Component } from "react";
import './searchField.styles.css';

class SearchField extends Component {
//   constructor() {
//     super();
//   }

  render() {
    console.log("search field RENDER METHDO");
    const handleInput = (event) => {
      // console.log(event.target.value);
      this.props.onInput(event.target.value);
    };

    return (
      <>
        <input
          type="text"
          placeholder="search monster"
          onChange={handleInput}
          className="search-box"
        />
      </>
    );
  }
}

export default SearchField;
