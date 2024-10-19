import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



function CreateDepartment() {
const [departmentName,setDepartmentName] = useState('');
const [description,setDescription] = useState('');
const navigate = useNavigate();

function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:4000/createDepartment',{departmentName,description})
    .then(res=>{
        console.log(res);
        navigate('/departments');
    }).catch(err=>console.log(err));
 
}

return (
    <div>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4'>
                <h2>Create A Department</h2>
                <form  className="crancy-wc__form-main" onSubmit={handleSubmit}>
                <div className="mb-2">
                        <label htmlFor="">Department Name:</label>
                        <input type="text" placeholder="Enter Department Name" className="form-control"
                            required="required"
                            onChange={e=>setDepartmentName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Description:</label>
                        <input type="textbox" placeholder="Describe the Department" className="form-control"
                            required="required"
                            onChange={e=>setDescription(e.target.value)}
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

export default CreateDepartment