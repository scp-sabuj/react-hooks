
import './App.css';
import DataFetching from './components/DataFetching';
import IndividualPost from './components/IndividualPost';
import IndividualPostBtnClick from './components/IndividualPostBtnClick';

function App() {
  return (
    <div className="App">
      <IndividualPost />
      <IndividualPostBtnClick />
      <h2>Data Fatching using Axios & useEffect</h2>
      <DataFetching />
    </div>
  );
}

export default App;
