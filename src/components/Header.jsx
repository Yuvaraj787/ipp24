import logoLeft from '@/assets/ist_logo.png'; 
import logoCenter from '@/assets/i++24Logo.png';
export default function Header() {
  return (
    <>
      <header className="mx-8 sticky  top-0 z-10 rounded-lg bg-gradient-to-r  from-blue-900 via-fuchsia-600 to-blue-900 flex justify-between ">
        
        <div className="basis-1/3">
          <img src={logoLeft} alt="Left Image" className="mx-4 my-5 w-14 h-14" />
        </div>

        <div className="basis-1/3">
          <img src={logoCenter} alt="Center Image" className="w-30 h-24 mx-auto" />
        </div>

        <nav className="basis-1/3">
          <ul className=' mt-6 flex text-xl gap-6 px-4 flex-row justify-end space-x-1'>
            <li className=" p-2"><a href="#">Home</a></li>
            <li className=" p-2"><a href="#">About</a></li>
            <li className=" p-2"><a href="#">Events</a></li>
            <li className=" p-2"><a href="#">Contact</a></li>
          </ul>
        </nav>

      </header>
    </>
  )
}
