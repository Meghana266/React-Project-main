import React from "react";
import { Typography } from "@material-tailwind/react";

export default function PostedProperties() {
  // Static data for houses
  const houses = [
    {
      title: "Beautiful House",
      location: "New York, USA",
      price: "$500,000",
      bedrooms: "4",
      bathrooms: "3",
      squareFootage: "2500 sqft",
      yearBuilt: "2010",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus eget eros vestibulum bibendum.",
      contactInfo: "John Doe - 123-456-7890",
      images: ["https://via.placeholder.com/800x525"],
    },
    // Add more houses as needed
  ];

  // Static data for lands
  const lands = [
    {
      title: "Scenic Land",
      location: "California, USA",
      price: "$200,000",
      area: "5 acres",
      description: "A beautiful piece of land with stunning views of the mountains and valleys.",
      contactInfo: "Jane Smith - 987-654-3210",
      images: ["https://example.com/land1.jpg"],
    },
    // Add more lands as needed
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        {/* Posted Houses */}
        <div className="mb-6 sm:mb-10 lg:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Posted Houses</h2>
          {houses.map((house, index) => (
            <div key={`house-${index}`} className="flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6">
              {/* Display house image */}
              <img src={house.images[0]} alt={house.title} className="w-32 h-32 sm:w-40 sm:h-40 object-cover" />

              {/* Display house details */}
              <div className="flex flex-1 flex-col justify-between py-4">
                <div>
                  <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{house.title}</a>
                  <span className="block text-gray-500">Location: {house.location}</span>
                  <span className="block text-gray-500">Price: {house.price}</span>
                </div>
                <div>
                  <span className="mb-1 block font-bold text-gray-800 md:text-lg">Square Footage: {house.squareFootage}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col justify-between py-4">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mr-2">Update</button>
                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg">Delete</button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Posted Lands */}
        <div className="mb-6 sm:mb-10 lg:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Posted Lands</h2>
          {lands.map((land, index) => (
            <div key={`land-${index}`} className="flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6">
              {/* Display land image */}
              <img src={land.images[0]} alt={land.title} className="w-32 h-32 sm:w-40 sm:h-40 object-cover" />

              {/* Display land details */}
              <div className="flex flex-1 flex-col justify-between py-4">
                <div>
                  <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{land.title}</a>
                  <span className="block text-gray-500">Location: {land.location}</span>
                  <span className="block text-gray-500">Price: {land.price}</span>
                </div>
                <div>
                  <span className="mb-1 block font-bold text-gray-800 md:text-lg">Area: {land.area}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col justify-between py-4">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mr-2">Update</button>
                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



// export default function PostedProperties() {
//   return (
//     <div className="bg-white py-6 sm:py-8 lg:py-12">
//       <div className="mx-auto max-w-screen-lg px-4 md:px-8">
//         <div className="mb-6 sm:mb-10 lg:mb-16">
//           <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Your Cart</h2>
//         </div>

//         <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6">
//           {/* Product 1 */}
//           <div className="flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6">
//             <a href="#" className="group relative block h-48 w-32 overflow-hidden bg-gray-100 sm:h-56 sm:w-40">
//               <img src="https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200" loading="lazy" alt="Photo by Thái An" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
//             </a>

//             {/* Product details */}
//             <div className="flex flex-1 flex-col justify-between py-4">
//               <div>
//                 <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Top</a>
//                 <span className="block text-gray-500">Size: S</span>
//                 <span className="block text-gray-500">Color: White</span>
//               </div>

//               <div>
//                 <span className="mb-1 block font-bold text-gray-800 md:text-lg">$15.00</span>
//                 <span className="flex items-center gap-1 text-sm text-gray-500">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                   In stock
//                 </span>
//               </div>
//             </div>

//             {/* Quantity and delete */}
//             <div className="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
//               <div className="flex flex-col items-start gap-2">
//                 <div className="flex h-12 w-20 overflow-hidden rounded border">
//                   <input type="number" value="1" className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring" />
//                   <div className="flex flex-col divide-y border-l">
//                     <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">+</button>
//                     <button className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">-</button>
//                   </div>
//                 </div>
//                 <button className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Delete</button>
//               </div>
//               <div className="ml-4 pt-3 md:ml-8 md:pt-2 lg:ml-16">
//                 <span className="block font-bold text-gray-800 md:text-lg">$15.00</span>
//               </div>
//             </div>
//           </div>
//           {/* End Product 1 */}

//           {/* Product 2 and 3 would follow the same structure */}
//         </div>

//         {/* Totals */}
//         <div className="flex flex-col items-end gap-4">
//           <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
//             <div className="space-y-1">
//               <div className="flex justify-between gap-4 text-gray-500">
//                 <span>Subtotal</span>
//                 <span>$129.99</span>
//               </div>
//               <div className="flex justify-between gap-4 text-gray-500">
//                 <span>Shipping</span>
//                 <span>$4.99</span>
//               </div>
//             </div>
//             <div className="mt-4 border-t pt-4">
//               <div className="flex items-start justify-between gap-4 text-gray-800">
//                 <span className="text-lg font-bold">Total</span>
//                 <span className="flex flex-col items-end">
//                   <span className="text-lg font-bold">$134.98 USD</span>
//                   <span className="text-sm text-gray-500">including VAT</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//           <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Check out</button>
//         </div>
//       </div>
//     </div>
//   );
// }
