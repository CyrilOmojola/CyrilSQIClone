import React from "react";
import './Header.css';
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
    return(
        <>
        
        
       <div className="nav">
            <div className="logo"><img src={require("./Images/Logo.jpg")} alt="" /></div>
            <div className="nav-i">
                <ul>
                    <li>
                        <a href="">About <FaAngleDown /> </a>
                        <div className="dropdown_menu">
                            <ul>
                                <li><a href="#">Our story</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Campus Info</a></li>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="">Programmes <FaAngleDown /> </a>
                        <div className="dropdown_menu">
                            <ul>
                                <li><a href="#">National Innovation Diploma</a></li>
                                <li><a href="#">Professional Diploma Program</a></li>
                                <li><a href="#">Executive Professional Certificate</a></li>
                                <li><a href="#">Programme</a></li>


                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="">Admissions <FaAngleDown /> </a>
                        <div className="dropdown_menu">
                            <ul>
                                <li><a href="#">Apply for a programme</a></li>
                                <li><a href="#">Mode of study</a></li>
                                <li><a href="#">Tuition</a></li>
                                <li><a href="#">Frequently Asked Question </a></li>


                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="">E-Portal <FaAngleDown /> </a>
                        <div className="dropdown_menu">
                            <ul>
                                <li><a href="#">Student</a></li>
                                <li><a href="#">Staff</a></li>


                            </ul>
                        </div>
                    </li>
                    <li><a href="">SQI Schorlaship</a></li>
                    <li><a href="">News</a></li>

                </ul>
            </div>
       </div>
   
        
        </>
    )
}

export default Header;