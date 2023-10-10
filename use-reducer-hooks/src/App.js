import './App.css';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';
import DataFetchingOne from './components/DataFetchingWithuseReducer/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingWithuseReducer/DataFetchingTwo';
import ComponentA from './components/ReducerAndContext/ComponentA';

function App() {
  return (
    <div className="App">
      <h6>Counter One</h6>
      <CounterOne />

      <h6>Counter Two</h6>
      <CounterTwo />

      <h6>Counter Three</h6>
      <CounterThree />

      <h6>We have counter in Component-A & Update from B, D and F. Using useReducer + useContext</h6>
      <ComponentA />

      <h6>Get Post data without useReducer( using useState & useEffect )</h6>
      <DataFetchingOne />

      <h6>Get Post data using useReducer</h6>
      <DataFetchingTwo />


    </div>
  );
}

export default App;
