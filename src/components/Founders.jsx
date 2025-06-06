import React from 'react';
import po from '../assets/po.webp';
import pt from '../assets/pt.webp'; 
import py from '../assets/py.webp';

const founders = [
  {
    name: 'Joel Girones',
    role: 'Airbnb Co-founder and Chief Executive Officer',
    description:
      'Brian leads Airbnb’s vision, strategy, and growth. He’s passionate about design and has driven Airbnb’s mission of belonging since its start.',
    image: po,
  },
  {
    name: 'Rishav Kumar ',
    role: 'Airbnb Co-founder and Chief Strategy Officer',
    description:
      'Nathan oversees Airbnb’s strategy, focusing on growth and innovation. He has a background in engineering and a strong strategic mindset.',
    image: pt,
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
