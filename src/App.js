import './Css/App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Conteiner from './Components/Conteiner';
import Footer from './Components/Footer';

function App() {
   return (
      <div className="App">
         <header className='header'>
            <Header />
         </header>
         <nav className='sidebar'>
            <Sidebar />
         </nav>
         <div className="conteiner">
            <Conteiner />
         </div>
         <footer className='footer'>
            <Footer />
         </footer>
      </div>
   );
}

export default App;
