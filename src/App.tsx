import background from './images/background.png';
import Navbar from './components/navbar';
import { AppContainer, BackgroundImage } from './AppElements'
import Footer from './components/footer'

function App() {
  return (
    <AppContainer>
      <BackgroundImage src={background} alt="background"/>
      <Navbar />
      <Footer />
    </AppContainer>
  );
}

export default App;
