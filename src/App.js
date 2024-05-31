import { Component } from "react";
import SearchField from "./components/searchField/searchField.component";
import CardList from "./components/cardList/cardList.component";
import "./App.css";

class App extends Component {
  //constructor method
  constructor() {
    super();

    this.state = {
      monster: [],
      search: "",
    };
    // console.log("initial state is :" , this.state);
  }

  //component did mount method
  componentDidMount() {
    console.log("comp did mount mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => this.setState({ monster: monsters }));
    //callback
    // then((monsters) => this.setState(() => {
    //   return { monster:monsters}
    // } ,
    // () => {
    //    console.log("new state is :", this.state.monster);
    // }));
  }

  //render method
  render() {
    const handleInput = (value) => {
      // console.log("value is :" , value);
      this.setState({ search: value });
    };

    const filteredMonsters = this.state.monster.filter((item) => {
      return item.name.toLowerCase().includes(this.state.search);
    });

    // console.log("FILTERED MONSTERS :" , filteredMonsters);
    console.log("App js RENDER METHOD");

    return (
      <>
        <SearchField onInput={handleInput} />
        <CardList monsters={filteredMonsters} />
      </>
    );
  }
}

export default App;
