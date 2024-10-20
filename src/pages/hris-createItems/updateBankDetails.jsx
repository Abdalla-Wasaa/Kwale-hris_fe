import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



function UpdateBankDetails() {
const { prollId } = useParams();
console.log("WE HAVE AN ID "+prollId);
const [payrollId,setPayrollId] = useState('');
const [bankAccountName,setBankAccountName] = useState('');
const [bankBranch,setBankBranch] = useState('');
const [bankAccountNumber,setBankAccountNumber] = useState('');
const [nssfNumber,setNssfNumber] = useState('');
const [nhifNumber,setNhifNumber] = useState('');
const navigate = useNavigate();

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

useEffect(()=>{
    axios.get('https://kwale-hris-app.onrender.com:4000/getBankDetails/'+prollId,{bankAccountName,bankAccountNumber,bankBranch,payrollId,nssfNumber,nhifNumber})
    .then(res => {
        console.log(res);
        setPayrollId(res?.data[0].payrollId)
        setBankAccountName(res?.data[0].bankAccountName)  
        setBankAccountNumber(res?.data[0].bankAccountNumber)
        setBankBranch(res?.data[0].bankBranch)              
        setNhifNumber(res?.data[0].nhifNumber)
        setNssfNumber(res?.data[0].nssfNumber)
   
    })
    .catch(err=>console.log(err));
},[])

function handleSubmit(e) {
    e.preventDefault();
    axios.put(`${API_BASE_URL}/updateBankDetails/`+prollId,{bankAccountName,bankAccountNumber,bankBranch,payrollId,nssfNumber,nhifNumber})
    .then(res=>{
        console.log(res);
        navigate('/employees');
    }).catch(err=>console.log(err));
 
}

return (
    <div>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4'>
                <h2>Update Employee Bank Details</h2>
                <form  className="crancy-wc__form-main" onSubmit={handleSubmit}>
                <div className="mb-2">
                        <label htmlFor="">Payroll Id:</label>
                        <input value={payrollId} type="text" placeholder="Enter payroll Id" className="form-control"
                            required="required"
                            onChange={e=>setPayrollId(e.target.value)}
                        />
                    </div>
                <div className="mb-2">
                        <label htmlFor="">Bank Account Name:</label>
                        <input value={bankAccountName} type="text" placeholder="Enter Bank Account Name" className="form-control"
                            required="required"
                            onChange={e=>setBankAccountName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Bank Account Number:</label>
                        <input value={bankAccountNumber} type="text" placeholder="Enter Bank Account Number" className="form-control"
                            required="required"
                            onChange={e=>setBankAccountNumber(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Bank Branch:</label>
                        <input value={bankBranch} type="text" placeholder="Enter Bank Branch" className="form-control"
                            required="required"
                            onChange={e=>setBankBranch(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">NHIF Number:</label>
                        <input value={nhifNumber} type="text" placeholder="Enter Nhif Number" className="form-control"
                            required="required"
                            onChange={e=>setNhifNumber(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">NSSF Number:</label>
                        <input value={nssfNumber} type="text" placeholder="Enter Nssf Number" className="form-control"
                            required="required"
                            onChange={e=>setNssfNumber(e.target.value)}
                        />
                    </div>
                    
                    <div className="crancy-wc__button--group">
                        <Link to='/employees' className='btn ntfmax-wc__btn ntfmax-wc__btn--two' >Cancel</Link>
                        <button className="btn btn-success ">Submit</button>
                    </div>


                </form>
            </div>
        </div>
    </div>
)
}

export default UpdateBankDetails