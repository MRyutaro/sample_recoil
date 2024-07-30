import { useRecoilState } from "recoil";
import { stateA } from "../atoms/stateA";
import Grid from "@mui/material/Grid";


export const ComponentA = () => {
    const [state, setState] = useRecoilState(stateA);
    return (
        <div>
            <Grid container alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
                <Grid item>
                    <button onClick={() => setState(state + "a")}>追加</button>
                    <button onClick={() => setState("リセットデフォルト値")}>リセット</button>
                </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
                <Grid item>
                    <h1>{state}</h1>
                </Grid>
            </Grid>
        </div>
    );
};
