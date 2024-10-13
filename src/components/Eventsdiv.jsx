import eventsimage from "@/assets/eventsimage.jpeg"

export default function Eventsdiv() {
  return (
    
      
    //   <div className='flex items-center justify-center min-h-[160vh]'>
    //       <img
    //         src={eventsimage}
    //         className="mx-10 my-10 w-[93vw]" alt="eventimage"/>

    //       <div className='flex items-center justify-center bg-white w-[75vw] opacity-50 z-10 px-8 py-10 rounded-lg text-black text-6xl backdrop-blur-md'>
    //       <pre>
    //         while ( i &lt; {'\u221E'} ) {"{"}{"\n"}
    //             i++;
    //         {"\n"}{"}"}
    //         <span className='text-4xl'>{"\n"}{"//We won't stop till Infinity"}</span>
    //         </pre>


    //       </div>
    //     </div>
  
    <div className='flex items-center justify-center min-h-[140vh]'>
    <img
      src={eventsimage}
      alt="Center Image"
      
      className=' mx-8 absolute min-h-[95vh] w-[93vw]'/>

    <div className='flex items-center min-h-[90vh] w-[90vw] justify-center  bg-transparent backdrop-blur-2xl  px-8 py-10 rounded-lg border-gray-700 text-black text-6xl '>
      <div className="flex flex-row space-x-40">
        <div className="w-[30vw] h-[70vh]  border-slate-900 border-8">
          this content 1
        </div>

        <div className="w-[30vw] h-[85vh] border- border-8">
          this content 2
        </div>
      </div>
    

    </div>
  </div>

  )
}
