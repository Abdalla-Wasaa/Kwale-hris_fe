import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



function AddEducationDetails() {
const [payrollId,setPayrollId] = useState('');
const [institutionName,setInstitutionName] = useState('');
const [graduationYear,setGraduationYear] = useState('');
const [achievements,setAchievements] = useState('');
const [courseName,setCourseName] = useState('');
// const [secondaryInstitution,setSecondaryInstitution] = useState('');
// const [secondaryYear,setSecondaryYear] = useState('');
// const [secondaryAchievements,setSecondaryAchievements] = useState('');
// const [professionalInstitution,setProfessionalInstitution] = useState('')
// const [professionalYear,setProfessionalYear] = useState('');
// const [professionalAchievements,setProfessionalAchievements] = useState('');


const navigate = useNavigate();

function handleSubmit(e) {
    e.preventDefault();
        axios.post('http://localhost:4000/addEducationDetails',{payrollId,institutionName,graduationYear,achievements,courseName})
    .then(res=>{
        console.log(res);
        navigate('/employees');
    }).catch(err=>console.log(err));
 
}

return (
    <div>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4'>
                <h2>Add Employee Education-Details</h2>
                <form  className="crancy-wc__form-main" onSubmit={handleSubmit}>
                <div className="mb-2">
                        <label htmlFor="">Payroll Id:</label>
                        <input type="text" placeholder="Enter payroll Id" className="form-control"
                            required="required"
                            onChange={e=>setPayrollId(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Institution Name:</label>
                        <input type="text" placeholder="Enter The Institution Name" className="form-control"
                            required="required"
                            onChange={e=>setInstitutionName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Course Name:</label>
                        <input type="text" placeholder="Enter The Course Name" className="form-control"
                            required="required"
                            onChange={e=>setCourseName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Year of Completion:</label>
                        <input type="text" placeholder="Enter Year of Completion" className="form-control"
                            required="required"
                            onChange={e=>setGraduationYear(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Primary Achievements:</label>
                        <input type="text" placeholder="What Did you Achieve" className="form-control"
                            required="required"
                            onChange={e=>setAchievements(e.target.value)}
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

export default AddEducationDetails