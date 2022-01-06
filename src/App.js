import './index.scss';
import Header from './components/header/Header';
import Test  from './components/Test';
import Main from './components/main/Main';
import Doctor from './components/doctor/Doctor';
import Direction from './components/direction/Direction';
import About from './components/about/About';
import Reviews from './components/reviews/Reviews';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Main></Main>
        <Doctor></Doctor>
        <Direction></Direction>
        <About></About>
        <Reviews></Reviews>

        <Test></Test>
    </div>
  );
}

export default App;
