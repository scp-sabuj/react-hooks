import logo from './logo.svg';
import './App.css';
import ParentsComponent from './components/ParentsComponent';
import ParentsComponentTwo from './components/ParentsComponentTwo';

function App() {
  return (
    <div className="App">
      <h2>Here Every components re-rendering when a button click</h2>
      <ParentsComponent />

      <h2>Here Only re-rendering the components which are related to the component</h2>
      <ParentsComponentTwo />
    </div>
  );
}

export default App;
