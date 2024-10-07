import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/Navbar";
import HowItWorks from "./components/howItWorks/howItWorks";
import Carousel from "./components/carousel/carousel";
import WhyUcook from "./components/whyUcook/whyUcook";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Carousel />
      <WhyUcook />
    </>
  );
}

export default App;
