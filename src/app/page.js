import Footer from "./components/footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header.jsx"
import Hero from "./components/Hero"
import Upcomingevents from "./components/upcomingevents";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <section className="">
      <Header />
      <Hero/>
      <WhoWeAre />
      <Gallery />
      <Upcomingevents />
      <Footer />
    </section>
  );
}
