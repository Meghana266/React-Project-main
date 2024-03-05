import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const userId = useSelector(state => state.user.userId);
  const [agents, setAgents] = useState([]);
  const [agentData, setAgentData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    profession: '',
    experience: '',
    education: '',
    certifications: '',
    projectsCompleted: '',
    skills: '',
    specializations: '',
    contactAddress: '',
    location: '',
    languages: '',
    linkedinUrl: '',
    twitterUrl: '',
    is_verified: false
  });  

  useEffect(() => {
    const fetchAllAgentsData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/agents`);
        if (!response.ok) {
          throw new Error('Failed to fetch agents data');
        }
        const data = await response.json();
        setAgents(data);
      } catch (error) {
        console.error('Error fetching agents data:', error);
      }
    };

    // Initial fetch
    fetchAllAgentsData();

    // Fetch agents data every 5000 milliseconds
    const interval = setInterval(fetchAllAgentsData, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once on component mount

  useEffect(() => {
    // Filter the data to include only the agent with the specific userId
    const filteredAgent = agents.find(agent => agent._id === userId);
    
    // Set the filtered agent data to agentData state
    if (filteredAgent) {
      setAgentData({
        name: filteredAgent.name || '',
        email: filteredAgent.email || '',
        mobile: filteredAgent.mobile || '',
        password: filteredAgent.password || '',
        profession: filteredAgent.profession || '',
        experience: filteredAgent.experience || '',
        education: filteredAgent.education || '',
        certifications: filteredAgent.certifications || '',
        projectsCompleted: filteredAgent.projectsCompleted || '',
        skills: filteredAgent.skills || '',
        specializations: filteredAgent.specializations || '',
        contactAddress: filteredAgent.contactAddress || '',
        location: filteredAgent.location || '',
        languages: filteredAgent.languages || '',
        linkedinUrl: filteredAgent.linkedinUrl || '',
        twitterUrl: filteredAgent.twitterUrl || '',
        is_verified: filteredAgent.is_verified || false
      });
    }
  }, [agents, userId]);
  
  const [formData, setFormData] = useState(agentData);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/agents/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to update agent profile');
      }
      console.log('Agent profile updated successfully');
      // Optionally, you can update agentData state here if needed
    } catch (error) {
      console.error('Error updating agent profile:', error);
    }
  };

  if (!agentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white-100 " >
      <h1 className="mt-10 mb-5 text-center font-sans text-4xl">Profile</h1>
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2">
          {/* Left Side */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* Profile Card */}
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img className="h-auto w-full mx-auto" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="Jane Doe" />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{agentData.name}</h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">{agentData.profession}</h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">Nov 07, 2016</span>
                </li>
              </ul>
            </div>
            {/* End of profile card */}
            <div className="my-4"></div>
            {/* Friends card */}
            <div className="bg-white p-3 hover:shadow">
              <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span className="text-green-500">
                  <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <span>Similar Profiles</span>
              </div>
              <div className="grid grid-cols-3">
                <div className="text-center my-2">
                  <img className="h-16 w-16 rounded-full mx-auto" src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg" alt="Kojstantin" />
                  <a href="#" className="text-main-color">Kojstantin</a>
                </div>
                <div className="text-center my-2">
                  <img className="h-16 w-16 rounded-full mx-auto" src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4" alt="James" />
                  <a href="#" className="text-main-color">James</a>
                </div>
                <div className="text-center my-2">
                  <img className="h-16 w-16 rounded-full mx-auto" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="Natie" />
                  <a href="#" className="text-main-color">Natie</a>
                </div>
                <div className="text-center my-2">
                  <img className="h-16 w-16 rounded-full mx-auto" src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png" alt="Casey" />
                  <a href="#" className="text-main-color">Casey</a>
                </div>
              </div>
            </div>
            {/* End of friends card */}
          </div>
          {/* Right Side */}
          <div className="w-full md:w-9/12 mx-2 h-64">
            {/* Profile tab */}
            {/* About Section */}
            <div className="text-gray-700">
              <div className="grid md:grid-cols-1 text-sm">
                {/* Rendering fields dynamically from the agentData */}
                <form onSubmit={handleSubmit}>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Name:</label>
                    <input
                      type="text"
                      name="name"
                      placeholder={agentData.name || 'Enter your name'}
                      value={agentData.name}
                      onChange={handleChange}
                      className="text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Email:</label>
                    <input
                      type="email"
                      name="email"
                      placeholder={agentData.email || 'Enter your email'}
                      value={agentData.email}
                      onChange={handleChange}
                      className="text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {/* Add similar input fields for other fields */}
                  <div>
                    <label className="text-sm font-medium text-gray-600">Mobile:</label>
                    <input
                      type="text"
                      name="mobile"
                      placeholder={agentData.mobile || 'Enter your mobile number'}
                      value={agentData.mobile}
                      onChange={handleChange}
                      className="text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Experience:</label>
                    <input
                      type="number"
                      name="experience"
                      placeholder={agentData.experience || 'Enter your experience'}
                      value={agentData.experience}
                      onChange={handleChange}
                      className="text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Education:</label>
                    <input
                      type="text"
                      name="education"
                      placeholder={agentData.education || 'Enter your education'}
                      value={agentData.education}
                      onChange={handleChange}
                      className="text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {/* Add similar input fields for other fields */}
                  <div>
                    <label className="text-sm font-medium text-gray-600">Languages:</label>
                    <input
                      type="text"
                      name="languages"
                      placeholder={agentData.languages || 'Enter your languages'}
                      value={agentData.languages}
                      onChange={handleChange}
                      className="text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {/* Add similar input fields for other fields */}
                  <div>
                    <label className="text-sm font-medium text-gray-600">LinkedIn URL:</label>
                    <input
                      type="text"
                      name="linkedinUrl"
                      placeholder={agentData.linkedinUrl || 'Enter your LinkedIn URL'}
                      value={agentData.linkedinUrl}
                      onChange={handleChange}
                      className="text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {/* Add similar input fields for other fields */}
                  <div>
                    <label className="text-sm font-medium text-gray-600">Twitter URL:</label>
                    <input
                      type="text"
                      name="twitterUrl"
                      placeholder={agentData.twitterUrl || 'Enter your Twitter URL'}
                      value={agentData.twitterUrl}
                      onChange={handleChange}
                      className="text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {/* Add similar input fields for other fields */}
                  <div className="mt-3">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* End of profile tab */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
