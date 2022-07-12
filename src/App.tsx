import { BrowserRouter, Route } from 'react-router-dom';
import Home from '~/pages/home';
import Events from '~/pages/events/list';
import Contact from '~/pages/contact';
import Navbar from './components/Navbar';
import EventDetails from './pages/events/details';
import AnimatedRoutes from './components/Animation';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [showLoader, setShowLoader] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setShowLoader(false), 3000)
  })

  return (
    <BrowserRouter>
      <div className={`relative h-full flex flex-col justify-end`}>
        <Navbar />
        <AnimatedRoutes exitBeforeEnter={true} initial={false}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/contact" element={<Contact />} />
        </AnimatedRoutes>
        <Footer />
        <h1 className={`absolute flex w-full h-full items-center justify-center bg-black text-white ${showLoader ? 'block': 'hidden' }`}>
          <CircularProgress color='inherit'/>
        </h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
