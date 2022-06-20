import { Box } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '~/pages/home';
import Events from '~/pages/events';
import Contact from '~/pages/contact';
import { app } from './sx';
import Nav from './components/Navbar';
import EventDetails from './components/EeventDetails';
import AnimatedRoutes from './components/Animation';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={app}>
      <BrowserRouter>
        <Nav />
        <AnimatedRoutes exitBeforeEnter={true} initial={false}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/contact" element={<Contact />} />
        </AnimatedRoutes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
