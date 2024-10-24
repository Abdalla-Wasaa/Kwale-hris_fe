import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



function AddWorkDetails() {
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

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL


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


    const [divisions,setDivisions] = useState([]);
    const departments=[
        {
            name:"Public Service And Administration",
            divisions:["Human Resource Management","Inspectorate","Administration"]
        },
        {
            name:"Social Services And Talent Management",
            divisions:["Community Development","Sports & Talent Management","Culture & Social Services"]
        },
        {
            name:"Finance, Executive Services & Economic Planning",
            divisions:["Accounting","Procurement","Revenue","Auditing","Budgeting"]
        },
        {
            name:"Environment, Urban Planning & Natural Resources",
            divisions:["Physical Planning","Natural Resources",]
        },
        {
            name:"Trade, Tourism Promotion, ICT & Coperative Development",
            divisions:["Tourism", "ICT", "Trade & Coperative Development"]
        },
        {
            name:"Water Services",
            divisions:["Hydrology","Survey", "Water Quality Assurance", "Engineering Division"]
        },
        {
            name:"Agriculture, Livestock & Fisheries",
            divisions:["Agriculture", "Livestock", "Vetenary", "Fisheries"]
        },
        {
            name:"Health Services",
            divisions:["Nursing", "Clinical Medicine", "Pharmacy", "Medical Services", "Nutrition", "Public Health", "Health Records", "Administration", "Physiotherapy", "Radiology", "Laboratory", "Orthopedic", "medical Engineering"]
        },
        {
            name:"Roads And Public Works",
            divisions:["Roads", "Transports", "Public Works"]
        },
        {
            name:"Education",
            divisions:["Early Childhood Development Education", "Vocational Training"]
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
const changeDepartment = (e)=>{
    setDepartment(e.target.value);
    setDivisions(departments.find((department)=>department.name===e.target.value).divisions)
    };

const changeDivision = (e)=>{
setDivision(e.target.value);
//setWards(subCounties.find((subCounty)=>subCounty.name===e.target.value).wards)
};  
    

// const [departments,setDepartments] = useState([]);
// useEffect(()=>{
//     axios.get('http://localhost:4000/getDepartments')
//     .then(res => {
//         console.log(res);
//         setDepartments(res?.data)
//     })
//     .catch(err=>console.log(err));
// },[])

function handleSubmit(e) {
    e.preventDefault();
    axios.post('https://kwale-hris-api.onrender.com/addWorkDetails',{payrollId,department,division,payGroup,jobGroup,pensionScheme,firstAppointment,currentAppointment,deployment,subcounty,ward,dutyStation,salaryScalePoint,incrementalMonth})
    .then(res=>{
        console.log(res);
        navigate('/employees');
    }).catch(err=>console.log(err));
 
}

return (
    <div>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-4'>
                <h2>Add Employee Work-Details</h2>
                <form  className="crancy-wc__form-main" onSubmit={handleSubmit}>
                <div className="mb-2">
                        <label htmlFor="">Payroll Id:</label>
                        <input type="text" placeholder="Enter payroll Id" className="form-control"
                            required="required"
                            onChange={e=>setPayrollId(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                    <label htmlFor="">Department:</label>
                    <select value={department} onChange={changeDepartment}>
                        <option value="" disabled selected hidden >Choose Department</option>
                            {departments.map((department)=>(
                                <option value={department.name}> {department.name}</option>
                                        ))} 
                    </select>
                </div>
                <div className="mb-2">
                        <label htmlFor="">Division:</label>
                        <select className="col-4" value={division} required="required" onChange={changeDivision}>
                                <option value="" disabled selected hidden > Select Division</option>
                                {divisions.map(divisions=>(
                                                <option value={divisions}> {divisions}</option>
                                            ))} 
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Pay Group:</label>
                        <select className="col-4" value={payGroup} required="required" onChange={e=>setPayGroup(e.target.value)}>
                                <option value="" disabled selected hidden > Select Pay-Group</option>
                                <option value="AA">AA</option>
                                <option value="AC">AC</option>
                                <option value="AY">AY</option>
                                <option value="BA">BA</option>
                                <option value="DA">DA</option>
                                <option value="EJ">EJ</option>
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Job Group:</label>
                        <select className="col-4" value={jobGroup} required="required" onChange={e=>setJobGroup(e.target.value)}>
                                <option value="" disabled selected hidden > Select Job-Group</option>
                                <option value="JG A/B/C">Job-Group A/B/C</option>
                                <option value="JG D">Job-Group D</option>
                                <option value="JG E">Job-Group E</option>
                                <option value="JG F">Job-Group F</option>
                                <option value="JG G">Job-Group G</option>
                                <option value="JG H">Job-Group H</option>
                                <option value="JG J">Job-Group J</option>
                                <option value="JG K">Job-Group K</option>
                                <option value="JG L">Job-Group L</option>
                                <option value="JG M">Job-Group M</option>
                                <option value="JG N">Job-Group N</option>
                                <option value="JG P">Job-Group P</option>
                                <option value="JG Q">Job-Group Q</option>
                                <option value="JG R">Job-Group R</option>
                                <option value="JG S">Job-Group S</option>
                                <option value="JG T">Job-Group T</option>
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Pension Scheme:</label>
                        <select className="col-4" value={pensionScheme} required="required" onChange={e=>setPensionScheme(e.target.value)}>
                                <option value="" disabled selected hidden > Select Pension-Scheme</option>
                                <option value="LAP FUND">LAP FUND</option>
                                <option value="CPF">CPF</option>
                                <option value="GOK-Pension Scheme">GOK-Pension Scheme</option>
                                
                                
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Date Of First Appointment:</label>
                        <input type="date" placeholder="Select Date" className="crancy-wc__form-input form-control"
                            required="required"
                            onChange={e=>setFirstAppointment(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Date Of Current Appointment:</label>
                        <input type="date" placeholder="Select Date" className="crancy-wc__form-input form-control"
                            required="required"
                            onChange={e=>setCurrentAppointment(e.target.value)}
                        />
                    </div>
                    {/* <div className="mb-2">
                        <label htmlFor="">Deployment:</label>
                        <input type="text" placeholder="Enter Deployment" className="crancy-wc__form-input form-control"
                            required="required"
                            onChange={e=>setDeployment(e.target.value)}
                        />
                    </div> */}
                    <div className="mb-2">
                     <label htmlFor=""> Deployed Sub-County:</label>
                            <select value={subcounty} onChange={changeSubcounty}>
                                    <option value="" disabled selected hidden >Select Sub-County</option>
                                    {subcounties.map(subcounty=>(
                                        <option value={subcounty.name}> {subcounty.name}</option>
                                    ))}       
                            </select>
                    </div>
                    <div className="mb-2">
                            <label htmlFor="">Deployed Ward:</label>
                            <select value={ward} onChange={changeWard}>
                                <option value="" disabled selected hidden >Select Ward</option>
                                {wards.map(wards=>(
                                                <option value={wards}> {wards}</option>
                                            ))} 
                            </select>
                        </div>
                    <div className="mb-2">
                        <label htmlFor="">Duty Station:</label>
                        <input type="text" placeholder="Enter Duty Station" className="form-control"
                            required="required"
                            onChange={e=>setDutyStation(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Salary Scale Point:</label>
                        <input type="text" placeholder="Enter Salary Scale Point" className="form-control"
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
                        <Link to='/' className='btn ntfmax-wc__btn ntfmax-wc__btn--two' >Cancel</Link>
                        <button className="btn btn-success ">Submit</button>
                    </div>


                </form>
            </div>
        </div>
    </div>
)
}

export default AddWorkDetails