
import './App.css';
import "./components/css/bootstrap.css";
import "./components/css/styles.css";
import Header from './components/Header';
import Alert from './components/Alert';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';
import LastSection from './components/LastSection';
function App() {
  return (
    <div className="App">
     <Header/>
     <Alert/>
     <FirstSection/>
     <SecondSection/>
     <ThirdSection/>
     <FourthSection/>
     <FifthSection/>
     <SixthSection/>
     <LastSection/>
    </div>
  );
}

export default App;
