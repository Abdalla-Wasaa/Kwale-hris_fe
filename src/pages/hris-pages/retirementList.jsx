import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dropdown from '../../component/menu/Dropdown';
import ActionButton from '../../component/myComponents/actionButton';

function RetirementList() {
    const [retirementList, setRetirementList] = useState([]);
    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = (name) => {
        setDropdown(name === dropdown ? "" : name);
    };

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

    useEffect(() => {
        // Fetch the retirement list from the API
        console.log("API_BASE_URL:", API_BASE_URL);
        axios.get(`${API_BASE_URL}/retirementList`)
            .then(response => {
                // Filter the response data to only show items with status "Pending"
                const pendingRetirements = response.data.filter(employee => employee.status === "Pending");
                setRetirementList(pendingRetirements);
            })
            .catch(error => {
                console.error('Error fetching retirement list:', error);
            });
    }, []);

    const handleApprove = (id) => {
        axios.put(`${API_BASE_URL}/approveTermination/` + id)
            .then(res => {
                console.log(res.data);
                alert('You are About To Approve This Termination');
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
                <div className='w-100 mt-0 bg-white rounded p-4'>
                    <div style={{ marginBottom: "20px" }}>
                        <Link to='/initiateRetirement' className='btn btn-success'>Add Retirement</Link>
                    </div>
                    <table className="crancy-table__main crancy-table__main-v1">
                        <thead className="crancy-table__head">
                            <tr>
                                <th className="crancy-table__column-1 crancy-table__h1">Employee Name</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Department</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Termination_Reason</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Termination_Date</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Status</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Action</th>
                            </tr>
                        </thead>
                        <tbody className="crancy-table__body">
                            {retirementList?.map((employee) => (
                                <tr key={employee._id}>
                                    <td>{employee.EmployeeDetails?.fname} {employee.EmployeeDetails?.lname} {employee.EmployeeDetails?.surname}</td>
                                    <td>{employee.WorkDetails?.department || "N/A"}</td>
                                    <td>{employee.reason}</td>
                                    <td>
                                        {new Date(employee.retirementDate).toLocaleString('en-GB', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: '2-digit',
                                        }).replace(',', '')}
                                    </td>
                                    <td>{employee.status}</td>
                                    <td>
                                        <Link className='btn btn-primary' onClick={() => handleApprove(employee._id)}>Approve</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RetirementList;
