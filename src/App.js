import Header from './components/Header';
import Banner from './components/Banner';
import Banner1 from './components/Banner1';
import NewsArticles from './components/NewsArticles';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import FutureITServices from './components/FutureITServices';
import Appointment from './components/Appointment';
import SolutionFocus from './components/SolutionFocus';

import SolutionsIT from './components/SolutionsIT';
import Prominent from './components/Prominent';
import PreferredIT from './components/AboutUs/PreferredIT';
import ExpertIT from './components/AboutUs/ExpertIT';
import './App.css';


function App() {
  return (

    <>
      <Header />
      {/* <Banner/> */}
      <FutureITServices/>
      <SolutionFocus/>
      {/* <FunSection/> */}
      <Appointment/>
      <Testimonial/>
      <NewsArticles/>

      <SolutionsIT/>
      <Prominent/>

      {/* <Sponsers/> */}

      <Footer />
      <PreferredIT/>
      <ExpertIT/>
    </>
  );
}
export default App;
