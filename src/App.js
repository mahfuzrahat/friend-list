import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body/Body';
import {fakeData} from './data/fakeData.js';


function App() {
  console.log(fakeData);
  return (
    <div>
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
