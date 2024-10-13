
// import frontImage from '@/assets/image.png';
// import Header from '@/components/Header';
// import Infinityloop from '@/components/Infinityloop';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// import Eventsdiv from '@/components/Eventsdiv';
// import NavigationTitle from '@/components/NavigationTitle';
// import About from '@/components/About';


import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '@/pages/Home';
import Events from '@/pages/Events';
export default function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  </BrowserRouter>
    
    </>
    
  );
}
