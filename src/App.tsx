import { BrowserRouter, Route } from 'react-router-dom';
import Home from '~/pages/home';
import Events from '~/pages/events/list';
import Contact from '~/pages/contact';
import Navbar from './components/Navbar';
import EventDetails from './pages/events/details';
import AnimatedRoutes from './components/Animation';
import Footer from './components/Footer';

function App() {
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
      </div>
    </BrowserRouter>
  );
}

export default App;
