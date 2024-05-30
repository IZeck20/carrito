import './App.css';

import GameStore from './components/gamestore'; // Cambia Mercadona a GameStore
import { Provider } from 'react-redux';
import store from './store';
//import Carritodelmercado from './components/carritodelmercado';

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Carritodelmercado /> era pa entender los reducers*/}
        <GameStore /> {/* Cambia Mercadona a GameStore */}
      </div>
    </Provider>
  );
}

export default App;
