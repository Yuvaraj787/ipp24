import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaDollarSign,
  FaUsers,
  FaPhoneAlt,
} from "react-icons/fa";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ippLogo from "../assets/i++24Logo.png";

export default function EventExplain({
  title,
  description,
  date,
  time,
  venue,
  prize,
  members,
  contact,
  registerLink,
}) {
  return (
    <Dialog>
     
       
          <DialogTrigger asChild >
            <div className="flex flex-col justify-center items-center cursor-pointer sm:w-3/12 max-w-[90%] bg-gray-500 rounded-lg p-3">
              <img src={ippLogo} alt="event" width={300} height={350}/>
              <div>
              <p className="text-xl w-full text-center">{title}</p>
              </div>
            </div>
          </DialogTrigger>
  

        <DialogContent className=' bg-gray-900 '>
          <div className="flex flex-col border-2 rounded-3xl text-black p-7">
            <div className="text-2xl text-teal-400 mb-4">{description}</div>
            <div className="flex flex-row justify-center gap-8">
              <div>
                <div className="flex items-center space-x-4 text-xl text-blue-500 mb-2">
                  <FaCalendarAlt />
                  <span className="text-white">{date}</span>
                </div>

                <div className="flex items-center space-x-4 text-xl text-blue-500 mb-2">
                  <FaMapMarkerAlt />
                  <span className="text-white">{venue}</span>
                </div>

                <div className="flex items-center space-x-4 text-xl text-blue-500 mb-2">
                  <FaClock />
                  <span className="text-white">{time}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-4 text-xl text-blue-500 mb-2">
                  <FaUsers />
                  <span className="text-white">{members}</span>
                </div>

                <div className="flex items-center space-x-4 text-xl text-blue-500 mb-2">
                  <FaDollarSign />
                  <span className="text-white">{prize}</span>
                </div>

                <div className="flex items-center space-x-4 text-xl text-blue-500 mb-2">
                  <FaPhoneAlt />
                  <span className="text-white">
                    {contact?.name} - {contact?.phone}
                  </span>
                </div>
              </div>
            </div>
            {registerLink && (
              <div className="mt-4 text-center">
                <a
                  href={registerLink}
                  className="text-lg text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Here
                </a>
              </div>
            )}
          </div>
        </DialogContent>
      
    </Dialog>
  );
}
