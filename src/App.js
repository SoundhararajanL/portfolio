import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/navbar/navbar";
import Header from "./components/header/header";
import About from "./components/about/About";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";


function App() {

  
  return (
    <div > 
      <Header/>
      <Nav />
      <About/>
      <Experience/>
     <Services/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    
     
    </div>
  );
}

export default App;