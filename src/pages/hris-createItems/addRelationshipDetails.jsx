import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



function AddRelationshipDetails() {
const [payrollId,setPayrollId] = useState('');
const [fullName,setFullName] = useState('');
const [relationship,setRelationship] = useState('');
const [email, setEmail] = useState('');
const [nationalId,setNationalId] = useState('');
const [phoneNumber,setPhoneNumber] = useState('');
const [role, setRole] = useState('');
const navigate = useNavigate();

function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:4000/addRelationshipDetails',{payrollId,relationship,fullName,email,role,nationalId,phoneNumber})
    .then(res=>{
        console.log(res);
        navigate('/employees');
    }).catch(err=>console.log(err));
 
}

return (
    <div>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4'>
                <h2>Add Employee Relationship-Details</h2>
                <form  className="crancy-wc__form-main" onSubmit={handleSubmit}>
                <div className="mb-2">
                        <label htmlFor="">Payroll Id:</label>
                        <input type="text" placeholder="Enter payroll Id" className="form-control"
                            required="required"
                            onChange={e=>setPayrollId(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Relationship:</label>
                        <select className="col-4" value={relationship} required="required" onChange={e=>setRelationship(e.target.value)}>
                                <option value="" disabled selected hidden > Select Relationship</option>
                                <option value="Wife">Wife</option>
                                <option value="Parent">Parent</option>
                                <option value="Sibling">Sibling</option>
                                <option value="FamilyMember">Family-Member</option>
                                <option value="Son">Son</option>
                                <option value="Daughter">Daughter</option>
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Full Name:</label>
                        <input type="text" placeholder="Enter Full Name" className="form-control"
                            required="required"
                            onChange={e=>setFullName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-group__input">
                        <label htmlFor="">Phone Number:</label>
                            <input
                            className="crancy-wc__form-input"
                            type="text"
                            name="phone Number"
                            placeholder="Enter phone Number"
                            // required="required"
                            onChange={e=>setPhoneNumber(e.target.value)}
                            
                            />
                        </div>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Email:</label>
                        <input type="email" placeholder="Enter Email address" className="crancy-wc__form-input form-control"
                            // required="required"
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="mb-2">
                        <label htmlFor="">National Id:</label>
                        <input type="text" placeholder="Enter National Id" className="crancy-wc__form-input form-control"
                            
                            onChange={e=>setNationalId(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Role:</label>
                        <select className="col-4" value={role} required="required" onChange={e=>setRole(e.target.value)}>
                                <option value="" disabled selected hidden > Select Role</option>
                                <option value="Wife">Wife</option>
                                <option value="NextOfKin">Next Of Kin</option>
                                <option value="SecondaryEmergencyContact">Secondary Emergency Contact</option>
                                <option value="Dependant">Dependant</option>
                                
                        </select>
                    </div>

                 
                    <div className="crancy-wc__button--group">
                        <Link to='/' className='btn ntfmax-wc__btn ntfmax-wc__btn--two' >Cancel</Link>
                        <button className="btn btn-success ">Submit</button>
                    </div>


                </form>
            </div>
        </div>
    </div>
)
}

export default AddRelationshipDetails