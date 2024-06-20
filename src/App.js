
import './App.css';
import Destination from './components/Destination';
import Footer from './components/Footer';
import Offers from './components/Offers';
import Popular from './components/Popular';
import Ratings from './components/Ratings';
import TopRate from './components/TopRate';
import Topnav from './components/Topnav';

function App() {
  return (
    <>
      <Topnav />  
      <Ratings/>
      <Destination />
      <Offers />
      <Popular />
      <TopRate />
      <Footer />
    </>
  );
}

export default App;
