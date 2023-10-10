import './App.css';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';
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


    </div>
  );
}

export default App;
