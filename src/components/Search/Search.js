import { Component } from 'react';

class Search extends Component {
  render() {
    const { className, placeholder, handleChange } = this.props;

    return <input type="search" className={className} placeholder={placeholder} onChange={handleChange} />;
  }
}

export default Search;
