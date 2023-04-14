import { Component } from 'react';

import './Search.css';
class Search extends Component {
  render() {
    const { className, placeholder, handleChange } = this.props;

    return <input type="search" className={className} placeholder={placeholder} onChange={handleChange} />;
  }
}

export default Search;
