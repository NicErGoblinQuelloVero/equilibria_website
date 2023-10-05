
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
function App() {
  const title = 'Prova';

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home></Home>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
