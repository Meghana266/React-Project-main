import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faUser, faEnvelope,faBriefcase } from '@fortawesome/free-solid-svg-icons';

const clientData = [
  {
    name: 'Sam',
    email: 'Sam@gmail.com',
    profession: 'Contractor',
  },
  {
    name: 'Dean',
    email: 'Dean@gmail.com',
    profession: 'Architect',
  },
  {
    name: 'Jack',
    email: 'Jack@gmail.com',
    profession: 'Interior Designer',
  },
  {
    name: 'Bunni',
    email: 'BUnni@gmail.com',
    profession: 'Contractor',
  },
  {
    name: 'Saturn',
    email: 'Saturn@gmail.com',
    profession: 'Architect',
  },
];

const AgentRequests = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('all');

  const handleAccept = (name) => {
    console.log(`Accept ${name}`);
  };

  const handleDecline = (name) => {
    console.log(`Decline ${name}`);
  };

  const filteredClients = clientData.filter((client) => {
    return (
      (client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedProfession === 'all' ||
        client.profession.toLowerCase() === selectedProfession.toLowerCase())
    );
  });

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-lg dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Agent Requests</h4>

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedProfession('all')}
            className={`px-4 py-2 rounded-md ${
              selectedProfession === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedProfession('architect')}
            className={`px-4 py-2 rounded-md ${
              selectedProfession === 'architect' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            Architect
          </button>
          <button
            onClick={() => setSelectedProfession('contractor')}
            className={`px-4 py-2 rounded-md ${
              selectedProfession === 'contractor' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            Contractor
          </button>
          <button
            onClick={() => setSelectedProfession('interior designer')}
            className={`px-4 py-2 rounded-md ${
              selectedProfession === 'interior designer' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            Interior Designer
          </button>
        </div>
        <div className="flex-grow"></div>
      </div>

      <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
        <div className="p-3 xl:p-5 bg-green-50">
          <h5 className="text-sm font-medium uppercase xsm:text-base">Name</h5>
        </div>
        <div className="p-3 text-center xl:p-5 bg-green-50">
          <h5 className="text-sm font-medium uppercase xsm:text-base">Email</h5>
        </div>
        <div className="p-3 text-center xl:p-5 bg-green-50">
          <h5 className="text-sm font-medium uppercase xsm:text-base">Profession</h5>
        </div>
        <div className="p-3 text-center xl:p-5 bg-green-50">
          <h5 className="text-sm font-medium uppercase xsm:text-base">Actions</h5>
        </div>
      </div>

      {filteredClients.map((client, key) => (
        <div
          className={`grid grid-cols-4 sm:grid-cols-4 ${
            key === filteredClients.length - 1
              ? ''
              : 'border-b border-stroke dark:border-strokedark'
          }`}
          key={key}
        >
          <div className="flex items-center p-3 xl:p-5">
          <FontAwesomeIcon icon={faUser} className="h-4 w-4 text-green-400 dark:text-white" />
            <p className="hidden ml-2 text-black dark:text-white sm:block">{client.name}</p>
          </div>

          <div className="flex items-center justify-center p-3 xl:p-5">
          <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-green-400 dark:text-white" />
            <p className="text-black ml-2 dark:text-white">{client.email}</p>
          </div>

          <div className="flex items-center justify-center p-3 xl:p-5">
            <p className="text-meta-3">{client.profession}</p>
          </div>

          <div className="flex items-center justify-end space-x-4 p-3 mr-20 xl:p-5">
            <button
              onClick={() => handleAccept(client.name)}
              className="text-green-400 hover:underline"
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              onClick={() => handleDecline(client.name)}
              className="text-red-400 hover:underline"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AgentRequests;
