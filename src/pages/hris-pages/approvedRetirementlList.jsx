import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from'axios';
import Dropdown from '../../component/menu/Dropdown';
import ActionButton from '../../component/myComponents/actionButton';


function ApprovedRetirementList() {
    const [retirementList, setRetirementList] = useState([]);
    const [dropdown, setDropdown] = useState(false);
    const handleDropdown = (name) => {
        setDropdown(name === dropdown ? "" : name);
      };
    
      useEffect(() => {
        // Fetch the retirement list from the API
        axios.get('https://kwale-hris-app.onrender.com:4000/approvedRetirementList')
            .then(response => {
                setRetirementList(response.data);
            })
            .catch(error => {
                console.error('Error fetching retirement list:', error);
            });
    }, []);

    const handleDisapprove=(id)=> {
        axios.put('https://kwale-hris-app.onrender.com:4000/disapproveTermination/'+id)
        .then(res=>{
            console.log(res.data);
            alert('You are About To Disapprove This Termination');
            window.location.reload()
        }).catch(err=>console.log(err));
     
    
    }
    
        return (
            <div>
                <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
                    <div className='w-100 mt-0 bg-white rounded p-4'>
                    <div style={{marginBottom:"20px"}}><Link to='/retirementList' className='btn btn-success' >Retirement List</Link></div>
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
                                    {retirementList?.map((employee) => {
                                        return (
                                        <tr key={employee._id}>
                                            <td>{employee.EmployeeDetails?.fname} {employee.EmployeeDetails?.lname} {employee.EmployeeDetails?.surname}</td>
                                            <td>{employee.WorkDetails?.department || "N/A"}</td>
                                            <td>{employee.reason}</td>
                                            {/* Custom formatting for the retirement date */}
                                            <td>
                                            {new Date(employee.retirementDate).toLocaleString('en-GB', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: '2-digit',
                                            }).replace(',', '')}
                                            </td>
                                            <td>{employee.status}</td>
                                            <td>
                                            <Link className="btn btn-danger" onClick={(e) => handleDisapprove(employee._id)}>
                                                Reverse
                                            </Link>
                                            </td>
                                        </tr>
                                        );
                                    })}
                            </tbody>



                        </table>
                    </div>
                </div>
            </div>
        )
}

export default ApprovedRetirementList