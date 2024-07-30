import logo from './logo.svg';
import './App.css';
import { ComponentA } from './components/componentA';
import { RecoilRoot } from 'recoil';


export default function App() {
  return (
    <RecoilRoot>
      <ComponentA />
    </RecoilRoot>
  );
}
