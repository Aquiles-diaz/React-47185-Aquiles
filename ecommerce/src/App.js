import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsListContainer from './Components/ItemListContainer/ItemsListContainer';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemsListContainer greeting="¡Bienvenidos a Tienda Gamer!"/>
    </div>
  );
}

export default App;
