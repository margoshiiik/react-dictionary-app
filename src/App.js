import './App.css';
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-center'>Dictionary</h1>
        <Dictionary default={"sunshine"}/>
      </header>
    </div>
  );
}

export default App;
