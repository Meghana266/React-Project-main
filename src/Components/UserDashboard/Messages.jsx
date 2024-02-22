import React, { useState, useEffect } from "react";

export default function Messages() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch("http://localhost:5000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="bg-gray-100 px-1 py-1">
      {contacts.map((contacts) => (
        <article
          key={contacts._id} // Assuming your contacts objects have a unique identifier
          className="mx-auto my-10 flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-5xl md:flex-row md:items-center"
        >
          <div className="py-4 sm:py-8">
            <a href="#" className="mb-6 block text-2xl font-medium text-gray-700">
              {contacts.subject}
            </a>
            <p className="mb-6 text-gray-500">{contacts.message}</p>
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
                alt="Simon Lewis"
              />
              <p className="ml-4 w-56">
                <strong className="block font-medium text-gray-700">{contacts.name}</strong>
                <span className="text-sm text-gray-400">Jun 26, 2022</span>
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
