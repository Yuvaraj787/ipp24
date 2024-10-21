import { useEffect, useState, useRef } from "react";
import frontImage from "@/assets/image.png";
import Header from "@/components/Header";
import Infinityloop from "@/components/Infinityloop";
import { useNavigate } from "react-router-dom";
import Eventsdiv from "@/components/Eventsdiv";
import NavigationTitle from "@/components/NavigationTitle";
import About from "@/components/About";
import Triangles from "@/components/Triangles";
import Eventslanding from "@/components/Eventslanding";
import Contact from "@/components/Contact";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef(null); 

  const handleClick = () => {
    navigate("/events"); 
  };

  // Simulate loading time
  useEffect(() => {
    setTimeout(() => setLoading(false)); 
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
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white  font-bold font-display bg-gradient-to-r from-teal-400 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl to-fuchsia-500 text-transparent bg-clip-text">
                Iterate to Infinity...
              </h1>
            </pre>
          </div>
        </div>

        {/* About Section */}
        <section ref={aboutRef} >
          <NavigationTitle title="ABOUT" />
          <About />
        </section>

        {/* Events Section */}
        <section>
          <NavigationTitle title="EVENTS" />
          <Eventslanding />
          
        </section>

        <section>
          <NavigationTitle title="CONTACT" />
          <Contact/>
        </section>

        <div className="w-full h-60"></div>
      </div>
    </>
  );
}
