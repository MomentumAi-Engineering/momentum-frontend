import React from 'react';
import Risav from '../assets/Rishabh.jpg';
import po from '../assets/po.webp';
// import pt from '../assets/pt.webp'; 
import py from '../assets/py.webp';

const founders = [
  {
    name: 'Joel Girones',
    role: 'Founder and Chief Executive Officer',
    description:
      ' At MomentumAi he guides the creation of intuitive, ethical tools that solve real-world problems at scale. Grounded in nuclear-physics research and refined by rigorous business training, Joel balances technical precision with user empathy and market clarity—building AI that is not just intelligent, but trusted.',
    image: po,
  },
  {
    name: 'Rishav Kumar ',
    role: 'Chief Technical Officer',
    description:
      'Leading the technology strategy and execution at Momentum AI. Oversee end-to-end development of AI-driven platforms, manage cross-functional engineering teams, and drive innovation across product architecture',
    image: Risav,
  },
  {
    name: 'Raj Baidyanath',
    role: 'Airbnb Co-founder',
    description:
      'Joe helped design Airbnb’s original platform and brand. A creative entrepreneur, he’s also active in philanthropy and design innovation.',
    image: py,
  },
];

const Founders = () => {
  return (
    <div className="py-16 px-6 md:px-20">
      <h2 className="text-4xl font-semibold mb-12 text-center text-white">Founders</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {founders.map((person, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img src={person.image} alt={person.name} className="w-full h-72 object-cover" />
            <div className="p-6">
              <h3 className="text-center text-xl font-bold mb-1">{person.name}</h3>
              <p className="text-sm text-gray-700 text-center mb-3">{person.role}</p>
              <p className="text-sm text-gray-600">{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
