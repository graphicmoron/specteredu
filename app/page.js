import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Hero from "./../components/Home/Hero";
import Aboutus from './../components/Home/Aboutus';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutus/>
      <Footer />
    </div>
  );
}
