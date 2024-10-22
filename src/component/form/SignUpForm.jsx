import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'
function SignUpForm() {

  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [email,setEmail] = useState('');
  const [mobile,setMobile] = useState('');
  const [username,setUsername] = useState('');
  const [employeeId,setEmployeeId] = useState('');
  const [userType,setUserType] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

function handleSubmit(e) {
  e.preventDefault();
  axios.post('https://kwale-hris-api.onrender.com/register',{lname,fname,email,username,employeeId,mobile,userType,password})
  .then(res=>{
      console.log(res);
      navigate('/login');
  }).catch(err=>console.log(err));

}

  return (
    <>
      <div className="crancy-wc__heading">
        <h3 className="crancy-wc__form-title crancy-wc__form-title__one">
          Create your account
        </h3>
      </div>
      {/* <!-- Sign in Form --> */}
      <form className="crancy-wc__form-main" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            {/* <!-- Form Group --> */}
            <div className="form-group">
              <div className="form-group__input">
                <input
                  className="crancy-wc__form-input"
                  type="text"
                  name="first-name"
                  placeholder="First name"
                  required="required"
                  onChange={e=>setFname(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <div className="form-group__input">
                <input
                  className="crancy-wc__form-input"
                  type="text"
                  name="last-name"
                  placeholder="Last name"
                  required="required"
                  onChange={e=>setLname(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            {/* <!-- Form Group --> */}
            <div className="form-group">
              <div className="form-group__input">
                <input
                  className="crancy-wc__form-input"
                  type="text"
                  name="Employee-Number"
                  placeholder="Employee Number"
                  required="required"
                  onChange={e=>setEmployeeId(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group">
              <div className="form-group__input">
                <input
                  className="crancy-wc__form-input"
                  type="text"
                  name="preffered-username"
                  placeholder="Preffered Username"
                  required="required"
                  onChange={e=>setUsername(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
            <input
              className="crancy-wc__form-input"
              type="email"
              name="email"
              placeholder="Email"
              required="required"
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
            <input
              className="crancy-wc__form-input"
              type="text"
              name="phone"
              placeholder="Phone Number"
              required="required"
              onChange={e=>setMobile(e.target.value)}
            />
          </div>
        </div>
        
        {/* <!-- Form Group --> */}
        {/* <div className="form-group">
          <div className="form-group__input">
                        <select className="col-4" required="required" value={designation} onChange={e=>setDesignation(e.target.value)} >
                                <option value="" disabled selected hidden > Choose Designation</option>
                                <option value="Designation1">Designation 1</option> 
                                <option value="Designation2">Designation 2</option>           
                                <option value="Designation3">Designation 3</option>
                                <option value="Designation4">Designation 4</option>
                                
                        </select>
          </div>
        </div> */}

        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
          <select className="col-4" required="required"  value={userType} onChange={e=>setUserType(e.target.value)} >
                                <option value="" disabled selected hidden > Choose UserType</option>
                                <option value="Staff">Staff</option> 
                                <option value="Employee">Employee</option>           
                                <option value="Executive Member">Executive Member</option>
                                
                        </select>
          </div>
        </div>

        {/* <!-- Form Group --> 
        <div className="form-group">
          <div className="form-group__input">
                    <select  value={subCounty} onChange={changeSubCounty}>
                           <option value="" disabled selected hidden >Select Sub-County</option>
                           {subCounties.map(subcounty=>(
                                        <option value={subcounty.name}> {subcounty.name}</option>
                                    ))} 
                    </select>
          </div>
        </div>

        */}

        {/* <!-- Form Group --> 
        <div className="form-group">
          <div className="form-group__input">
          <select  value={ward} onChange={changeWard}>
                           <option value="" disabled selected hidden >Select Ward</option>
                           {wards.map(ward=>(
                                        <option value={ward.name}> {ward.name}</option>
                                    ))} 
                    </select>
          </div>
        </div>

        */}

         {/* <!-- Form Group --> 
         <div className="form-group">
          <div className="form-group__input">
          <select  value={zone} onChange={changeZone}>
                           <option value="" disabled selected hidden >Select Zones</option>
                           {zones.map(zone=>(
                                        <option value={zone.name}> {zone.name}</option>
                                    ))} 
                    </select>
          </div>
        </div>

        */}

        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
            <input
              className="crancy-wc__form-input"
              placeholder="Password"
              id="password-field"
              type="password"
              name="password"
              maxLength="8"
              required="required"
              onChange={e=>setPassword(e.target.value)}
            />
            <span className="crancy-wc__toggle">
              <i className="fas fa-eye" id="toggle-icon"></i>
            </span>
          </div>
        </div>
        {/* <!-- Form Group --> */}
        {/* <div className="form-group">
          <div className="crancy-wc__check-inline">
            <div className="crancy-wc__checkbox">
              <input
                className="crancy-wc__form-check"
                id="checkbox"
                name="checkbox"
                type="checkbox"
              />
              <label htmlFor="checkbox">
                By proceeding, you agree to the{" "}
                <a href="#">Terms and Conditions</a>
              </label>
            </div>
          </div>
        </div> */}
        {/* <!-- Form Group --> */}
        <div className="form-group form-mg-top25">
          <div className="crancy-wc__button">
            <button className="ntfmax-wc__btn" type="submit">
              Sign Up
            </button>
          </div>
          {/* <div className="crancy-wc__form-login--label">
            <span>Or sign up with</span>
          </div>
          <div className="crancy-wc__button--group">
            <button
              className="ntfmax-wc__btn ntfmax-wc__btn--two"
              type="submit"
            >
              <div className="ntfmax-wc__btn-icon">
                <img src={googleLogo} />
              </div>
              Google
            </button>
            <button
              className="ntfmax-wc__btn ntfmax-wc__btn--two"
              type="submit"
            >
              <div className="ntfmax-wc__btn-icon">
                <img src={appleLogo} />
              </div>
              Apple
            </button>
          </div>*/}
        </div> 
        {/* <!-- Form Group --> */}
        <div className="form-group form-mg-top30">
          <div className="crancy-wc__bottom">
            <p className="crancy-wc__text">
              Already have an account ? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
