import React, { useState } from 'react';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prevState => !prevState);

  const schema = {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    profession: { type: String, enum: ['Architect', 'Contractor', 'Interior Designer'], required: true },
    experience: { type: Number },
    education: { type: String },
    certifications: { type: String },
    projectsCompleted: { type: String },
    skills: { type: String },
    specializations: { type: String },
    contactAddress: { type: String },
    location: { type: String },
    languages: { type: String },
    linkedinUrl: { type: String },
    twitterUrl: { type: String },
  };

  const sampleData = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    mobile: '+11 998001001',
    password: '********',
    profession: 'Architect',
    experience: 5,
    education: 'Masters Degree in Architecture',
    certifications: 'LEED Certified',
    projectsCompleted: '25+',
    skills: 'AutoCAD, SketchUp, Revit',
    specializations: 'Residential Architecture, Sustainable Design',
    contactAddress: '123 Main St, Cityville',
    location: 'Cityville, USA',
    languages: 'English, Spanish',
    linkedinUrl: 'https://www.linkedin.com/in/janedoe',
    twitterUrl: 'https://twitter.com/janedoe',
  };

  return (
    <div className="bg-white-100 " >
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* Left Side */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* Profile Card */}
          <div className="bg-white p-3 border-t-4 border-green-400">
            <div className="image overflow-hidden">
              <img className="h-auto w-full mx-auto" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="Jane Doe" />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{sampleData.name}</h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6">{sampleData.profession}</h3>
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
                  <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <span>Similar Profiles</span>
              </div>
              <div className="grid grid-cols-3">
                <div className="text-center my-2">
                  <img className="h-16 w-16 rounded-full mx-auto"
                    src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                    alt="Kojstantin"/>
                  <a href="#" className="text-main-color">Kojstantin</a>
                </div>
                <div className="text-center my-2">
                  <img className="h-16 w-16 rounded-full mx-auto"
                    src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                    alt="James"/>
                  <a href="#" className="text-main-color">James</a>
                </div>
                <div className="text-center my-2">
                  <img className="h-16 w-16 rounded-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt="Natie"/>
                  <a href="#" className="text-main-color">Natie</a>
                </div>
                <div className="text-center my-2">
                  <img className="h-16 w-16 rounded-full mx-auto"
                    src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                    alt="Casey"/>
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
            <div className="bg-white p-3 shadow-sm rounded-sm relative">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
                <button className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600" >Update</button>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-1 text-sm">
                  {/* Rendering fields dynamically from the schema */}
                  {Object.entries(schema).map(([fieldName, fieldDetails]) => (
                    fieldName !== 'password' && (
                      <div key={fieldName} className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">{fieldName}</div>
                        <div className="px-4 py-2">{sampleData[fieldName]}</div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* End of about section */}
            <div className="my-4"></div>
            {/* Experience and education */}
            {/* <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                    <span className="tracking-wide">Experience</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-teal-600">Owner at Her Company Inc.</div>
                      <div className="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                    <li>
                      <div className="text-teal-600">Owner at Her Company Inc.</div>
                      <div className="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                    <li>
                      <div className="text-teal-600">Owner at Her Company Inc.</div>
                      <div className="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                    <li>
                      <div className="text-teal-600">Owner at Her Company Inc.</div>
                      <div className="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </span>
                    <span className="tracking-wide">Education</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-teal-600">Masters Degree in Oxford</div>
                      <div className="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                    <li>
                      <div className="text-teal-600">Bachelors Degreen in LPU</div>
                      <div className="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                  </ul>
                </div>
              </div> 
              {/* End of Experience and education grid */}
            {/* End of profile tab */}
          </div>
        </div>
      </div>
    </div>

);
}
export default Profile;
