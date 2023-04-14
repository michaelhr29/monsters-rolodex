import { Component } from 'react';
import Card from '../Card/Card';

import './CardList.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="cardlist">
        {monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
