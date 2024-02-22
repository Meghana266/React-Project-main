import React, { useState } from 'react';

const Houses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const hosesData = [
    {
      id: 1,
      title: 'Apartment',
      type: 'Residential',
      features: ['2 Bedrooms', 'Spacious Living Room', 'Modern Kitchen'],
      price: 1200,
      imageUrl: 'path/to/apartment-image.jpg',
    },
    {
      id: 2,
      title: 'House',
      type: 'Residential',
      features: ['3 Bedrooms', 'Large Backyard', 'Garage'],
      price: 2500,
      imageUrl: 'path/to/house-image.jpg',
    },
    // Add more hose data as needed
  ];

  const filteredHoses = hosesData.filter((hose) => {
    return (
      hose.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hose.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by type or name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 my-4 border border-gray-300 rounded"
      />
      <div className="flex flex-wrap justify-center">
        {filteredHoses.map((hose) => (
          <div key={hose.id} className="w-64 m-4 bg-white rounded overflow-hidden shadow-lg">
            <img className="w-full h-40 object-cover rounded-t" src={hose.imageUrl} alt={hose.title} />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{hose.title}</h2>
              <p className="text-blue-500 mb-2">{hose.type}</p>
              <ul className="mb-4">
                {hose.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 font-bold">${hose.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Houses;
