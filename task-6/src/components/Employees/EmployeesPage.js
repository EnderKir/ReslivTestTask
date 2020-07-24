import React, {useState, useEffect} from 'react';
import axios from "axios";

import Employee from "../Employee/Employee";

import './EmployeesPage.css';

const url = "https://reqres.in/api/users?per_page=12";

const EmployeesPage = () => {
    const [employees, setEmployees] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [addMode, setAddMode] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                const {data} = response.data;
                setEmployees(data);
                setIsLoad(true);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const removeEmployee = (index, e) => {
        e.preventDefault();
        const list = employees.filter((todo, employeeIndex) => {
            return employeeIndex !== index
        });
        setEmployees(list)
    };

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    const openAddBlock = (e) => {
        e.preventDefault();
        setAddMode(true);
    };

    const closeAddMode = (e) => {
        e.preventDefault();
        setAddMode(false);
    };

    const addEmployee = (e) => {
        console.log(employees);
        e.preventDefault();
        const newArray = [...employees, {first_name: firstName, last_name: lastName}];
        setEmployees(newArray);
    };

    return (
        <div className="employees-page">
            <div className="employees-block">
                {!addMode && <button className="add-employee" onClick={(e) => openAddBlock(e)}>Add Employee</button>}
                {addMode && <div className="add-block">
                    <p>First name</p>
                    <input className="first-name data-input" onChange={(e) => {
                        updateFirstName(e)
                    }}/>
                    <p>Last name</p>
                    <input className="last-name data-input" onChange={(e) => {
                        updateLastName(e)
                    }}/>
                    <a href="/#" className="add-mode-button" onClick={(e) => {
                        addEmployee(e)
                    }}>Add</a>
                    <a href="/#" className="add-mode-button" onClick={(e) => {
                        closeAddMode(e)
                    }}>Close</a>
                </div>}
                {isLoad && employees.map((el, i) =>
                    <Employee id={el.id} key={i} i={i++} first_name={el.first_name} last_name={el.last_name}
                              removeEmployee={removeEmployee}/>
                )}
            </div>
        </div>
    )
}

export default EmployeesPage;