import './App.css';
import Customers from './Components/Customers/Customers';
import Footer from './Components/Footer';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation';
import Specials from './Components/Specials/Specials';

function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <Specials/>
      <Customers/>
      <Footer/>
    </>

  );
}

export default App;
