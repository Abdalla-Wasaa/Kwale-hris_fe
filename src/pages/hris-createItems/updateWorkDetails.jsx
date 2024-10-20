import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



function UpdateWorkDetails() {
    const { prollId } = useParams();
    console.log("WE HAVE AN ID "+prollId);
const [payrollId,setPayrollId] = useState('');
const [department,setDepartment] = useState('');
const [division,setDivision] = useState('');
const [firstAppointment,setFirstAppointment] = useState('');
const [currentAppointment,setCurrentAppointment] = useState('');
const [deployment,setDeployment] = useState('');
const [subcounty, setSubcounty] = useState('');
const [ward,setWard] = useState('');
const [dutyStation,setDutyStation] = useState('');
const [jobGroup,setJobGroup] = useState('');
const [payGroup,setPayGroup] = useState('');
const [pensionScheme,setPensionScheme] = useState('');
const [salaryScalePoint, setSalaryScalePoint] = useState('');
const [incrementalMonth,setIncrementalMonth] = useState('');

const navigate = useNavigate();

useEffect(()=>{
    axios.get('https://kwale-hris-app.onrender.com:4000/getWorkDetails/'+prollId,{payrollId,department,division,payGroup,jobGroup,pensionScheme,firstAppointment,currentAppointment,deployment,subcounty,ward,dutyStation,salaryScalePoint,incrementalMonth})
    .then(res => {
        console.log(res);
        setPayrollId(res?.data[0].payrollId)
        setDepartment(res?.data[0].department)
        setDivision(res?.data[0].division)
        setFirstAppointment(res?.data[0].firstAppointment)
        setCurrentAppointment(res?.data[0].currentAppointment)
        setDeployment(res?.data[0].deployment)
        setSubcounty(res?.data[0].subCounty)
        setWard(res?.data[0].ward)
        setDutyStation(res?.data[0].dutyStation)
        setJobGroup(res?.data[0].jobGroup)
        setPayGroup(res?.data[0].payGroup)
        setPensionScheme(res?.data[0].pensionScheme)
        setSalaryScalePoint(res?.data[0].salaryScalePoint)
        setIncrementalMonth(res?.data[0].incrementalMonth)
    })
    .catch(err=>console.log(err));
},[])


const [wards,setWards] = useState([]);
const subcounties=[
        {
            name:"Matuga",
            wards:["Tiwi","Waa","Tsimba Golini","Mkongani","Kubo South"]
        },
        {
            name:"Msambweni",
            wards:["Ukunda","Ramisi","Kinondo","Bongwe Gombato"]
        },
        {
            name:"Lunga lunga",
            wards:["Pongwe-Kikoneni","Mwereni","Dzombo","Vanga"]
        },
        {
            name:"Kinango",
            wards:["Kinango","Ndavaya","Puma","Samburu","Kasemeni"]
        }
    ];


const changeSubcounty = (e)=>{
    setSubcounty(e.target.value);
    setWards(subcounties.find((subCounty)=>subCounty.name===e.target.value).wards)
    };

    const changeWard = (e)=>{
    setWard(e.target.value);
    //setWards(subCounties.find((subCounty)=>subCounty.name===e.target.value).wards)
    };
        
    

const [departments,setDepartments] = useState([]);
useEffect(()=>{
    axios.get('https://kwale-hris-app.onrender.com:4000/getDepartments')
    .then(res => {
        console.log(res);
        setDepartments(res?.data)
    })
    .catch(err=>console.log(err));
},[])

function handleSubmit(e) {
    e.preventDefault();
    axios.put('https://kwale-hris-app.onrender.com:4000/updateWorkDetails/'+prollId,{payrollId,department,division,payGroup,jobGroup,pensionScheme,firstAppointment,currentAppointment,deployment,subcounty,ward,dutyStation,salaryScalePoint,incrementalMonth})
    .then(res=>{
        console.log(res);
        navigate('/employees');
    }).catch(err=>console.log(err));
 
}

return (
    <div>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4'>
                <h2>Update Employee Work-Details</h2>
                <form  className="crancy-wc__form-main" onSubmit={handleSubmit}>
                <div className="mb-2">
                        <label htmlFor="">Payroll Id:</label>
                        <input value={payrollId} type="text" placeholder="Enter payroll Id" className="form-control"
                            required="required"
                            onChange={e=>setPayrollId(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                    <label htmlFor="">Department:</label>
                    <select value={department} onChange={(e)=>setDepartment(e.target.value)}>
                        <option value="" disabled selected hidden >Choose Department</option>
                            {departments.map((data)=>(
                                <option value={data.departmentName}> {data.departmentName}</option>
                                        ))} 
                    </select>
                </div>
                <div className="mb-2">
                        <label htmlFor="">Division:</label>
                        <select className="col-4" value={division} required="required" onChange={e=>setDivision(e.target.value)}>
                                <option value="" disabled selected hidden > Select Division</option>
                                <option value="Director">Director</option>
                                <option value="Senior Officer 1">Senior Officer 1</option>
                                <option value="Senior Officer 2">Senior Officer 2</option>
                                <option value="Clerk">Clerk</option>
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Pay Group:</label>
                        <select className="col-4" value={payGroup} required="required" onChange={e=>setPayGroup(e.target.value)}>
                                <option value="" disabled selected hidden > Select Pay-Group</option>
                                <option value="National Council">National Council</option>
                                <option value="County Council">County Council</option>
                                <option value="County Government">County Government</option>
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Job Group:</label>
                        <select className="col-4" value={jobGroup} required="required" onChange={e=>setJobGroup(e.target.value)}>
                                <option value="" disabled selected hidden > Select Job-Group</option>
                                <option value="JG L">JG L</option>
                                <option value="JG N">JG N</option>
                                <option value="JG K">JG K</option>
                                <option value="JG J">JG J</option>
                                <option value="JG G">JG G</option>
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Pension Scheme:</label>
                        <select className="col-4" value={pensionScheme} required="required" onChange={e=>setPensionScheme(e.target.value)}>
                                <option value="" disabled selected hidden > Select Pension-Scheme</option>
                                <option value="LAP FUND">LAP FUND</option>
                                <option value="CPF">CPF</option>
                                
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Date Of First Appointment:</label>
                        <input value={firstAppointment} type="date" placeholder="Select Date" className="crancy-wc__form-input form-control"
                            required="required"
                            onChange={e=>setFirstAppointment(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Date Of Current Appointment:</label>
                        <input value={currentAppointment} type="date" placeholder="Select Date" className="crancy-wc__form-input form-control"
                            required="required"
                            onChange={e=>setCurrentAppointment(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Deployment:</label>
                        <input value={deployment} type="text" placeholder="Enter Deployment" className="crancy-wc__form-input form-control"
                            required="required"
                            onChange={e=>setDeployment(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                     <label htmlFor="">Sub-County:</label>
                            <select value={subcounty} onChange={changeSubcounty}>
                                    <option value="" disabled selected hidden >Select Sub-County</option>
                                    {subcounties.map(subcounty=>(
                                        <option value={subcounty.name}> {subcounty.name}</option>
                                    ))}       
                            </select>
                    </div>
                    <div className="mb-2">
                            <label htmlFor="">Ward:</label>
                            <select value={ward} onChange={changeWard}>
                                <option value="" disabled selected hidden >Select Ward</option>
                                {wards.map(wards=>(
                                                <option value={wards}> {wards}</option>
                                            ))} 
                            </select>
                        </div>
                    <div className="mb-2">
                        <label htmlFor="">Duty Station:</label>
                        <input value={dutyStation} type="text" placeholder="Enter Duty Station" className="form-control"
                            required="required"
                            onChange={e=>setDutyStation(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Salary Scale Point:</label>
                        <input value={salaryScalePoint} type="text" placeholder="Enter Salary Scale Point" className="form-control"
                            required="required"
                            onChange={e=>setSalaryScalePoint(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Incremental Month:</label>
                        <select className="col-4" value={incrementalMonth} required="required" onChange={e=>setIncrementalMonth(e.target.value)}>
                                <option value="" disabled selected hidden > Choose Incremental Month</option>
                                <option value="JANUARY">JANUARY</option>
                                <option value="FEBRUARY">FEBRUARY</option>
                                <option value="MARCH">MARCH</option>
                                <option value="APRIL">APRIL</option>
                                <option value="MAY">MAY</option>
                                <option value="JUNE">JUNE</option>
                                <option value="JULY">JULY</option>
                                <option value="AUGUST">AUGUST</option>
                                <option value="SEPTEMBER">SEPTEMBER</option>
                                <option value="OCTOBER">OCTOBER</option>
                                <option value="NOVEMBER">NOVEMBER</option>
                                <option value="DECEMBER">DECEMBER</option>
                            
                                
                        </select>
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

export default UpdateWorkDetails