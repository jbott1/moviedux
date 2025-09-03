
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="header">
          <div className='container'>
          <Header/>
          </div>
       
      </header>

    <Footer/>  
          
    </div>
  );
}

export default App;
