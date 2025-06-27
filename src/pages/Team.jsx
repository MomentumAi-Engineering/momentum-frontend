import React from 'react';
import Founders from '../components/Founders';
import '../components/Teampage.css';
import Mission from '../components/Mission';
import TeamIdeas from '../components/TeamIdeas';
import GlowingText from '../mini-components/Glowing';
import AtomixCard from '../mini-components/Modern-card';


const Team = () => {
  return (
    <div className="bg-black text-white">
      <GlowingText />

      {/* Founders Section */}
      <section className="py-16 px-6 md:px-20">
        <Founders />
      </section>
     
     <section className="py-20 px-6 md:px-20 pt-40 flex flex-col md:flex-row items-center justify-between gap-10">
  {/* Left side: Text */}
  <div className="md:w-1/2">
    <p className="text-xs md:text-sm text-gray-100 tracking-widest uppercase mb-6">
      [ Our Mission ]
    </p>
    <h1 className="text-5xl md:text-7xl font-light text-gray-400 leading-tight">
      Understand
      <br />
      <span className="text-gray-400">the Problem</span>
    </h1>
  </div>

  {/* Right side: AtomixCard */}
  <div className="md:w-1/2 flex justify-center">
    <AtomixCard />
  </div>
</section>

      <section className="py-16 px-6 md:px-20">
        <TeamIdeas />
      </section>

      
    </div>
  );
};

export default Team;
