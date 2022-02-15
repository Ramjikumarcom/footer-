import React from 'react';
import './style.css'
import pic from './logo.png'

const Footer = () => {
    function fName() {
        var c = document.getElementById("contact_us").style.display = "flex";
        var c = document.getElementById("contact_us").style.flexDirection = "column";
        document.getElementById("htimes").style.display="flex";
        document.getElementById("hplus").style.display = "none";

    }
    function fName1() {
        var c = document.getElementById("productsName").style.display = "flex";
        var c = document.getElementById("productsName").style.flexDirection = "column";
        document.getElementById("ptimes").style.display="flex";
        document.getElementById("pplus").style.display = "none";
    }
    function fName2() {
        var c = document.getElementById("about_the_begining").style.display = "flex";
        var c = document.getElementById("about_the_begining").style.flexDirection = "column";

        
        document.getElementById("cplus").style.display = "none";
        document.getElementById("ctimes").style.display = "flex";
    }
    function cuting() {
        var c1 = document.getElementById("about_the_begining").style.display = "none";
    }
    return <>

        <footer id="bFooter">
            <section>
                <div className="footerbox">





                    <div className="footerContent">


                        <div className="bHelp libox">
                            <div id="help" onClick={fName} className='iconplus'>

                                <h4 >help</h4>

                                <i class="fas fa-plus" id='hplus'></i>
                                <i class="fas fa-times" id='htimes'></i>
                            </div>
                            <ul id='contact_us' className='fnone' className='fnone'>
                                <li><a href="#">contact us</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>

                        </div>

                        <div className="bProducts libox" onClick={fName1} id="wallet">
                            <div id="products" className='iconplus'>

                                <h4>products</h4>

                                <i class="fas fa-plus" id='pplus'></i>
                                <i class="fas fa-times" id='ptimes'></i>
                            </div>
                            <ul id='productsName' className='fnone'>

                                <li><a href="#">wallet</a></li>
                                <li><a href="#">Entwicklers</a></li>
                                <li><a href="#">EaseWedding</a></li>
                            </ul>
                        </div>
                        <div className="bCompany libox" onClick={fName2} id='company'>
                            <div id="company" className='iconplus'>

                                <h4>company</h4>

                                <i class="fas fa-plus" id='cplus'></i>
                                <i class="fas fa-times" id='ctimes'></i>
                            </div>
                            <ul id='about_the_begining' className='fnone'>

                                <li><a href="#">about-the nu begining</a></li>
                                <li><a href="#">company news</a></li>
                                <li><a href="#">carrier oportunies</a></li>
                                <li><a href="#">investers</a></li>
                                <li><a href="#">team</a></li>
                                <li><a href="#">responsible disclosure</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="box">


                        <div className="bLogo">

                            <div className="contactIcon">
                                <p id="follow">follow us</p>
                                <br></br>
                                <div className="icon">


                                    <i className="fab fa-facebook"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-linkedin"></i>
                                </div>
                            </div>
                            <div className="img">
                                <img src={pic} alt="" />
                            </div>


                        </div>
                    </div>
                    <div className="address">
                        <p>
                            <h4 id="regis">registered address</h4>
                        </p>
                        <div className="add">
                            <p>vinamara kand gomatinagar</p>
                            <p>lucknow utter pradesh</p>
                            <p>india-226010</p>
                        </div>

                    </div>

                </div>
                <div className="copyright">
                    <p> &copy;2021 NuBeginings india Pvt .Ltd All rights reserved</p>
                    <p className="privacy">Privacy Policy|Terms of Use| Legal|Site Map </p>
                </div>
            </section>
            <br></br>
            <br></br>
            <br></br>

        </footer>
    </>;
};
export default Footer;
