import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Layout from "../../component/home-two/Layout";
import InnerWrapper from "../../component/home-three/InnerWrapper";
import useMenu from "../../hooks/useMenu";
import Wrapper from "../../component/settings/Wrapper";
import SelectEditPage from '../selecteditPage';


function EditSelectionPage() {
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
    const [religion,setreligion] = useState('');

    useEffect(()=>{
        axios.get('https://kwale-hris-app.onrender.com/getEmployee/'+id,{payrollId,fname,lname,email,surname,gender,address,salutation,kra,nationalId,religion})
        .then(res => {
            console.log(res);
            setPayrollId(res?.data[0].payrollId)
            setFname(res?.data[0].fname)
            setLname(res?.data[0].lname)
            setEmail(res?.data[0].email)
            setSurname(res?.data[0].surname)
            setGender(res?.data[0].gender)
            setAddress(res?.data[0].address)
            setSalutation(res?.data[0].salutation)
            setKra(res?.data[0].kra)
            setNationalId(res?.data[0].id)
            setreligion(res?.data[0].religion)
        })
        .catch(err=>console.log(err));
    },[])

const prollId = payrollId;
    useMenu();
    return (
      <Layout>
      <Wrapper>
      <div className="row">
        <InnerWrapper>
      
                <>
                <div style={{marginBottom:"10px", marginTop:"20px"}}><Link to='/employees' className='btn btn-success' >Back</Link></div> 
                
                <h1 style={{marginBottom:"20px", marginTop:"20px",fontSize: '30px'}}>{surname} {fname} {lname} </h1>
        <h1 style={{fontSize: '20px'}}>Edit Personal Details</h1>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-100 mt-0 bg-white rounded p-4'>
            
            <div style={{marginBottom:"10px", marginTop:"20px"}}><Link to={'/updateEmployee/'+id} className='btn btn-primary' >Edit</Link></div> 
               
            </div>
        </div>
        </>
        </InnerWrapper>
        <InnerWrapper style={{marginBottom:"10px", marginTop:"20px"}}>

        <>
        <h1 style={{fontSize: '20px'}}>Edit Work-Details</h1>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-100 mt-0 bg-white rounded p-4'>
            
            <div style={{marginBottom:"10px", marginTop:"20px"}}><Link to={'/updateWorkDetails/'+prollId} className='btn btn-primary' >Edit</Link></div>

            </div>
        </div>
        </>

        </InnerWrapper>
        <InnerWrapper style={{marginBottom:"10px", marginTop:"20px"}}>

        <>
        <h1 style={{fontSize: '20px'}}>Edit Bank-Details</h1>
        <div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
            <div className='w-100 mt-0 bg-white rounded p-4'>

            <div style={{marginBottom:"10px", marginTop:"20px"}}><Link to={'/updateBankDetails/'+prollId} className='btn btn-primary' >Edit</Link></div>

            </div>
        </div>
        </>

        </InnerWrapper>
        <InnerWrapper style={{marginBottom:"10px", marginTop:"20px"}}>

{/* <>
<h1 style={{fontSize: '20px'}}>Edit Relationship-Details</h1>
<div className='d-flex vh-50 bg-white justify-content-center align-items-center'>
    <div className='w-100 mt-0 bg-white rounded p-4'>
    
    <div style={{padding:"12px 24px"}}><Link to={'/updateRelationshipDetails/'+prollId} className='btn btn-primary' >Edit</Link></div>

    </div>
</div>
</> */}

</InnerWrapper>
        
      </div>
      </Wrapper>
    </Layout>
    );
}

export default EditSelectionPage