
import './BedRoom.css';

function BedRoom(props) {
  return (
    <div className='bedroom' id={`bed-${props.num}`}>
      <h1>BedRoom {props.num}</h1>
    </div>
  );
}

export default BedRoom;


