import './Search.css';

const Search = ({ ...props }) => {
  const { className, placeholder, handleChange, value } = props;

  return <input type="search" className={className} placeholder={placeholder} onChange={handleChange} value={value} />;
};

export default Search;
