import React from 'react';
import Founders from '../components/Founders';
import Mission from '../components/Mission';
import TeamIdeas from '../components/TeamIdeas';
import GlowingText from '../mini-components/Glowing';
import AtomixCard from '../mini-components/Modern-card';
import FormlessUI from '../components/TeamIdeas'; // Add this import
import '../components/Teampage.css';
import '../components/Team-page-head.css'; // Import the CSS file for team page styles
import Socials from '../mini-components/Socials.jsx'; 

const Team = () => {
  return (
    <div className="bg-black text-white"> {/* removed overflow-hidden */}

      <GlowingText />

      <section className="my-teamm py-16 px-6 md:px-20">
        <Founders />
      </section>

      <section className="py-20 px-6 md:px-20 pt-40 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <p className="text-xs md:text-sm text-gray-100 tracking-widest uppercase mb-6">
            [ Our Mission ]
          </p>
          <h1 className="text-5xl md:text-4xl font-light text-amber-50 leading-tight">
            Massive problems × AI velocity = MomntumAi.
           
            {/* <span className="text-amber-50"> responsible, life-enhancing AI.</span> */}
          </h1>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <AtomixCard />
        </div>
      </section>

      <section className="px-6 md:px-20 py-16">
        <TeamIdeas />
      </section>

     <section className="px-6 md:px-20 py-16 flex justify-center">
            <Socials />
      </section>

      
    </div>
  );
};

export default Team;
