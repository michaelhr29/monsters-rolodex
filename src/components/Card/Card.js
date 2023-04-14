import { Component } from 'react';

import './Card.css';

class Card extends Component {
  render() {
    const { id, name } = this.props.monster;

    return (
      <div className="monster">
        <img src={`https://robohash.org/${id}?set=set1`} alt="monster" />
        <h2>{name}</h2>
      </div>
    );
  }
}

export default Card;
