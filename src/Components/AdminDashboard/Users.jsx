import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const userData = [
  {
    name: 'Samuel Bernard',
    email: 'Sam@gmail.com',
    contact: '9849291970',
  },
  {
    name: 'Dean Bernard',
    email: 'Dean@gmail.com',
    contact: '9849291970',
  },
  {
    name: 'Jack Beranard',
    email: 'Jack@gmail.com',
    contact: '9849291970',
  },
  {
    name: 'Bunni Bernard',
    email: 'BUnni@gmail.com',
    contact: '9849291970',
  },
  {
    name: 'Saturn bernard',
    email: 'Saturn@gmail.com',
    contact: '9849291970',
  },
];

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = userData.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-lg dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-#6748B dark:text-white p-2 rounded-md">
        Users
      </h4>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* ... (existing profession buttons) */}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-300 dark:bg-meta-4 dark:border-strokedark dark:text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
        <div className="p-3 xl:p-5 bg-green-50">
          <h5 className="text-sm font-medium uppercase xsm:text-base text-gray-160">
            Name
          </h5>
        </div>
        <div className="p-3 text-center xl:p-5 bg-green-50">
          <h5 className="text-sm font-medium uppercase xsm:text-base text-gray-160">
            Email
          </h5>
        </div>
        <div className="p-3 text-center xl:p-5 bg-green-50">
          <h5 className="text-sm font-medium uppercase xsm:text-base text-gray-160">
            Mobile No
          </h5>
        </div>
      </div>

      {filteredUsers.map((user, key) => (
        <div
          className={`grid grid-cols-3 sm:grid-cols-3 ${
            key === filteredUsers.length - 1
              ? ''
              : 'border-b border-stroke dark:border-strokedark'
          }`}
          key={key}
        >
          <div className="flex items-center p-3 xl:p-5">
            <FontAwesomeIcon icon={faUser} className="h-4 w-4 text-green-400 dark:text-white" />
            <p className="hidden ml-2 text-gray-160 dark:text-white sm:block">{user.name}</p>
          </div>

          <div className="flex items-center justify-center p-3 xl:p-5">
            <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-green-400 dark:text-white" />
            <p className="hidden ml-2 text-gray-160 dark:text-white sm:block">{user.email}</p>
          </div>

          <div className="flex items-center space-x-7 p-3 xl:p-5">
              <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-green-400 dark:text-white" />
              <p className="hidden ml-4 text-gray-160 dark:text-white sm:block">{user.contact}</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
