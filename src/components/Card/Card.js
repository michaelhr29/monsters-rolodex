import './Card.css';

const Card = ({ ...props }) => {
  const { monster } = props;
  const { id, name } = monster;

  return (
    <div className="monster">
      <img src={`https://robohash.org/${id}?set=set1`} alt="monster" />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
