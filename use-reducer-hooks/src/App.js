import './App.css';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';

function App() {
  return (
    <div className="App">
      <h6>Counter One</h6>
      <CounterOne />

      <h6>Counter Two</h6>
      <CounterTwo />

      <h6>Counter Three</h6>
      <CounterThree />


    </div>
  );
}

export default App;
