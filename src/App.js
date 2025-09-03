
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';


function App() {
  return (
    <div className="App">
      <header className="header">
          <div className='container'>
          <Header/>
          <MoviesGrid/>          
          </div>
       
      </header>

    <Footer/>  

    </div>
  );
}

export default App;
