import { Box } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '~/pages/home';
import Events from '~/pages/events/list';
import Contact from '~/pages/contact';
import { app } from './sx';
import Navbar from './components/Navbar';
import EventDetails from './pages/events/details';
import AnimatedRoutes from './components/Animation';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full h-full relative'>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes exitBeforeEnter={true} initial={false}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/contact" element={<Contact />} />
        </AnimatedRoutes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
