import './Css/App.css';

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Conteiner from './Components/Conteiner/Conteiner';
import Footer from './Components/Footer/Footer';

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
