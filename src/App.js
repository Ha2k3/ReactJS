import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Content/Slider/Slider';
import LeftContent from './Components/Content/LeftContent/LeftContent';
import RightContent from './Components/Content/RightContent/RightContent';
function App() {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <div class="container">
        <div className='row'>
          <LeftContent></LeftContent>
          <RightContent></RightContent>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
