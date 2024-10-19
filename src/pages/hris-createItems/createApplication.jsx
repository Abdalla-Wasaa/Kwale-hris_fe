import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



function CreateApplication() {
const [payrollId,setPayrollId] = useState('');
const [leaveType,setLeaveType] = useState('');
const [startDate,setStartDate] = useState('');
const [endDate,setEndDate] = useState('');
const [reason,setReason] = useState('');
const navigate = useNavigate();

function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:4000/createApplication',{payrollId,leaveType,startDate,endDate,reason})
    .then(res=>{
        console.log(res);
        navigate('/applications');
    }).catch(err=>console.log(err));
 
}

const [leaveTypes,setLeaveTypes]=useState([]);
useEffect(()=>{
    axios.get('http://localhost:4000/getLeaveTypes')
    .then(res => {
        console.log(res);
        setLeaveTypes(res?.data)
    })
    .catch(err=>console.log(err));
},[])

return (
    <div>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4'>
                <h2>Apply For Leave</h2>
                <form  className="crancy-wc__form-main" onSubmit={handleSubmit}>
                <div className="mb-2">
                        <label htmlFor="">Employee Id:</label>
                        <input type="text" placeholder="Enter Employee Number" className="form-control"
                            required="required"
                            onChange={e=>setPayrollId(e.target.value)}
                        />
                </div>

                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                    <label htmlFor="">Leave Type:</label>
                    <select value={leaveType} onChange={(e)=>setLeaveType(e.target.value)}>
                        <option value="" disabled selected hidden >Select LeaveType</option>
                           {leaveTypes.map((data)=>(
                                        <option value={data.leaveTypeName}> {data.leaveTypeName}</option>
                                    ))} 
                    </select>   

                </div>
                    <div className="mb-2">
                        <label htmlFor="">Reason:</label>
                        <input type="textbox" placeholder="Enter Reason for Applications" className="form-control"
                            required="required"
                            onChange={e=>setReason(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Start Date:</label>
                        <input type="date" placeholder="Select Start Date" className="form-control"
                            required="required"
                            onChange={e=>setStartDate(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">End Date:</label>
                        <input type="date" placeholder="Select Start Date" className="form-control"
                            required="required"
                            onChange={e=>setEndDate(e.target.value)}
                        />
                    </div>
                    
                    <div className="crancy-wc__button--group">
                        <Link to='/applications' className='btn ntfmax-wc__btn ntfmax-wc__btn--two' >Cancel</Link>
                        <button className="btn btn-success ">Submit</button>
                    </div>


                </form>
            </div>
        </div>
    </div>
)
}

export default CreateApplication