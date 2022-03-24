import './index.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Doctor from './components/doctor/Doctor';
import Direction from './components/direction/Direction';
import About from './components/about/About';
import Reviews from './components/reviews/Reviews';
import Footer from './components/footer/Footer';
import Modal from './components/Modal/Modal';
import Test from './components/Test';

import { useRef, useEffect, useState} from 'react';

function App() {

  const [scroll, setScroll] = useState(0);

  const scrollHandler = _ => {

    let scrollTop = document.documentElement.scrollTop;

    setScroll(scrollTop);

};

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
    window.removeEventListener("scroll", scrollHandler, true);
    };
}, []);


  return (
    <div className="App">
        <Header></Header>
        <Main></Main>
        <Doctor data ={scroll > -600}></Doctor>
        <Direction data ={scroll > -1000}></Direction>
        <About data ={scroll > -2000}></About>
        <Reviews></Reviews>
        <Footer></Footer>

        {/*Modal  */}
        <Modal></Modal>

        {/* <Test></Test> */}
        
    </div>
  );
}

export default App;
