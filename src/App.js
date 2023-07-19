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
import Apply from './components/apply';
import ContactUS from './components/contact';

import Intern from './components/Interns';
import Instructor from './components/Instructor';
import CompanyPic from './components/CompanyPic';
import Company from './components/Company';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Banner />
      <Applynow />
      <Intern />
      <Instructor />
      <Company />
      <InternshipOffer />
      <Courses />
      <InternshipCourses />
      <CompanyPic />
      <FAQ />
      <Apply />
      <ContactUS />
      {/* <Subscribe/> */}
      <Footer />
    </>
  );
}

export default App;
