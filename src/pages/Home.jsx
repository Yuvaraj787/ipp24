import frontImage from '@/assets/image.png';
import Header from '@/components/Header';
import Infinityloop from '@/components/Infinityloop';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import Eventsdiv from '@/components/Eventsdiv';
import NavigationTitle from '@/components/NavigationTitle';
import About from '@/components/About';



export default function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/events"); // Navigates to the About page
      };
  return (
    <>
      <Header/>


<div className='flex flex-col gap-6'>


  <div className='mx-10 my-6 flex items-center justify-center min-h-[100vh]'>
    <img
        src={frontImage}
        alt="Center Image"
        
        className=' absolute h-[93vh] w-[93vw]'/>

    <div className='flex items-center justify-center bg-transparent backdrop-blur-2xl md:w-[75vw] w-[70vw] md:h-[70vh] h-[60vh] px-8 py-8 md:py-10 rounded-3xl border-2 border-slate-500 text-black text-center text-9xl shadow-lg'>
     
         <pre>
        <h className="text-blue-600  text-8xl md:text-9xl font-display font-bold drop-shadow-sm">I<span className='text-8xl md:text-9xl'>++</span> 24</h>
        {"\n"}
          <h1
            class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 font-bold font-display
            bg-gradient-to-r from-teal-400 text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl to-fuchsia-500  text-transparent bg-clip-text
            ">
            Iterate to Infintiy...
          </h1>
          </pre>     
       
    </div>
  </div>


  
    {/* about page container */}
  <div>
    <NavigationTitle title="ABOUT"></NavigationTitle>
  
    <About />
      
  </div>
    
    

    


{/* eve>nts container */}
  <div>
    <NavigationTitle title="EVENTS"></NavigationTitle>
    {/* <Eventsdiv/> */}
    <button onClick={handleClick}>Go to events page Page</button>
      <button ></button>
  </div>

   

  <div>

    <NavigationTitle title="CONTACT"></NavigationTitle>

    <div className="w-full h-20"></div>
      <div>

        <div className="mt-4 flex justify-center ">
          <a href="#" className="mx-4 md:mx-6 border-blue-500 p-2 bg-white rounded-full border-2 text-blue-500">
            <FaFacebook size={50}  />
          </a>
          <a href="#"  className="mx-4 md:mx-6  border-blue-400 p-2 bg-white rounded-full border-2 text-blue-400">
            <FaTwitter size={50} />
          </a>
          <a href="#"  className="mx-4 md:mx-6  border-pink-500 p-2 bg-white rounded-full border-2 text-pink-500">
            <FaInstagram size={50} />
          </a>
        </div>

      </div>
      <div className="w-full h-60"></div>

    </div>
    
    
</div>
    </>
  )
}
