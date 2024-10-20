import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EmployeeList from '../../component/myComponents/employeeList';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://kwale-hris-app.onrender.com/getEmployees')
      .then(res => {
        console.log(res);
        setEmployees(res?.data);
      })
      .catch(err => console.log(err));
  }, []);

  // Function to handle search input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter employees based on searchTerm
  const filteredEmployees = employees.filter(employee => {
    const fullName = `${employee.fname} ${employee.lname} ${employee.surname}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
        <div className='w-100 mt-0 bg-white rounded p-4'>
          <div style={{ marginBottom: "20px" }}>
            <Link to='/createEmployee' className='btn btn-success'>Add Employee</Link>
          </div>
          <div style={{ marginBottom: "20px" , width:"30%"}}>
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by Employee Name..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="form-control"
            />
          </div>
          <table className="crancy-table__main crancy-table__main-v1">
            <thead className="crancy-table__head">
              <tr>
                <th className="crancy-table__column-1 crancy-table__h1">Payroll Number</th>
                <th className="crancy-table__column-1 crancy-table__h1">Employee Name</th>
                <th className="crancy-table__column-1 crancy-table__h1">Email</th>
                <th className="crancy-table__column-1 crancy-table__h1">Phone Number</th>
                <th className="crancy-table__column-1 crancy-table__h1">Gender</th>
                <th className="crancy-table__column-1 crancy-table__h1">Actions</th>
                <th className="crancy-table__column-1 crancy-table__h1"><EmployeeList /></th>
              </tr>
            </thead>
            <tbody className="crancy-table__body">
              {filteredEmployees.map((employee) => {
                return (
                  <tr key={employee._id}>
                    <td>{employee.payrollId}</td>
                    <td>
                      <Link to={`/employee/${employee._id}`}>
                        {employee.fname} {employee.lname} {employee.surname}
                      </Link>
                    </td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNumber}</td>
                    <td>{employee.gender}</td>
                    <td>
                      <div style={{ marginBottom: "20px" }}>
                        <Link to={`/selectEdit/${employee._id}`} className='btn btn-primary'>Edit</Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employees;
