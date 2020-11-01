import Header from './components/Header'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (

      <div className="container">
        <>
          <Header/>
          <Navbar />
          <News />
        </>
      </div>

  );
}

export default App;
