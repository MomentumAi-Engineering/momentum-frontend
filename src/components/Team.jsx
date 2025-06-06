import React from 'react';
import Founders from './Founders.jsx';

const Team = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 md:px-20">
      {/* About Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-semibold mb-4">About us</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Airbnb was born in 2007 when two hosts welcomed three guests to their San Francisco home,
          and has since grown to over 5 million hosts who have welcomed over 2 billion guest arrivals
          in almost every country across the globe. Every day, hosts offer unique stays, experiences,
          and services that make it possible for guests to connect with communities in a more authentic way.
        </p>
      </div>

      {/* Fast Facts Section */}
      <div className="bg-gray-600 text-black rounded-lg py-10 px-6">
        <h3 className="text-2xl font-semibold mb-8 text-center">Fast facts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          <FactCard stat="8M+" label="active listings worldwide" />
          <FactCard stat="150K+" label="cities and towns with active Airbnb listings" />
          <FactCard stat="220+" label="countries and regions with Airbnb listings" />
          <FactCard stat="2B+" label="Airbnb guest arrivals all-time" />
          <FactCard stat="5M+" label="hosts and counting" />
          <FactCard stat="$300B+" label="total earnings by hosts" />
          <FactCard stat="$15K" label="average annual earnings per host" />
          <FactCard stat="$13B+" label="paid to hosts in the past year" />
        </div>
      </div>

      {/* Founders Section */}
      <div className="mt-20">
        <Founders />
      </div>
    </div>
  );
};

// FactCard component
const FactCard = ({ stat, label }) => (
  <div className="bg-white rounded-xl shadow-md py-8 px-4 hover:shadow-lg transition">
    <h4 className="text-3xl font-bold mb-2">{stat}</h4>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

export default Team;
