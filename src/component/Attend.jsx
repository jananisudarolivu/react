import { useState } from "react";

function Attend(){
    const studentlist=[{name:"jana",ispresent:false},{name:"pradhi",ispresent:false},{name:"divi",ispresent:false}];
    
    const [student,setStudent]=useState(studentlist);
    const studfun=()=>{
        setStudent(!student)
    }
    return(
     <ul>
        {
            studentlist.map((students)=>{
                return(
                <>
                <li><h1 key={students.id}>{students.name}</h1></li>
                <li><button onClick={studfun}>{student ? "present":"absent"}</button></li>
                </>
                );
            })
        }
     </ul>
    );
}
export default Attend;