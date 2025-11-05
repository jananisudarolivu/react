import { useState } from "react";
import Attend from "./Attend";
function Login(){
    const [log,setLog]=useState(false);
    return(
        <>
        <button onClick={()=>{setLog(!log)}}>login</button>
        <h1>{log ? "welcom":"pls login"}</h1>
        <Attend/>
        </>
    );
}
export default Login;