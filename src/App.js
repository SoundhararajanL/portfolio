import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/navbar/navbar";
import Header from "./components/header/header";
import About from "./components/about/About";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Contact from "./components/contact/contact";

function App() {

  
  return (
    <div style={{marginBottom:"10%"}}> 
      <Header/>
      <Nav />
      <About/>
      <Experience/>
     <Services/>
     <Contact/>
     
    </div>
  );
}

export default App;