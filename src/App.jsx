import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Projects from "./components/section/Projects";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <Navbar />
          <Home />
          <About />
          <Projects />
        </>
      )}
    </>
  );
}

export default App;
