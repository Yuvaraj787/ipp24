import React from 'react'

export default function EventExplain() {
  return (
    <>
    <div className='flex flex-col bg-black mx-8'>
      <div className='flex flex-row justify-center mx-10 items-center gap-16'>
        <div className='border-2 basis-1/3 bg-slate-300 text-black h-[60vh] w-[25vw]'>
        <div className=' flex flex-col justify-center items-center text-6xl'>
            <div>Hackthon</div>
            <div>Details</div>
        </div>
        </div>
        <div className='flex flex-col border-2 basis-2/3 bg-neutral-700 border-neutral-700 rounded-3xl text-black h-[60vh] w-[50vw]'>
            <div className='mx-7 my-4 text-3xl text-teal-400'>
            A Collaborative event where participants work in teams to solve real-world challenges,
             focusing on Inclusion and innovation. It encourages creativity and technological innovation, 
             providing a platform for individuals to work collectively on devising innovative solutions within
              a limited timeframe. It will be conducted in 2 rounds - Round 1 is online idea submission. Round 
              2 is a 12 hour offline hackathon.

            </div>
            <div className='flex flex-row justify-center gap-4'>
                <div>
                    <div className='text-2xl text-rose-400'>
                        Date:<span className='text-2xl text-fuchsia-500'>26/10/2024</span>
                    </div>
                    <div className='text-2xl text-rose-400'>
                        Venue:<span className='text-2xl text-fuchsia-500'>IT department, 2 floor lab</span>
                    </div>

                    <div className='text-2xl text-rose-400'>
                        Timings:<span className='text-2xl text-fuchsia-500'>9:00AM - 10:30AM</span>
                    </div>
                </div>
                <div>
                    <div className='text-2xl text-rose-400'>
                        Team size:<span className='text-2xl text-fuchsia-500'>2 Members</span>
                    </div>

                    <div className='text-2xl text-rose-400'>
                        Price pool:<span className='text-2xl text-fuchsia-500'>3K</span>
                    </div>

                    <div className='text-2xl text-rose-400'>
                        POC:<span className='text-2xl text-fuchsia-500'>event deptuy - 0976548976</span>
                    </div>
                    </div>
                
            </div>
        </div>
        
      </div>
      </div>
    </>
  )
}
