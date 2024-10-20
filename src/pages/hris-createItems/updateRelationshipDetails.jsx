import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateRelationshipDetails() {
    const { Id } = useParams();
    console.log("WE HAVE AN ID: ", Id);
    
    const [payrollId, setPayrollId] = useState('');
    const [fullName, setFullName] = useState('');
    const [relationship, setRelationship] = useState('');
    const [email, setEmail] = useState('');
    const [nationalId, setNationalId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (Id) {
            axios.get(`https://kwale-hris-app.onrender.com/getRltnshpDetails/${Id}`)
                .then(res => {
                    if (res.data && res.data.length > 0) {
                        const data = res.data[0]; // Assuming response is an array
                        setPayrollId(data.payrollId);
                        setRelationship(data.relationship);
                        setFullName(data.fullName);
                        setEmail(data.email);
                        setRole(data.role);
                        setNationalId(data.nationalId);
                        setPhoneNumber(data.phoneNumber);
                    }
                })
                .catch(err => console.log(err));
        } else {
            console.error("Id is undefined");
        }
    }, [Id]);

    function handleSubmit(e) {
        e.preventDefault();
        axios.put(`https://kwale-hris-app.onrender.com/updateRelationshipDetails/${Id}`, {
            payrollId,
            relationship,
            fullName,
            email,
            role,
            nationalId,
            phoneNumber
        })
        .then(res => {
            console.log(res);
            navigate('/employees');
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
                <div className='w-50 bg-white rounded p-4'>
                    <h2>Update Relationship Details</h2>
                    <form className="crancy-wc__form-main" onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="">Payroll Id:</label>
                            <input 
                                value={payrollId} 
                                type="text" 
                                placeholder="Enter payroll Id" 
                                className="form-control"
                                required
                                onChange={e => setPayrollId(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Relationship:</label>
                            <select 
                                className="col-4" 
                                value={relationship} 
                                required 
                                onChange={e => setRelationship(e.target.value)}
                            >
                                <option value="" disabled hidden>Select Relationship</option>
                                <option value="Wife">Wife</option>
                                <option value="Parent">Parent</option>
                                <option value="Sibling">Sibling</option>
                                <option value="FamilyMember">Family Member</option>
                                <option value="Son">Son</option>
                                <option value="Daughter">Daughter</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Full Name:</label>
                            <input 
                                value={fullName} 
                                type="text" 
                                placeholder="Enter Full Name" 
                                className="form-control"
                                required
                                onChange={e => setFullName(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Phone Number:</label>
                            <input 
                                value={phoneNumber}
                                className="crancy-wc__form-input"
                                type="text"
                                placeholder="Enter Phone Number"
                                required
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Email:</label>
                            <input 
                                value={email} 
                                type="email" 
                                placeholder="Enter Email Address" 
                                className="crancy-wc__form-input form-control"
                                required
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">National Id:</label>
                            <input 
                                value={nationalId} 
                                type="text" 
                                placeholder="Enter National Id" 
                                className="crancy-wc__form-input form-control"
                                onChange={e => setNationalId(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Role:</label>
                            <select 
                                className="col-4" 
                                value={role} 
                                required 
                                onChange={e => setRole(e.target.value)}
                            >
                                <option value="" disabled hidden>Select Role</option>
                                <option value="NextOfKin">Next Of Kin</option>
                                <option value="SecondaryEmergencyContact">Secondary Emergency Contact</option>
                                <option value="Dependant">Dependant</option>
                            </select>
                        </div>
                        <div className="crancy-wc__button--group">
                            <Link to='/' className='btn ntfmax-wc__btn ntfmax-wc__btn--two'>Cancel</Link>
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateRelationshipDetails;
