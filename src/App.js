import Cards from './components/molecules/Cards';
import Header from './components/molecules/Header';
import Main from './components/molecules/Main';
import style from './css/Components.module.css';
import Footer from './components/molecules/Footer';

function App() {
  
  return (
    <div className={style.App}>
      <Header />
      <Cards />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
