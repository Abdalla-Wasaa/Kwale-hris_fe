import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Layout from "../../component/home-two/Layout";
import InnerWrapper from "../../component/home-three/InnerWrapper";
import useMenu from "../../hooks/useMenu";
import Wrapper from "../../component/settings/Wrapper";


function EmployeeDetails() {
    const { id } = useParams();
    console.log("WE HAVE AN ID "+id);
    const [payrollId,setPayrollId] = useState('');
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [email,setEmail] = useState('');
    const [surname,setSurname] = useState('');
    const [address,setAddress] = useState('');
    const [gender,setGender] = useState('');
    const [salutation,setSalutation] = useState('');
    const [kra,setKra]= useState('');
    const [nationalId,setNationalId] = useState('');
    const [religion,setReligion] = useState('');
    const [ethnicity,setEthnicity] = useState('')
    const [jobGroup,setJobGroup] = useState('');
    const [division,setDivision] = useState('');
    const [department,setDepartment] = useState('');
    const [dutyStation,setDutyStation] = useState('');
    const [salaryScalePoint, setSalaryScalePoint] = useState('');
    const [deployment,setDeployment] = useState('');
    const [subcounty,setSubcounty] = useState('');
    const [ward,setWard] = useState('');
    const [incrementalMonth,setIncrementalMonth] = useState('');
    const [bankAccountName,setBankAccountName] = useState('');
    const [bankBranch,setBankBranch] = useState('');
    const [bankAccountNumber,setBankAccountNumber] = useState('');
    const [nssfNumber,setNssfNumber] = useState('');
    const [nhifNumber,setNhifNumber] = useState('');
    const [relationship,setRelationship] = useState('');
    const [fullName,setFullName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [relativeEmail,setRelativeEmail] = useState('');
    const [role,setRole] = useState('');
    const [relativeNationalId,setRelativeNationalId] = useState('');

    // const API_BASE_URL = process.env.REACT_APP_API_BASE_URL


    // GET 

    useEffect(() => {
        axios.get(`https://kwale-hris-api.onrender.com/employeeDetails/`+id)
            .then(res => {
                if (res.data && Array.isArray(res.data) && res.data.length > 0) {
                    const data = res.data[0];
                    setPayrollId(data.payrollId || '');
                    setFname(data.fname || '');
                    setLname(data.lname || '');
                    setEmail(data.email || '');
                    setSurname(data.surname || '');
                    setGender(data.gender || '');
                    setAddress(data.address || '');
                    setSalutation(data.salutation || '');
                    setKra(data.kra || '');
                    setNationalId(data.empNationalId || '');
                    setReligion(data.religion || '');
                    setEthnicity(data.ethnicity || '');
                    setJobGroup(data.WorkDetails?.jobGroup || '');
                    setDivision(data.WorkDetails?.division || '');
                    setDepartment(data.WorkDetails?.department || '');
                    setDutyStation(data.WorkDetails?.dutyStation || '');
                    setSalaryScalePoint(data.WorkDetails?.salaryScalePoint || '');
                    setDeployment(data.WorkDetails?.deployment || '');
                    setSubcounty(data.WorkDetails?.subcounty || '');
                    setWard(data.WorkDetails?.ward || '');
                    setIncrementalMonth(data.WorkDetails?.incrementalMonth || '');
                    setBankAccountName(data.bankDetails?.bankAccountName || '');
                    setBankAccountNumber(data.bankDetails?.bankAccountNumber || '');
                    setBankBranch(data.bankDetails?.bankBranch || '');
                    setNssfNumber(data.bankDetails?.nssfNumber || '');
                    setNhifNumber(data.bankDetails?.nhifNumber || '');
                } else {
                    console.log('No data available or data is not an array');
                }
            })
            .catch(err => {
                console.error('Error fetching employee details:', err);
            });
    }, [id]);

const [relationshipDetails,setRelationshipDetails] = useState([]);
useEffect(() => {
    if (payrollId) {
        axios.get('https://kwale-hris-api.onrender.com/getRelationshipDetails/' + payrollId)
            .then(res => {
                console.log(res);
                setRelationshipDetails(res?.data);
            })
            .catch(err => console.log('Axios error:', err.response ? err.response.data : err.message));
    }
}, [payrollId]);

const [educationDetails,setEducationDetails] = useState([]);
useEffect(() => {
    if (payrollId) {
        axios.get('https://kwale-hris-api.onrender.com/getEductnDetails/' + payrollId)
            .then(res => {
                console.log(res);
                setEducationDetails(res?.data);
            })
            .catch(err => console.log('Axios error:', err.response ? err.response.data : err.message));
    }
}, [payrollId]);
    useMenu();
    return (
      <Layout>
      <Wrapper>
      <div className="row">
        <InnerWrapper>
      
                <>
                <div style={{marginBottom:"10px", marginTop:"20px"}}><Link to='/employees' className='btn btn-success' >Back</Link></div> 
        <h1 style={{fontSize: '30px'}}>Employee Personal Details</h1>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-100 mt-0 bg-white rounded p-4'>
            
                <table className="crancy-table__main crancy-table__main-v1">
                    <thead >
                            {/* <tr>
                                <th className="crancy-table__column-1 crancy-table__h1">Employee FullName</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Email</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Location</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Gender</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Kra</th>
                                <th className="crancy-table__column-1 crancy-table__h1">National Id</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Religion</th>
                                
                               
                            </tr> */}
                        
                    </thead>
                    <tbody>
                    <tr>
                            <th>Employee FullName</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{surname} {fname} {lname}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{email}</td>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{address}</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{gender}</td>
                        </tr>
                        <tr>
                            <th>Kra</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{kra}</td>
                        </tr>
                        <tr>
                            <th>National Id</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{nationalId}</td>
                        </tr>
                        <tr>
                            <th>Ethnicity</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{ethnicity}</td>
                        </tr>
                        <tr>
                            <th>Religion</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{religion}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
        </InnerWrapper>
        <InnerWrapper style={{marginBottom:"10px", marginTop:"20px"}}>

        <>
        <h1 style={{fontSize: '30px'}}>Employee Work-Details</h1>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-100 mt-0 bg-white rounded p-4'>
            
                <table className="crancy-table__main crancy-table__main-v1">
                    <thead >

                        
                    </thead>
                    <tbody>
                    <tr>
                            <th>Department</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{department}</td>
                        </tr>
                        <tr>
                            <th>Division</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{division}</td>
                        </tr>
                        <tr>
                            <th>Job Group</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{jobGroup}</td>
                        </tr>
                        <tr>
                            <th>Pay Group</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">County Council</td>
                        </tr>
                        <tr>
                            <th>Duty Station</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{dutyStation}</td>
                        </tr>
                        <tr>
                            <th>Deployment</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{deployment}</td>
                        </tr>
                        <tr>
                            <th>Sub-County</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{subcounty}</td>
                        </tr>
                        <tr>
                            <th>Ward</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{ward}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>

        </InnerWrapper>
        <InnerWrapper style={{marginBottom:"10px", marginTop:"20px"}}>

        <>
        <h1 style={{fontSize: '30px'}}>Employee Bank-Details</h1>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-100 mt-0 bg-white rounded p-4'>
            
                <table className="crancy-table__main crancy-table__main-v1">
                    <thead >

                        
                    </thead>
                    <tbody>
                    <tr>
                            <th>Bank Account Name</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{bankAccountName}</td>
                        </tr>
                        <tr>
                            <th>Bank Account Number</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{bankAccountNumber}</td>
                        </tr>
                        <tr>
                            <th>Bank Branch</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{bankBranch}</td>
                        </tr>
                        <tr>
                            <th>NHIF</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{nhifNumber}</td>
                        </tr>
                        <tr>
                            <th>NSSF</th>
                            <td className="crancy-table__column-2 crancy-table__data-2">{nssfNumber}</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
        </>

        </InnerWrapper>
        <InnerWrapper style={{marginBottom:"10px", marginTop:"20px"}}>

<>
<h1 style={{fontSize: '30px'}}>Employee Education-Details</h1>
<div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
    <div className='w-100 mt-0 bg-white rounded p-4'>
    
        <table className="crancy-table__main crancy-table__main-v1">
            <thead >
                            <tr>
                                <th className="crancy-table__column-1 crancy-table__h1">Institution Name </th>
                                <th className="crancy-table__column-1 crancy-table__h1">Course Name</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Achievements</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Graduation Year</th>
                                {/* <th className="crancy-table__column-1 crancy-table__h1">Secondary Institution</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Secondary Achievements</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Professional Graduation Year</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Professional Institution</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Professional Course</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Professional Achievements</th> */}
                                
                                
                               
                            </tr>
                
            </thead>
            <tbody>
            {educationDetails.length > 0 && educationDetails.map((educationDetail) => (
                    <tr key={educationDetail._id}> {/* Add a unique key here */}
                        <Link to={`/updateEducationDetails/${educationDetail._id}`}><td>{educationDetail.institutionName}</td></Link>
                        <td>{educationDetail.courseName}</td>
                        <td>{educationDetail.achievements}</td>
                        <td>{educationDetail.graduationYear}</td>
                        {/* <td>{educationDetail.secondaryInstitution}</td>
                        <td>{educationDetail.secondaryAchievements}</td>
                        <td>{educationDetail.professionalYear}</td>
                        <td>{educationDetail.professionalInstitution}</td>
                        <td>{educationDetail.professionalCourse}</td>
                        <td>{educationDetail.professionalAchievements}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
</>

</InnerWrapper>
        <InnerWrapper style={{marginBottom:"10px", marginTop:"20px"}}>

<>
<h1 style={{fontSize: '30px'}}>Employee Relationship-Details</h1>
<div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
    <div className='w-100 mt-0 bg-white rounded p-4'>
    
        <table className="crancy-table__main crancy-table__main-v1">
            <thead >
                            <tr>
                                <th className="crancy-table__column-1 crancy-table__h1">Relative FullName</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Relationship</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Email</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Phone Number</th>
                                <th className="crancy-table__column-1 crancy-table__h1">Role</th>
                                <th className="crancy-table__column-1 crancy-table__h1">National Id</th>
                                
                               
                            </tr>
                
            </thead>
            <tbody>
            {relationshipDetails.length > 0 && relationshipDetails.map((relationshipDetail) => (
                    <tr key={relationshipDetail.id}> {/* Add a unique key here */}
                       <Link to={`/updateRelationshipDetails/${relationshipDetail._id}`}> <td>{relationshipDetail.fullName}</td> </Link>
                        <td>{relationshipDetail.relationship}</td>
                        <td>{relationshipDetail.email}</td>
                        <td>{relationshipDetail.phoneNumber}</td>
                        <td>{relationshipDetail.role}</td>
                        <td>{relationshipDetail.nationalId}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
</>

</InnerWrapper>

      </div>
      </Wrapper>
    </Layout>
    );
}

export default EmployeeDetails