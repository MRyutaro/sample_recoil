import logo from './logo.svg';
import './App.css';
import { RecoilRoot } from 'recoil';

import { ComponentA } from './parts/componentA';
import { ComponentB } from './parts/componentB';


export default function App() {
  return (
    <RecoilRoot>
      <ComponentA />
      <ComponentB />
    </RecoilRoot>
  );
}
