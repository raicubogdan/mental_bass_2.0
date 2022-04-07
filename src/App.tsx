import Nav from './components/navbar';
import Footer from './components/footer'
import { Box } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'pages/home';
import Events from 'pages/events';
import Contact from 'pages/contact';
import { app } from 'sx';
import { AnimatedRoutes } from 'components/animation/AnimatedRoutes';
import EventDetails from 'components/eventDetails';

function App() {
  return (
    <Box sx={app}>
        <BrowserRouter>
          <Nav/>
            <AnimatedRoutes> 
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />}/>
              <Route path="/events/:id" element={<EventDetails />}/>
              <Route path="/contact" element={<Contact />}/>
            </AnimatedRoutes>
          <Footer />
        </BrowserRouter>
    </Box>
  );
}

export default App;
