import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Contenu from './components/Contenu';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <RightSide />
      <LeftSide />
      <Contenu />
      <Footer />
    </div>
  );
}

export default App;
