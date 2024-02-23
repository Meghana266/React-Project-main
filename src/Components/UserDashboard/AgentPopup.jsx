import React from 'react';
import { HeartIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Carousel } from "@material-tailwind/react";

const AgentPopup = ({ agent, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="flex justify-end">
                    <button className='hover:bg-white' onClick={onClose}>&times;</button>
                </div>
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    {/* Carousel for agent images */}
                    <Carousel
                        className="rounded-xl"
                        autoPlay={false} // Disable auto-play
                        animation="fade" // Set animation to fade
                        indicators={false} // Hide indicators
                        navButtonsAlwaysInvisible={true} // Hide navigation buttons
                    >
                        {agent.projects.map((project, index) => (
                            <img
                                key={index}
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover"
                            />
                        ))}
                    </Carousel>
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                </div>
                <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                        <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {agent.name}
                        </h5>
                        <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="-mt-0.5 h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            {agent.rating} Rating
                        </p>
                    </div>
                    <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                        <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70">
                            Location: {agent.location}
                        </span>
                        <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70">
                            Contact: {agent.contact}
                        </span>
                        <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70">
                            Email: {agent.email}
                        </span>
                        <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70">
                            Profession: {agent.profession}
                        </span>
                        <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70">
                            Experience: {agent.experience}
                        </span>
                    </div>
                    <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                        {/* Agent description */}
                    </p>
                </div>
                <div className="p-6 pt-3 flex justify-between">
                    <button
                        className="flex items-center justify-center w-1/2 rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        <HeartIcon className="h-5 w-5 text-white" />
                        Wishlist
                    </button>

                    <button
                        className="flex items-center justify-center w-1/2 rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        <PhoneIcon className="h-5 w-5 text-white mr-2" />
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgentPopup;
