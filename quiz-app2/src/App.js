import './App.css';
import Questions from './components/Questions'
import data from './resourses/data.json'

function App() {
  return (
    <div className="App">
      <Questions value={data}/>
    </div>
  );
}

export default App;