import Nav from './components/navbar';
import Footer from './components/footer'
import { Box } from '@mui/material';
import { appProps } from './AppElements';

function App() {
  return (
    <Box sx={appProps} >
      <Nav/>
      {/* <Footer />  */}
    </Box>
  );
}

export default App;
