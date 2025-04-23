import Footer from "./components/footer";
import Header from "./components/Header.jsx"
import Hero from "./components/Hero"
import Upcomingevents from "./components/upcomingevents";

export default function Home() {
  return (
    <section className="">
      <Header />
      <Hero/>
      <Upcomingevents />
      <Footer />
    </section>
  );
}
