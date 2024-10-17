import { useEffect, useState, useRef } from "react";
import frontImage from "@/assets/image.png";
import Header from "@/components/Header";
import Infinityloop from "@/components/Infinityloop";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Eventsdiv from "@/components/Eventsdiv";
import NavigationTitle from "@/components/NavigationTitle";
import About from "@/components/About";
import Triangles from "@/components/Triangles";
import Eventslanding from "@/components/Eventslanding";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef(null); // Reference for the About section

  const handleClick = () => {
    navigate("/events"); // Navigates to the Events page
  };

  // Simulate loading time
  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Infinityloop />
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="flex flex-col gap-6">
        {/* Hero Section */}
        <div className="flex items-center justify-center min-h-[100vh] relative">
          {/* Uncomment to add a background image */}
          {/* <img src={frontImage} alt="Center Image" className='absolute h-[100vh] w-[100%]' /> */}
          <div className="flex items-center justify-center bg-[#151b23] backdrop-blur-2xl md:w-[100vw] w-[100vw] md:h-[100vh] h-[100vh] px-8 py-8 md:py-10 border-slate-700 text-black text-center text-9xl shadow-lg z-10">
            <div className="overflow-hidden h-[100%] w-full fixed">
              <Triangles />
            </div>{" "}
            <pre>
              <h1 className="text-blue-600 text-7xl md:text-9xl font-display font-bold drop-shadow-sm">
                I<span className="text-8xl md:text-9xl">++</span> 24
              </h1>
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 font-bold font-display bg-gradient-to-r from-teal-400 text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl to-fuchsia-500 text-transparent bg-clip-text">
                Iterate to Infinity...
              </h1>
            </pre>
          </div>
        </div>

        <section id="about" ref={aboutRef}>
          <NavigationTitle title="ABOUT" />
          <About />
        </section>

        <section id="events">
          <NavigationTitle title="EVENTS" />
          <Eventslanding />
        </section>

        <section id="contact">
          <NavigationTitle title="CONTACT" />
          <div className="mt-4 flex justify-center">
            <a
              href="#"
              className="mx-4 md:mx-6 border-blue-500 p-2 bg-white rounded-full border-2 text-blue-500"
            >
              <FaFacebook size={50} />
            </a>
            <a
              href="#"
              className="mx-4 md:mx-6 border-blue-400 p-2 bg-white rounded-full border-2 text-blue-400"
            >
              <FaTwitter size={50} />
            </a>
            <a
              href="#"
              className="mx-4 md:mx-6 border-pink-500 p-2 bg-white rounded-full border-2 text-pink-500"
            >
              <FaInstagram size={50} />
            </a>
          </div>
        </section>

        <div className="w-full h-60"></div>
      </div>
    </>
  );
}
