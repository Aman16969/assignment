import React from 'react';
// import { useHistory } from 'react-router-dom';
import "./contact.css";

  

const Contact = () => {
  const mystyle = {
    height:"200px"
  }

  return (

  <div>
    <h2>Contact us</h2>
    <div className='row' style={{
      display:"flex",
      
    justifyContent: "space-evenly"
    }}> 
    <div className="container" style={{width:"300px"}} >
      <h2 style={{color:"rgb(34 94 101)"}}>Our Address</h2>
      <hr></hr>
      <p>Near Kshtriya DharamShala </p>
      <p>By pass Road koderma ,Jharkhand</p>
      <p>India,Asia</p>
      <br></br>
      
      <p style={{color:"#13afc0"}}>Phone Number:9876543210</p>
      <p style={{color:"#13afc0"}}>@ aman.ranjan@accolitedigital.com</p>

    </div>
    <div className="container" >
      <form style={{border:"0px"}}>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <input type="email" id="lname" name="email" placeholder="Your Email"/>
        <textarea id="subject" name="subject" placeholder="Write something.." style={mystyle}></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div></div>
   
  </div>

  )}
export default Contact;