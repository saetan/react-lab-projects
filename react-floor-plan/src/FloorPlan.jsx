import logo from './logo.svg';
import './FloorPlan.css';
import LivingRoom from './LivingRoom';
import BedRoom from './BedRoom';
import Kitchen from './Kitchen';
import Bath from './Bath';

function FloorPlan() {
  return (
    <div className='gridParent'>
      <BedRoom num={1} />
      <Kitchen />
      <Bath size={"Full"} />
      <BedRoom num={2} />
      <LivingRoom />
      <Bath size={"Half"} />
      <BedRoom num={3} />

    </div>
  );
}

export default FloorPlan;
