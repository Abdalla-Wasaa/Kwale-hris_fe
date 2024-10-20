import React,{useState} from "react";
import googleLogo from "../../assets/img/google-logo.png";
import appleLogo from "../../assets/img/apple-logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

function LoginForm() {

  const [employeeId,setEmployeeId] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('token',null);
    localStorage.setItem('isLoggedIn',false);
  
     axios.post('https://kwale-hris-app.onrender.com/login',{employeeId,password})
    .then(res=>{
      localStorage.setItem('token',res.data["accessToken"]);
      localStorage.setItem('id',res.data["id"]);
      localStorage.setItem('fname',res.data["fname"]);
      localStorage.setItem('lname',res.data["lname"]);
      localStorage.setItem('email',res.data["email"]);
      localStorage.setItem('employeeId',res.data["employeeId"]);
      localStorage.setItem('mobile',res.data["mobile"]);
      localStorage.setItem('userType',res.data["userType"]);
      localStorage.setItem('isLoggedIn',true);
        navigate('/');
    }).catch(err=>console.log(err));
 

}

  return (
    <>
      <div className="crancy-wc__heading">
        <h3 className="crancy-wc__form-title crancy-wc__form-title__one">
          Login to Hris Executive-kwale
        </h3>
      </div>
      <form className="crancy-wc__form-main" onSubmit={handleSubmit}>
        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
            <input
              className="crancy-wc__form-input"
              type="text"
              name="employeeIde"
              placeholder="Employee Id"
              required="required"
              onChange={e=>setEmployeeId(e.target.value)}
            />
          </div>
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
            <input
              className="crancy-wc__form-input"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
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
        {/* <!-- Form Group -->
        <div className="form-group">
          <div className="crancy-wc__check-inline">
            <div className="crancy-wc__checkbox">
              <input
                className="crancy-wc__form-check"
                id="checkbox"
                name="checkbox"
                type="checkbox"
              />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <div className="crancy-wc__forgot">
              <a href="forget-password.html" className="forgot-pass">
                Forgot Password?
              </a>
            </div>
          </div>
        </div> */}
        {/* <!-- Form Group -->*/}
        <div className="form-group form-mg-top25">
          <div className="crancy-wc__button">
            <button className="ntfmax-wc__btn" type="submit">
              Log In
            </button>
          </div>
          {/* <!-- Form Group --> 
          <div className="crancy-wc__form-login--label">
            <span>Or login with</span>
          </div>
          <div className="crancy-wc__button--group">
            <button
              className="ntfmax-wc__btn ntfmax-wc__btn--two"
              type="submit"
            >
              <div className="ntfmax-wc__btn-icon">
                <img src={googleLogo} alt="" />
              </div>
              Google
            </button>
            <button
              className="ntfmax-wc__btn ntfmax-wc__btn--two"
              type="submit"
            >
              <div className="ntfmax-wc__btn-icon">
                <img src={appleLogo} alt="" />
              </div>
              Apple
            </button>
          </div>*/}
        </div> 
        {/* <!-- Form Group --> */}
        <div className="form-group form-mg-top30">
          <div className="crancy-wc__bottom">
            <p className="crancy-wc__text">
              Dont’t have an account ?{" "}
              <Link to="/create-account">Get Started</Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
