import React from 'react';

const Companies = () => {
  const companies = [
    { name: 'OpenAI', style: 'text-white text-xl font-semibold tracking-wide' },
    { name: 'Marriott', style: 'text-[#b41f2a] text-xl font-serif font-bold' },
    { name: 'Amazon', style: 'text-[#ff9900] text-xl font-black uppercase tracking-widest' },
    { name: 'Shopify', style: 'text-[#95bf47] text-xl font-bold' },
    {
      name: 'Google',
      multicolor: true,
    },
    { name: 'Airbnb', style: 'text-[#ff5a5f] text-xl font-semibold' },
    { name: 'Anthropic', style: 'text-white text-xl font-medium uppercase tracking-wide' },
    { name: 'URBN', style: 'text-black bg-white text-xl font-extrabold uppercase px-2' },
    {
      name: 'Microsoft',
      render: () => (
        <div className="flex items-center gap-2">
          {/* Four colored squares */}
          <div className="grid grid-cols-2 gap-0.5">
            <span className="w-3 h-3 bg-[#F25022] block rounded-sm" />
            <span className="w-3 h-3 bg-[#7FBA00] block rounded-sm" />
            <span className="w-3 h-3 bg-[#00A4EF] block rounded-sm" />
            <span className="w-3 h-3 bg-[#FFB900] block rounded-sm" />
          </div>
          {/* Microsoft name */}
          <span className="text-white text-xl font-semibold">Microsoft</span>
        </div>
      ),
    },
    { name: 'Netflix', style: 'text-[#e50914] text-xl font-black tracking-wide' },
    { name: 'Meta', style: 'text-[#1877f2] text-xl font-bold' },
    { name: 'Apple', style: 'text-white text-xl font-semibold' },
    { name: 'Tesla', style: 'text-[#cc0000] text-xl font-bold uppercase' },
    { name: 'Adobe', style: 'text-[#ff0000] text-xl font-semibold' },
    { name: 'Samsung', style: 'text-[#1428a0] text-xl font-bold uppercase' },
  ];

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="bg-black text-white py-16 px-8 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedCompanies.map((company, idx) => (
          <div
            key={idx}
            className="mx-12 flex-shrink-0 hover:text-blue-400 transition-colors duration-300"
          >
            {company.render ? (
              company.render()
            ) : company.multicolor ? (
              <p className="text-3xl font-bold flex gap-0.5 select-none">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </p>
            ) : (
              <p className={company.style}>{company.name}</p>
            )}
          </div>
        ))}
      </div>

      {/* Gradient edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />

      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Companies;
