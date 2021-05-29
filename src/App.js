import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from 'react-intl'
import { useContext } from "react";
import { Context } from "./components/Wrapper"
/* import Navbar from "./components/navbar/Navbar"
 */
import Navbar2 from "./components/navbar/Navbar2"
import Slider from "./components/slideshow/Slider"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Container } from './globalStyles'
import Footer from './components/footer/Footer'
import ParticleTest from './components/testcomponents/ParticleTest'
import Cards from './components/cards/Cards'
import Typed from 'react-typed'

function App() {
  const context = useContext(Context)
  const slideImages = [
    "./images/1.JPG",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",

  ];



  return (

    <div
    style={{
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: "#101522"
    }}>

      <Router>

        <Navbar2>




        </Navbar2>

      </Router>


      <h1>
        <FormattedMessage
          id="app.content"
        >

        </FormattedMessage>


      </h1>


      <FormattedMessage
        id="app.channel.plug"
        values={{ channelName: "BRATANCODE" }}
      >

      </FormattedMessage>





      <Slider></Slider><h1></h1>
      <br></br>
      <br></br>
      <br></br>
      
      <h1><Typed className="typed-text"
        strings={["Are you ready to rumble?", "Choose your fighter!"
        ]}
        typeSpeed={30}
        backSpeed={8}
      ></Typed></h1>


      <div
       style={{
        height: '50px',
        width: '100%',
        backgroundColor: "#101522",
        position: 'relative'
      }}>
        <div
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: "#101522"
          }}>
          <ParticleTest />
        </div>
        



        <div style={{
          height: '50%',
          width: '50%',
          marginLeft: "23%",
          backgroundColor: "#101522",
          position: "absolute",
          top: 0,
          left: 0
        }}>

          <Router><Cards></Cards></Router>
        </div>
      </div>
     

      <div style={{
          height: '1200px',
          backgroundColor: "#101522",
        }}>
          

      </div>


      <Router>



        <Footer />


        <Route path='/about' exact component={0} />




      </Router>
    </div>
  );
}


/* function Navbar(props) {

  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
} */

export default App;


