import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from'axios';
import Dropdown from '../../component/menu/Dropdown';
import ActionButton from '../../component/myComponents/actionButton';


function Applications() {

const [applications,setApplications] = useState([]);
const [dropdown, setDropdown] = useState(false);
const handleDropdown = (name) => {
    setDropdown(name === dropdown ? "" : name);
  };

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

useEffect(()=>{
    axios.get(`${API_BASE_URL}/getApplications`)
    .then(res => {
        console.log(res);
        setApplications(res?.data)
    })
    .catch(err=>console.log(err));
},[])

    return (
        <div>
            <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
                <div className='w-100 mt-0 bg-white rounded p-4'>
                   <div style={{marginBottom:"20px"}}><Link to='/createApplication' className='btn btn-success' >Add Application</Link></div> 
                    <table className="crancy-table__main crancy-table__main-v1">
                        <thead className="crancy-table__head">
                            <tr>
                                <th className="crancy-table__column-1 crancy-table__h1">Employee Name</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Leave Type</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Reason</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Start Date</th>
                                <th className="crancy-table__column-1 crancy-table__h1">End Date</th>
                                
                                {/*
                                <th className="crancy-table__column-1 crancy-table__h1">Project</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Donation</th>
    */}
                            </tr>
                        </thead>
                        <tbody className="crancy-table__body">
                            {applications?.map((application)=>{
                                return<tr>
                                    <td>{application.employeeDetails.fname} {application.employeeDetails.lname} {application.employeeDetails.surname}</td>
                                    <td>{application.leaveType}</td>
                                    <td>{application.reason}</td>
                                    <td>{application.startDate}</td>
                                    <td>{application.endDate}</td>
                                    <td>
                                        <ActionButton/>       
   
   
                                    </td>
                                </tr>
                            
                            })}
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Applications