import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      <Buttons size="large" color="blue">BUTTON</Buttons>
      <Buttons size="midium" color="blue">BUTTON</Buttons>
      <Buttons size="small" color="blue">BUTTON</Buttons>
      <Buttons size="large" color="pink">BUTTON</Buttons>
      <Buttons size="midium" color="pink">BUTTON</Buttons>
      <Buttons size="small" color="pink">BUTTON</Buttons>
      <Buttons size="large" color="black">BUTTON</Buttons>
      <Buttons size="midium" color="black">BUTTON</Buttons>
      <Buttons size="small" color="black">BUTTON</Buttons>
      <Buttons size="large" color="blue" outline fullWidth>BUTTON</Buttons>
      <Buttons size="large" color="pink" fullWidth>BUTTON</Buttons>
      <Buttons size="large" color="black" fullWidth>BUTTON</Buttons>
    </div>
  );
}

export default App;
