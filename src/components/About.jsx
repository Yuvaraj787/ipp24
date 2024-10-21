
export default function About() {
  return (
    
    <div className="mt-10">
    <div className="mx-10 flex flex-col md:flex-row justify-between">
      {/* ISTA Section */}
      
      <div className="flex-1 flex flex-col xl:flex-row">
        <div className="mx-4 flex justify-center text-6xl text-indigo-700 items-center">
          <p className='xl:-rotate-90'>ISTA</p>
        </div>
        <div className="text-center text-2xl text-gray-400 mx-4">
          <p className="leading-9 mx-4">
            Department of Information Science and Technology is one of the youngest and fastest growing departments of Anna University. Under this department, we, ISTA, are a staff-student run body striving to work hard for the betterment of our department, host various technical symposiums and represent IST in various activities. We also aim at guiding students across all years with a variety of matters, for a better tomorrow.
          </p>
        </div>
      </div>
  
      {/* Vertical Line Separator */}
      <div className="border-l-2 border-gray-400 h-98 mx-4 hidden xl:block"></div>
      <div className="border-t-2 mt-6 border-gray-400 h-2 xl:hidden"></div>
      {/* I++ Section */}
      <div className="flex-1 flex flex-col xl:flex-row">
      <div className="mx-4 flex justify-center items-center text-6xl text-indigo-700">
          <p className='xl:hidden '>I++</p>
        </div>
        <div className="text-center mx-4 text-2xl text-gray-400">
          <p className=" leading-9 mx-4">
            Held every year in the odd semester, I++ is the intra-department symposium held by ISTA. With a footfall of about 800 odd students every year, we strive hard to do our part in bringing together the student community of not just our department, but the entire community at the College of Engineering, Guindy.
          </p>
        </div>
        <div className="mx-4 flex justify-center items-center text-6xl text-indigo-700">
        <p className="hidden xl:block xl:rotate-90">I++</p>
        </div>
      </div>
    </div>
  </div>
  
    
  )
}
