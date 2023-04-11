import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(this.state.search));

    return (
      <div className="App">
        <input
          type="text"
          name="search"
          className="search"
          placeholder="Search monster"
          onChange={(e) => {
            this.setState({ search: e.target.value.toLocaleLowerCase() });
          }}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
