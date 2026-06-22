
import Hero from "./../components/Home/Hero";
import Aboutus from "./../components/Home/Aboutus";
import Services from "./../components/Home/Services";
import HowWeWork from "./../components/Home/HowWeWork";
import TopUni from "./../components/Home/TopUni";
import Feedback from "./../components/Home/Feedback";
import Founders from "./../components/Home/Founders";

export default function Home() {
  return (
    <div>
      <Hero />
      <Aboutus />
      <Services />
      
      <HowWeWork />
      <TopUni />
      <Feedback />
      <Founders />
    </div>
  );
}
