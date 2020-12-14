import './App.css';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    // BEM
    <div className="App">
      <Header/>
      <Home/>
    </div>
    // {/* Home */}
  );
}

export default App;
