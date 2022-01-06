import './App.css';
import Info from './Components/Info';
import About from './Components/About';
import Interests from './Components/Interests';

function App() {
  return (
    <div className='App'>
      <Info />
      <About title='About' />
      <Interests title='Interests' />
    </div>
  );
}

export default App;
