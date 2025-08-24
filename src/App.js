import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Sponsors from "./components/sponsors/Sponsors";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sponsors />
        <Services />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
