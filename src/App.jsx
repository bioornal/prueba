import "./App.css";
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
      <main>
        <About />
        {/* <Projects />
        <Skills /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
