import React, { useState, useEffect } from 'react';
import architectData from './architectData'; 
import ArchitectPopup from './ArchitectPopup'; 
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt'; // New: Location icon
  

const ShowArchitects = ({ handleSignupClick, handlePropertyClick }) => {
    const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

    const handleCardClick = () => {
        setShowPopup(true); // Show the popup when clicking on the card
    };
    const [architects, setArchitects] = useState([]);
    const [displayedArchitects, setDisplayedArchitects] = useState([]);

    const architect = {
        name: 'John Doe',
        rating: 4.5,
        location: 'New York, USA',
        contact: '+1234567890',
        email: 'johndoe@example.com',
        profession: 'Architect',
        experience: '10 years',
        projects: [] // Add projects array if needed
    };
    
    useEffect(() => {
        // Fetch data from the backend and set it to architects state
        // const fetchArchitectsData = async () => {
        //     try {
        //         const response = await fetch('http://localhost:5000/architects');
        //         if (!response.ok) {
        //             throw new Error('Failed to fetch architects data');
        //         }
        //         const data = await response.json();
        //         setArchitects(data); // Set the fetched data to the architects state
        //         setDisplayedArchitects(data); // Initially set displayedArchitects to all architects
        //     } catch (error) {
        //         console.error('Error:', error);
        //     }
        // };

        // fetchArchitectsData();
        setArchitects(architectData);
        setDisplayedArchitects(architectData);
    }, []);

    const [searchCriteria, setSearchCriteria] = useState({
        search: '',
        ratingMin: '',
        ratingMax: '',
        location: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria({ ...searchCriteria, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Filter architects based on search criteria
        const filteredArchitects = architects.filter(architect => {
            const ratingInRange =
                (!searchCriteria.ratingMin || parseInt(architect.rating) >= parseInt(searchCriteria.ratingMin)) &&
                (!searchCriteria.ratingMax || parseInt(architect.rating) <= parseInt(searchCriteria.ratingMax));

            const locationMatch =
                !searchCriteria.location || architect.location.toLowerCase().includes(searchCriteria.location.toLowerCase());

            const searchMatch =
                architect.name.toLowerCase().includes(searchCriteria.search.toLowerCase()) ||
                architect.email.toLowerCase().includes(searchCriteria.search.toLowerCase());

            return ratingInRange && locationMatch && searchMatch;
        });

        setDisplayedArchitects(filteredArchitects);
    };
    const renderRatingStars = (rating) => {
        const filledStars = Math.floor(rating);
        const starIcons = [];
    
        // Add solid stars based on the rating number
        for (let i = 0; i < filledStars; i++) {
          starIcons.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 mr-1" />);
        }
    
        // Add remaining regular stars if rating is not a whole number
        if (rating % 1 !== 0) {
          starIcons.push(<FontAwesomeIcon key={filledStars} icon={faStar} className="far fa-star text-yellow-500 mr-1" />);
        }
    
        return starIcons;
      };

    return (
        <div>
            <div className="m-10 w-screen max-w-screen-md">
                <div className="flex flex-col">
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-6 md:mb-10 w-full">
                                {/* Search by name, email, rating, location, etc. */}
                                <input
                                    type="text"
                                    name="search"
                                    value={searchCriteria.search}
                                    onChange={handleInputChange}
                                    className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    placeholder="Search by name, email, location"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {/* Rating range */}
                                <div className="flex flex-col">
                                    <label htmlFor="ratingMin" className="text-sm font-medium text-stone-600">Min Rating</label>
                                    <input
                                        type="number"
                                        id="ratingMin"
                                        name="ratingMin"
                                        value={searchCriteria.ratingMin}
                                        onChange={handleInputChange}
                                        className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="ratingMax" className="text-sm font-medium text-stone-600">Max Rating</label>
                                    <input
                                        type="number"
                                        id="ratingMax"
                                        name="ratingMax"
                                        value={searchCriteria.ratingMax}
                                        onChange={handleInputChange}
                                        className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                </div>
                                {/* Location */}
                                <div className="flex flex-col">
                                    <label htmlFor="location" className="text-sm font-medium text-stone-600">Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={searchCriteria.location}
                                        onChange={handleInputChange}
                                        className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                </div>
                                {/* Add more input fields for additional search criteria if needed */}
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4 md:gap-6 justify-end">
                                <button type="reset" className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">Reset</button>
                                <button type="submit" className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Display architects */}
            <Card className="w-96" onClick={handleCardClick}>
            <CardHeader floated={false} className="h-80">
                <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                Natalie Paisley
                </Typography>
                <div className="flex items-center justify-center mb-2"> {/* New: Flex container for location */}
                <Typography color="blue-gray" className="font-medium" textGradient>
                    Architect |
                </Typography>
                <Typography color="blue-gray" className="font-medium ml-1" textGradient>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-600 mr-1" /> {/* New: Location icon */}
                    New York, USA {/* New: Place name */}
                </Typography>
                </div>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2"> {/* Updated: justify-end to align icons to the right */}
                {/* Star rating */}
                <div className="flex items-center">
                {renderRatingStars(4)} {/* Example rating */}
                </div>
                {/* Phone icon */}
                <Tooltip content="Call">
                <Typography as="a" href="#phone" variant="lead" color="blue" textGradient>
                    <FontAwesomeIcon icon={faPhoneAlt} flip="horizontal" /> {/* Updated: flip="horizontal" to open towards right */}
                </Typography>
                </Tooltip>
                {/* Email icon */}
                <Tooltip content="Email">
                <Typography as="a" href="#email" variant="lead" color="blue" textGradient>
                    <FontAwesomeIcon icon={faEnvelope} />
                </Typography>
                </Tooltip>
            </CardFooter>
            </Card>
            {showPopup && <ArchitectPopup architect={architect} onClose={() => setShowPopup(false)} />}
        </div>
    );
};

export default ShowArchitects;
