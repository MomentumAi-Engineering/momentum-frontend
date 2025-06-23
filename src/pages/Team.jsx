import React from 'react';
import Founders from '../components/Founders';
import '../components/Teampage.css';
import Mission from '../components/Mission';

const Team = () => {
  return (
    <div className="bg-black text-white">
      {/* Mission Section at Top */}
      <section className="py-20 px-6 pl-30 md:px-20 flex items-center pt-40">
        <div>
          <p className="text-xs md:text-sm text-gray-100 tracking-widest uppercase mb-6">
            [ Our Mission ]
          </p>
          <h1 className="text-5xl md:text-7xl font-light text-gray-400 leading-tight">
            Understand
            <br />
            <span className="text-gray-400">the Problem</span>
          </h1>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-6 md:px-20">
        <Founders />
      </section>
      <section className="py-16 px-6 md:px-20">
        <Mission /> 
      </section>
    </div>
  );
};

export default Team;
