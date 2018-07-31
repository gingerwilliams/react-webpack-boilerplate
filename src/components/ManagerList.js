import React from "react";
import Manager from "./Manager";

function ManagerList(props){
    return(
        <span>
            {props.employees.map(emp => 
                    <Manager key={emp.id} name={emp.name} email={emp.email}/>
                )
            }
        </span>
    ) 
}

//defined that the name prop is of type string and that it’s mandatory.
//If you pass something that is not a string, or do not provide anything for this prop, 
//you will get an error in your browser’s console.


export default ManagerList;

