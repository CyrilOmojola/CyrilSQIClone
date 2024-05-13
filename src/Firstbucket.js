import React from 'react'
import './Firstbucket.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Firstbucket = () => {
  return (
    <>
    
        <div className="first__bucket">

            <div className="bucket-i">
                <div className="fb"><FaFacebookF /></div>
                <div className="twi"> <FaTwitter /></div>
                <div className="lin"><FaLinkedinIn /></div>
            </div>

            <div className="bucket-text">
                <h1>Study to become a global talent</h1>
                <p>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
                <button>Start Now </button>
               
               <div className="bot">
                    <div className="cir"><FaWhatsapp /></div>
               </div>
            </div>

            <div className="bucket-picture">
                <img src={require ("./Images/student.png")} alt="" />
            </div>

        </div>

        

           
    <div className="next"></div>
    
    
    
    
    
    </>
  )
}

export default Firstbucket