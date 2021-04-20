
import './App.css';
import CounterDisplay from './components/CounterDisplay';
import CounterSimpleControls from './components/CounterSimpleControls';

import InceiceDisplay from './components/IncericeDisplay';
import IncericeSimple from './components/IncericeSimple';
function App() {
  return (
    <div className="App">
      <CounterDisplay />
      <CounterSimpleControls />

      <IncericeDisplay />
      <IncericeSimple />
    </div>
  );
}

export default App;


