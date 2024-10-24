import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



function AddBankDetails() {
const [payrollId,setPayrollId] = useState('');
const [bankAccountName,setBankAccountName] = useState('');
const [bankBranch,setBankBranch] = useState('');
const [bankAccountNumber,setBankAccountNumber] = useState('');
const [nssfNumber,setNssfNumber] = useState('');
const [nhifNumber,setNhifNumber] = useState('');
const navigate = useNavigate();

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

function handleSubmit(e) {
    e.preventDefault();
    axios.post('https://kwale-hris-api.onrender.com/addBankdetails',{bankAccountName,bankAccountNumber,bankBranch,payrollId,nssfNumber,nhifNumber})
    .then(res=>{
        console.log(res);
        navigate('/employees');
    }).catch(err=>console.log(err));
 
}

return (
    <div>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4'>
                <h2>Add Employee Bank Details</h2>
                <form  className="crancy-wc__form-main" onSubmit={handleSubmit}>
                <div className="mb-2">
                        <label htmlFor="">Payroll Id:</label>
                        <input type="text" placeholder="Enter payroll Id" className="form-control"
                            required="required"
                            onChange={e=>setPayrollId(e.target.value)}
                        />
                    </div>
                <div className="mb-2">
                        <label htmlFor="">Bank Account Name:</label>
                        <input type="text" placeholder="Enter Bank Account Name" className="form-control"
                            required="required"
                            onChange={e=>setBankAccountName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Bank Account Number:</label>
                        <input type="text" placeholder="Enter Bank Account Number" className="form-control"
                            required="required"
                            onChange={e=>setBankAccountNumber(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Bank Branch:</label>
                        <input type="text" placeholder="Enter Bank Branch" className="form-control"
                            required="required"
                            onChange={e=>setBankBranch(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">NHIF Number:</label>
                        <input type="text" placeholder="Enter Nhif Number" className="form-control"
                            required="required"
                            onChange={e=>setNhifNumber(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">NSSF Number:</label>
                        <input type="text" placeholder="Enter Nssf Number" className="form-control"
                            required="required"
                            onChange={e=>setNssfNumber(e.target.value)}
                        />
                    </div>
                    
                    <div className="crancy-wc__button--group">
                        <Link to='/departments' className='btn ntfmax-wc__btn ntfmax-wc__btn--two' >Cancel</Link>
                        <button className="btn btn-success ">Submit</button>
                    </div>


                </form>
            </div>
        </div>
    </div>
)
}

export default AddBankDetails