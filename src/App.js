import { useEffect, useState } from 'react';
import CardList from './components/CardList/CardList';
import './App.css';
import Search from './components/Search/Search';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setMonsters(data));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(search));
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, search]);

  const handleChange = (e) => {
    setSearch(e.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1 className="monster-rolodex-title">Monster Rolodex</h1>
      <Search className="search" placeholder="Search monster" handleChange={handleChange} value={search} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
