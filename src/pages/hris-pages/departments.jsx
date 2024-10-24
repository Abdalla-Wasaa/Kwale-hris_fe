import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from'axios';
import Dropdown from '../../component/menu/Dropdown';
import ActionButton from '../../component/myComponents/actionButton';


function Departments() {

const [departments,setDepartments] = useState([]);
const [dropdown, setDropdown] = useState(false);
const handleDropdown = (name) => {
    setDropdown(name === dropdown ? "" : name);
  };

//   const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

useEffect(()=>{
    axios.get('https://kwale-hris-api.onrender.com/getDepartments')
    .then(res => {
        console.log(res);
        setDepartments(res?.data)
    })
    .catch(err=>console.log(err));
},[])

    return (
        <div>
            <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
                <div className='w-100 mt-0 bg-white rounded p-4'>
                   <div style={{marginBottom:"20px"}}><Link to='/createdepartment' className='btn btn-success' >Add Department</Link></div> 
                    <table className="crancy-table__main crancy-table__main-v1">
                        <thead className="crancy-table__head">
                            <tr>
                                <th className="crancy-table__column-1 crancy-table__h1">department Name</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Description</th>
                                
                                {/*
                                <th className="crancy-table__column-1 crancy-table__h1">Project</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Donation</th>
    */}
                            </tr>
                        </thead>
                        <tbody className="crancy-table__body">
                            {departments?.map((department)=>{
                                return<tr>
                                    <td>{department.departmentName}</td>
                                    <td>{department.description}</td>
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

export default Departments