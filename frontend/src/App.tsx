import logo from './logo.svg';
import './App.css';
import { componentA } from '../components/componentA';
import { RecoilRoot } from 'recoil';


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <componentA />
      </header>
    </div>
  );
}
