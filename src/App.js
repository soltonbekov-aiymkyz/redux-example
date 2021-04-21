
import './App.css';
import CounterDisplay from './components/CounterDisplay';
import CounterSimpleControls from './components/CounterSimpleControls';

import IncericeSimple from './components/IncericeSimple';
function App() {
  return (
    <div className="App">
      <CounterDisplay />
      <CounterSimpleControls />

      <IncericeSimple />
    </div>
  );
}

export default App;


