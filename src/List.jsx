import { useState } from "react";

function List(){
    const students=["jan","janani","jana"];
    const[attends,setAttends]=useState(true);
    function on(){
      setAttends(!attends)
       
    }
    return(
<>
<ul style={{listStyleType:"none"}}>
{
    students.map((student,index)=>(
        <>

        <li key={index}>{student}       
             <button onClick=  {()=> (attends) ? "present":"absent"}>{on()}</button></li>
        </>
    ))
}
</ul>
</>
    );

}
export default List;
