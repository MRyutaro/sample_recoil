import { useRecoilState } from "recoil";
import Grid from "@mui/material/Grid";

import { stateA } from "../atoms/stateA";


export const ComponentA = () => {
    const [state, setState] = useRecoilState(stateA);
    return (
        <div style={{ backgroundColor: "pink" }}>
            <Grid container alignItems="center" justifyContent="center" direction="column" sx={{ mt: 2 }}>
                <h1>ComponentA</h1>
                <p>ComponentAからstateAを取得・更新できる</p>
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
