import './App.css';
import Product from './components/product';
import store from './store/store.js';
import { Provider } from 'react-redux';

function App() {

  return (
    <>
      <Provider store={store}>
        <Product />
      </Provider>
    </>
  )
};

export default App;
