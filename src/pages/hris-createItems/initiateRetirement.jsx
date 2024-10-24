import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



function InitiateRetirement() {
const [payrollId,setPayrollId] = useState('');
const [retirementDate,setRetirementDate] = useState('');
const [reason,setReason] = useState('');
const navigate = useNavigate();

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

function handleSubmit(e) {
    e.preventDefault();
    axios.post('https://kwale-hris-api.onrender.com/addRetirement',{payrollId,retirementDate,reason})
    .then(res=>{
        console.log(res);
        navigate('/retirementList');
    }).catch(err=>console.log(err));
 
}

return (
    <div>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4'>
                <h2>Initiate Termination</h2>
                <form  className="crancy-wc__form-main" onSubmit={handleSubmit}>
                <div className="mb-2">
                        <label htmlFor="">Employee Id:</label>
                        <input type="text" placeholder="Enter Employee Number" className="form-control"
                            required="required"
                            onChange={e=>setPayrollId(e.target.value)}
                        />
                </div>
               
                    <div className="mb-2">
                        <label htmlFor="">Reason:</label>
                        <select className="col-4" value={reason} required="required" onChange={e=>setReason(e.target.value)}>
                                <option value="" disabled selected hidden > Select Reason for Termination</option>
                                <option value="End Of Contract">End Of Contract</option>
                                <option value="Resignation">Resignation</option>
                                <option value="Other Reasons">Other Reasons</option>
                                
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Termination Date:</label>
                        <input type="date" placeholder="Select Start Date" className="form-control"
                            required="required"
                            onChange={e=>setRetirementDate(e.target.value)}
                        />
                    </div>
                    
                    <div className="crancy-wc__button--group">
                        <Link to='/retirementList' className='btn ntfmax-wc__btn ntfmax-wc__btn--two' >Cancel</Link>
                        <button className="btn btn-success ">Submit</button>
                    </div>


                </form>
            </div>
        </div>
    </div>
)
}

export default InitiateRetirement