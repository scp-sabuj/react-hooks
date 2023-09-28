import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassIncrementDecrement from './components/ClassIncrementDecrement';
import HookCounter from './components/HookCounter';
import HooksWithArray from './components/HooksWithArray';
import HooksWithObject from './components/HooksWithObject';
import IncrementDecrement from './components/IncrementDecrement';


function App() {
  return (
    <div className="App">
      <p>ClassCounter Component</p>
      <ClassCounter />

      <p>HookCounter Component</p>
      <HookCounter />

      <p>IncrementDecrement Component</p>
      <IncrementDecrement />

      <p>ClassIncrementDecrement Component</p>
      <ClassIncrementDecrement />

      <p>HooksWithObject Component</p>
      <HooksWithObject />

      <p>HooksWithArray Component</p>
      <HooksWithArray />
    </div>
  );
}

export default App;
