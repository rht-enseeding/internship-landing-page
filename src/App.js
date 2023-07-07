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
import InternshipCourses from './components/InternshipCourse';
import Company from './components/Company';
import Apply from './components/apply';
import ContactUS from './components/contact';
import Subscribe from './components/subscribe';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Banner />
      <Applynow />
      <InternshipOffer />
      <Courses />
      <InternshipCourses />
      <Company />
      <FAQ />

      <Apply />
      <ContactUS/>
 {/* <Subscribe/> */}
      <Footer />
    </div>
  );
}

export default App;
