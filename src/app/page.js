import Footer from "./components/footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Sponsors from './components/Sponsors';
import Upcomingevents from "./components/upcomingevents";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <section className="">
      <Header />
      <Hero/>
      <WhoWeAre />
      <Gallery />
      <Sponsors />
      <Upcomingevents />
      <Footer />
    </section>
  );
}
