import About from "../components/About";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <About />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
