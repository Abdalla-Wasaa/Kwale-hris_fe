import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



function CreateEmployee() {
const [payrollId,setPayrollId] = useState('');
const [fname,setFname] = useState('');
const [lname,setLname] = useState('');
const [surname,setSurname] = useState('');
const [salutation , setSalutation] = useState('');
const [email,setEmail] = useState('');
const [kra,setKra] = useState('');
const [phoneNumber,setPhoneNumber] = useState('');
const [address,setAddress] = useState('');
const [dob,setDob] = useState('');
const [id,setId] = useState('');
const [gender,setGender] = useState('');
const [ethnicity,setEthnicity] = useState('');
const [religion,setReligion] = useState('');
const [bloodGroup,setBloodGroup] = useState('');
const [userType,setUserType] = useState('');
const [password,setPassword] = useState('');
const navigate = useNavigate();

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

function handleSubmit(e) {
    e.preventDefault();
    axios.post('https://kwale-hris-api.onrender.com/createEmployee',{payrollId,salutation,lname,fname,surname,email,kra,phoneNumber,ethnicity,dob,id,gender,bloodGroup,religion,address,userType,password})
    .then(res=>{
        console.log(res);
        navigate('/employees');
    }).catch(err=>console.log(err));
 
}

return (
    <div>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4'>
            <div style={{marginBottom:"20px"}}><Link to='/employees' className='btn btn-success' >Back</Link></div> 
                <h2>Add Personal Employee details</h2>
                <form  className="crancy-wc__form-main" onSubmit={handleSubmit}>
                <div className="mb-2">
                        <label htmlFor="">Payroll Id:</label>
                        <input type="text" placeholder="Enter payroll Id" className="form-control"
                            required="required"
                            onChange={e=>setPayrollId(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Salutation:</label>
                        <select className="col-4" value={salutation} required="required" onChange={e=>setSalutation(e.target.value)}>
                                <option value="" disabled selected hidden > Choose Salutation</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Miss">Miss</option>
                                <option value="Sir">Sir</option>
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">First Name:</label>
                        <input type="text" placeholder="Enter First Name" className="form-control"
                            required="required"
                            onChange={e=>setFname(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Last Name:</label>
                        <input type="text" placeholder="Enter Last Name" className="form-control"
                            required="required"
                            onChange={e=>setLname(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Surname:</label>
                        <input type="text" placeholder="Enter Surname" className="form-control"
                            required="required"
                            onChange={e=>setSurname(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email:</label>
                        <input type="email" placeholder="Enter Email address" className="crancy-wc__form-input form-control"
                            required="required"
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">KRA Pin:</label>
                        <input type="text" placeholder="Enter KRA Pin" className="crancy-wc__form-input form-control"
                            required="required"
                            onChange={e=>setKra(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">National Id:</label>
                        <input type="text" placeholder="Enter National Id" className="crancy-wc__form-input form-control"
                            required="required"
                            onChange={e=>setId(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Date Of Birth:</label>
                        <input type="date" placeholder="Select D.O.B" className="crancy-wc__form-input form-control"
                            required="required"
                            onChange={e=>setDob(e.target.value)}
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
                            required="required"
                            onChange={e=>setPhoneNumber(e.target.value)}
                            
                            />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Address:</label>
                        <select className="col-4" value={address} required="required" onChange={e=>setAddress(e.target.value)}>
                                <option value="" disabled selected hidden > Choose Home County</option>
                                <option value="Mombasa">Mombasa</option>
                                <option value="Kilifi">Kilifi</option>
                                <option value="Kwale">Kwale</option>
                                <option value="Lamu">Lamu</option>
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Ethnicity:</label>
                        <select className="col-4" required="required" value={ethnicity} onChange={e=>setEthnicity(e.target.value)} >
                                <option value="" disabled selected hidden > Choose Your Tribe</option>
                                <option value="Mombasa">Digo</option>
                                <option value="Kilifi">Duruma</option>
                                <option value="Kwale">Kamba</option>
                                <option value="Lamu">Somali</option>
                                <option value="Lamu">Giriama</option>
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Religion:</label>
                        <select className="col-4" required="required" value={religion} onChange={e=>setReligion(e.target.value)} >
                                <option value="" disabled selected hidden > Choose Religion</option>
                                <option value="Mombasa">Muslim</option>
                                <option value="Kilifi">Christian</option>
                                <option value="Kwale">Hindu</option>
                                <option value="Lamu">Pagan</option>
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Gender:</label>
                        <select className="col-4" required="required" value={gender} onChange={e=>setGender(e.target.value)}>
                                <option value="" disabled selected hidden > Choose Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                
                        </select>
                    </div>
                    
                    <div className="mb-2">
                    <label htmlFor="">Blood Group:</label>
                    <select className="crancy-wc__form-input"  required="required" value={bloodGroup} onChange={e=>setBloodGroup(e.target.value)}>
                        <option value="" disabled selected hidden >Select Blood-Group</option>
                        <option>A RhD positive (A+)</option>
                        <option>A RhD negative (A-)</option>
                        <option>B RhD positive (B+)</option>
                        <option>B RhD negative (B-)</option>
                        <option>AB RhD positive (AB+)</option>
                        <option>AB RhD negative (AB-)</option>
                        <option>O RhD positive (O+)</option>
                        <option>O RhD negative (O-)</option>
                    </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">User Type:</label>
                        <select className="crancy-wc__form-input" required="required" value={userType} onChange={e=>setUserType(e.target.value)}>
                            <option value="" disabled selected hidden >Select User-Type</option>
                            <option>Employee</option>
                        </select>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Password:</label>
                        <input type="password" placeholder="Enter Password" className="form-control"
                            required="required"
                            onChange={e=>setPassword(e.target.value)}   
                        />
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

export default CreateEmployee