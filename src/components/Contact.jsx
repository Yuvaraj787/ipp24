import React from 'react';

import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Contact() {
  const contacts = [
    {
      name: 'Sanmitha',
      title: 'Chairperson',
      phoneNumber: '+919363200587',
    },
    {
      name: 'Aruna',
      title: 'Overall Coordinator',
      phoneNumber: '+916369427060',
    },
 
  ];

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="flex flex-col gap-10 mx-auto p-6">


      {/* Contact Cards */}
      <div className="flex sm:flex-row  flex-col justify-center sm:gap-24 gap-10">
        {contacts.map((contact, index) => (
          <div key={index} className="border p-4 rounded-lg flex max-w-96 gap-12 justify-between items-center">
            <div>
              <p className="font-bold text-lg">{contact.name}</p>
              <p>{contact.title}</p>
              <p className="text-blue-500">{contact.phoneNumber}</p>
            </div>
            <FaPhone
              size={30}
              className="text-blue-500 cursor-pointer"
              onClick={() => handleCall(contact.phoneNumber)}
            />
          </div>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/company/ista-ceg/mycompany/"
          target='_blank'
          className="border-blue-400 p-3 bg-white rounded-full border-2 text-blue-400"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="https://www.instagram.com/ista__ceg/" 
          target="_blank"
          className="border-pink-500 p-3 bg-white rounded-full border-2 text-pink-500"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="mailto:ista@auist.in"
            target="_blank"
          className="border-blue-500 p-3 bg-white rounded-full border-2 text-blue-500"
        >
          <IoMdMail size={40} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
