import logo from './logo.svg';
import './App.css';
import { ComponentA } from './parts/componentA';
import { RecoilRoot } from 'recoil';


export default function App() {
  return (
    <RecoilRoot>
      <ComponentA />
    </RecoilRoot>
  );
}
