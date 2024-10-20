import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaDollarSign,
  FaUsers,
  FaPhoneAlt,
} from "react-icons/fa";
import React from "react";

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
    <div className="flex flex-col bg-black mx-8">
      <div className="flex flex-row justify-center mx-10 items-center gap-16">
        <div className="border-2 basis-1/3 bg-slate-300 text-black h-[50vh] w-[20vw]">
          <div className="flex flex-col justify-center items-center text-4xl">
            <div>{title}</div>
            <div>Details</div>
          </div>
        </div>

        <div className="flex flex-col border-2 basis-2/3 bg-neutral-700 border-neutral-700 rounded-3xl text-black h-[50vh] w-[50vw]">
          <div className="mx-7 my-4 text-3xl text-teal-400">{description}</div>
          <div className="flex flex-row justify-center gap-4">
            <div>
              <div className="flex items-center space-x-4 text-2xl text-blue-500">
                <FaCalendarAlt />
                <span className="text-2xl text-white">{date}</span>
              </div>

              <div className="flex items-center space-x-4 text-2xl text-blue-500">
                <FaMapMarkerAlt />
                <span className="text-2xl text-white">{venue}</span>
              </div>

              <div className="flex items-center space-x-4 text-2xl text-blue-500">
                <FaClock />
                <span className="text-2xl text-white">{time}</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-4 text-2xl text-blue-500">
                <FaUsers />
                <span className="text-2xl text-white">{members}</span>
              </div>

              <div className="flex items-center space-x-4 text-2xl text-blue-500">
                <FaDollarSign />
                <span className="text-2xl text-white">{prize}</span>
              </div>

              <div className="flex items-center space-x-4 text-2xl text-blue-500">
                <FaPhoneAlt />
                <span className="text-2xl text-white">
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
              >
                Register Here
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
