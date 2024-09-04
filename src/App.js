import Cards from './components/molecules/Cards';
import Header from './components/molecules/Header';
import Main from './components/molecules/Main';
import style from './css/Components.module.css';

function App() {
  
  let nome_user = window.prompt('Oii, Digite seu nome, por favor!')
  
  return (
    <div className={style.App}>
      <Header nome_usuario={nome_user}/>
      <Cards />
      <Main />
    </div>
  );
}

export default App;
