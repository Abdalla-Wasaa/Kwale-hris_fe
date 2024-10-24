import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateEducationDetails() {
    const { Id } = useParams();
    console.log("WE HAVE AN ID: ", Id);
    
    const [payrollId,setPayrollId] = useState('');
    const [institutionName,setInstitutionName] = useState('');
    const [graduationYear,setGraduationYear] = useState('');
    const [achievements,setAchievements] = useState('');
    const [courseName,setCourseName] = useState('');
    const navigate = useNavigate();

    // const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

    useEffect(() => {
        if (Id) {
            axios.get('https://kwale-hris-api.onrender.com/getEducationDetails/'+Id)
                .then(res => {
                    if (res.data && res.data.length > 0) {
                        const data = res.data[0]; // Assuming response is an array
                        setPayrollId(data.payrollId);
                        setInstitutionName(data.institutionName);
                        setGraduationYear(data.graduationYear);
                        setAchievements(data.achievements);
                        setCourseName(data.courseName);
                    }
                })
                .catch(err => console.log(err));
        } else {
            console.error("Id is undefined");
        }
    }, [Id]);

    function handleSubmit(e) {
        e.preventDefault();
        axios.put('https://kwale-hris-api.onrender.com/updateEducationDetails/'+Id, {
            payrollId,
           institutionName,
           graduationYear,
           achievements,
           courseName
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
                <h2>Update Education-Details</h2>
                <form  className="crancy-wc__form-main" onSubmit={handleSubmit}>
                <div className="mb-2">
                        <label htmlFor="">Payroll Id:</label>
                        <input type="text" placeholder="Enter payroll Id" className="form-control"
                            required="required"
                            value={payrollId}
                            onChange={e=>setPayrollId(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Institution Name:</label>
                        <input type="text" placeholder="Enter The Institution Name" className="form-control"
                            required="required"
                            value={institutionName}
                            onChange={e=>setInstitutionName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Course Name:</label>
                        <input type="text" placeholder="Enter The Course Name" className="form-control"
                            required="required"
                            value={courseName}
                            onChange={e=>setCourseName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Year of Completion:</label>
                        <input type="text" placeholder="Enter Year of Completion" className="form-control"
                            required="required"
                            value={graduationYear}
                            onChange={e=>setGraduationYear(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Primary Achievements:</label>
                        <input type="text" placeholder="What Did you Achieve" className="form-control"
                            required="required"
                            value={achievements}
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
    );
}

export default UpdateEducationDetails;
