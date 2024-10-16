import {  useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

export default function Eventslanding() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const aboutRef = useRef(null); // Reference for the About section
  
    const handleClick = () => {
      navigate("/events"); // Navigates to the Events page
    };
  return (
    <>
     <section>
      <div className=" text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-2xl text-fuchsia-600 uppercase tracking-loose">Event Categories</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Explore Different Events
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Discover the various exciting events happening in our I++ 24. Each category offers something unique for everyone.
            </p>
            {/* <button
            onClick={handleClick}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Go to Events Page
          </button> */}
            <a
              href="#" onClick={handleClick}
              className="bg-transparent mr-auto hover:bg-purple-400 text-2xl text-fuchsia-600 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-blue-300 hover:border-transparent"
            >
              Explore More
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-blue-555 absolute h-full border"
                  style={{ right: '50%', border: '2px solid #2822f0', borderRadius: '1%' }}
                ></div>
                <div
                  className="border-2-2 border-blue-555 absolute h-full border"
                  style={{ left: '50%', border: '2px solid #2822f0', borderRadius: '1%' }}
                ></div>

                {/* Event Category: Hackathon */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-2xl text-fuchsia-600">Hackathon</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Showcase Your Coding Skills</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Participate in the hackathon and build exciting projects in a competitive environment. Bring your ideas to life!
                    </p>
                  </div>
                </div>

                {/* Event Category: Workshop */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-2xl text-fuchsia-600">Workshop</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Learn New Skills</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Join hands-on workshops led by industry experts and enhance your skill set with the latest tools and technologies.
                    </p>
                  </div>
                </div>

                {/* Event Category: Tech Events */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-2xl text-fuchsia-600">Tech Events</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Engage in Tech Competitions</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Dive into various tech-based competitions like coding challenges, robotics contests, and innovation demos.
                    </p>
                  </div>
                </div>

                {/* Event Category: Non-Tech Events */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-2xl text-fuchsia-600">Non-Tech Events</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Unwind with Fun Activities</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Take a break from tech and participate in fun, non-technical events like quizzes, debates, and creative challenges.
                    </p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
