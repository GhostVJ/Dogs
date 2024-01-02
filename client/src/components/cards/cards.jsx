import Card from '../card/card';
import './cards.css';

function Cards(allDogs) {
  const dogsList = allDogs;
  return (
    <div>
    <h1>Cards</h1>
    <div className="Cards">
      {dogsList?.map((dog)=> <Card dog={dog} />)}
    
      </div>
    </div>
  );
}

export default Cards;