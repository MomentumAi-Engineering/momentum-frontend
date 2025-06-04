const Companies = () => {
  const columns = [
    ['OpenAI', 'Marriott'],
    ['Amazon', 'Shopify'],
    ['Google', 'Airbnb'],
    ['Anthropic', 'URBN'],
  ];

  const companyStyles = {
    OpenAI: 'text-2xl font-bold tracking-wide',
    Marriott: 'text-lg font-medium italic',
    Amazon: 'text-xl font-semibold uppercase',
    Shopify: 'text-xl font-semibold',
    Google: 'text-3xl font-extrabold',
    Airbnb: 'text-lg font-semibold tracking-wide',
    Anthropic: 'text-xl font-semibold',
    URBN: 'text-lg font-bold',
  };

  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="grid grid-cols-4 gap-12 justify-items-center">
        {columns.map((col, idx) => (
          <div key={idx} className="space-y-12 text-center">
            {col.map((company, i) => (
              <p key={i} className={`${companyStyles[company]} text-white`}>
                {company}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
