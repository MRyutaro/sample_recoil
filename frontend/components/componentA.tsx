import { useRecoilState } from "recoil";
import { stateA } from "../atoms/stateA";


export const componentA = () => {
    const [state, setState] = useRecoilState(stateA);
    return (
        <div>
            <h1>Component A</h1>
            <p>{state}</p>
            <button onClick={() => setState(state + 'A')}>Add A</button>
        </div>
    );
};
