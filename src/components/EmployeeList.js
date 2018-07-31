import React from "react";
import Employee from "./Employee";

function EmployeeList(props) {
    return(
        <div>
            {props.employees.map(emp => 
                    <Employee key={emp.id} name={emp.name} />
                )
            }
        </div>
    );
}
 
export default EmployeeList;