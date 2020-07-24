import React from 'react';

import './Employee.css';

const Employee = ({id, i, first_name, last_name, removeEmployee}) => {
    return (
       <div className="employee">
           <p key={id}>{i + 1}. {first_name} {last_name}; </p>
           <a href="/#" className="delete-button" onClick={(e) => removeEmployee(i, e)}>X</a>
       </div>
    )
}

export default Employee;