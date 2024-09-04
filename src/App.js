import Header from './components/molecules/Header';
import style from './css/Components.module.css';

function App() {
  return (
    <div className={style.App}>
      <Header nome_usuario='Henrique'/>
    </div>
  );
}

export default App;
