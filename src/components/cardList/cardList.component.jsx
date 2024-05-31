import { Component } from "react";
import Card from "../Card.component.jsx/card.component";
import "./cardList.styles.css";

class CardList extends Component {
  render() {
    // console.log("props are :" , this.props.monsters);
    console.log("card list RENDER METHOD");
    const { monsters } = this.props;
    console.log("monsters :", monsters);
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <>
              <Card data={monster} />
            </>
          );
        })}
      </div>
    );
  }
}

export default CardList;
