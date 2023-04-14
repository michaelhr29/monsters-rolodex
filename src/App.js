import { Component } from 'react';
import CardList from './components/CardList/CardList';
import './App.css';
import Search from './components/Search/Search';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: '',
    };
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value.toLocaleLowerCase() });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));
  }

  render() {
    const { monsters, search } = this.state;
    const { handleChange } = this;

    const filteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(search));

    return (
      <div className="App">
        <h1 className="monster-rolodex-title">Monster Rolodex</h1>
        <Search className="search" placeholder="Search monster" handleChange={handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
