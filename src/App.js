import Header from './components/Header';
import Banner from './components/Banner';
import Banner1 from './components/Banner1';
import NewsArticles from './components/NewsArticles';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import FutureITServices from './components/FutureITServices';
import Appointment from './components/Appointment';
import SolutionFocus from './components/SolutionFocus';
import './App.css';


function App() {
  return (

    <>
      <Header />
      <Banner/>
      <FutureITServices/>
      <SolutionFocus/>
      <Appointment/>
      <Testimonial/>
      <NewsArticles/>
      <Footer />
    </>
  );
}
export default App;
