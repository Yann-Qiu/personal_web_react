import AllItem from './AllItem.jsx'
import "./App.css";
import "antd/dist/antd.css";
import { Provider } from 'react-redux';
import store from './store/index.js';


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <AllItem />
      </div>
    </Provider>
  );
}


export default App;