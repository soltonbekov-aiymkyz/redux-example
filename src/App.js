
import './App.css';
import CounterDisplay from './components/CounterDisplay';
import CounterSimpleControls from './components/CounterSimpleControls';

import IncericeSimple from './components/IncericeSimple';

import CounterAdvancedControls from './components/CounterAdvancedControls'
import ColorDisplay from './components/ColorDisplay'

import SliderSimple from './components/SliderSimple'
import ColorSimple from './components/ColorSimple'
function App() {
  return (
    <div className="App">
      <ColorDisplay />
      <ColorSimple />
      <SliderSimple />
      <CounterDisplay />
      <CounterSimpleControls />
      <IncericeSimple />
      <CounterAdvancedControls />
    </div>
  );
}

export default App;


