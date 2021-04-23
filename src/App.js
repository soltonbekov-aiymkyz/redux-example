
// import './App.css';
// import CounterDisplay from './components/CounterDisplay';
// import CounterSimpleControls from './components/CounterSimpleControls';
// import IncericeSimple from './components/IncericeSimple';
// import CounterAdvancedControls from './components/CounterAdvancedControls'
// import ColorDisplay from './components/ColorDisplay'
// import SliderSimple from './components/SliderSimple'
// import ColorSimple from './components/ColorSimple'
// import TextDisplay from './components/TextDisplay';
// import TextSimpleControls from './components/TextSimpleControls';
// function App() {
//   return (
//     <div className="App">
//       <ColorDisplay />
//       <ColorSimple />
//       <SliderSimple />
//       <CounterDisplay />
//       <CounterSimpleControls />
//       <IncericeSimple />
//       <CounterAdvancedControls />
//       <TextDisplay />
//       <TextSimpleControls />
//     </div>
//   );
// }
// export default App;


import './App.css';
import ColorDisplay from './components/ColorDisplay';
import ColorSimple from './components/ColorSimple';
import CounterAdvancedControls from './components/CounterAdvancedControls';
import CounterDisplay from './components/CounterDisplay';
import CounterSimpleControls from './components/CounterSimpleControls';
import SliderControls from './components/SliderControls';
import TextDisplay from './components/TextDisplay';
import TextSimpleComtrols from './components/TextSimpleControls';

function App() {
  return (
    <div className="App">
      <div>
        <TextDisplay />
        <TextSimpleComtrols />
      </div>
      <div>
        <ColorDisplay />
        <ColorSimple />
        <SliderControls />
      </div>
      <div>
        <CounterDisplay />
        <CounterSimpleControls />
        <CounterAdvancedControls />
      </div>
    </div>
  );
}

export default App;