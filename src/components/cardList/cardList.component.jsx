import { Component } from 'react';
import './cardList.styles.css';

class CardList extends Component{
    render(){
        // console.log("props are :" , this.props.monsters);
        console.log("card list RENDER METHOD");
        const {monsters} = this.props;
        console.log("monsters :" , monsters);
        return(
            <div className='card-list'>
              {monsters.map((monster) => {

                //destructuring
                const {name, id , email} = monster;

                return(
                  <>
                  <div className='card-container' key={id}>
                    <img
                      src={`https://robohash.org/${id}?set=set2&size=180x180`}
                      alt={`monster ${name}`}
                    />
  
                  <h2>{name}</h2>
                  <p>{email}</p>
                  </div>
                  </>
                );
              })}
            </div>
        );
    }
}


export default CardList;