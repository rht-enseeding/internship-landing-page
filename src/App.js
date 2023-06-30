import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Banner from './components/Banner';
import Applynow from './components/Applynow';
import InternshipOffer from './components/InternshipOffer';
import Courses from './components/courses';
import FAQ from './components/faq.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Banner />
      <Applynow />
      <InternshipOffer />
      <Courses />
      <FAQ />
      <Footer/>
    </div>
  );
}

export default App;
