import "./App.css";
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
      <Header />
      <main>
        <About />
        {/* <Projects />
        <Skills /> */}
        <Contact />
      </main>
      {/* <ScrollToTop /> */}
      <Footer />
    </div>
  );
}

export default App;
