import React from 'react';
import Founders from '../components/Founders';
import Teams from '../assets/Team.png';
import '../components/Teampage.css'; // Assuming you have a CSS file for styling

const Team = () => {
  return (
    <div>

      <div className='my-team text-5xl text-center text-white font-bold mt-10 mb-5 pt-30'>
        <p>Momentum is Bringing<br /> magic back to software</p>
        <img src={Teams} alt="Team" className="mx-auto mt-6" />
      </div>
      <div className='m-10'>
      <Founders />
      </div>

    </div>
  );
};

export default Team;
