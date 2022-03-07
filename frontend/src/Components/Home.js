import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Style/Home.css";

// import pic1 from "../images/homeback.jpg";
// import pic2 from "../images/dha-karachi.jpg";
// import pic3 from "../images/imag2.jpg";
// import pic4 from "../images/imag3.jpg";

import { Link } from "react-router-dom";
import Footer from "./Footer";
function Home() {
  const [City,Setcity]=useState();
    const [Sector,Setsector]=useState();
    const [Type,Settype]=useState();
    const [Size,Setsize]=useState();
    const [Price,Setprice]=useState();
    return (
      <React.Fragment>
        <div className="flex">
          <div className="container-fuild body">
            <div className="container-fluid secondCon">
              <h1 className="Title2">
                Property Ticket
                <p className="para">Invest in the Future you believe in</p>
              </h1>
              <ul className="ul">
                <Link className="Link" to="/home">
                  <li className="li">Home</li>
                </Link>
                <Link className="Link" to="/areaguides">
                  <li className="li">Area Guide</li>
                </Link>
                <Link className="Link" to="/aboutus">
                  <li className="li">About us</li>
                </Link>
                <Link className="Link" to="/Map">
                  <li className="li">Map</li>
                </Link>
                <Link className="Link" to="/signin">
                  <li className="li">Log out</li>
                </Link>
              </ul>
              <div className="para2">
                Built And Diversify Your Real Estate Property. Meet Property
                Ticket,a Secure Simple Real Estate Management Platform
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="box">
                      find Your Dream Home
                      <p className="boxpara">
                        We Provide Various Types Of Houses From Cheapest to
                        Premium
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="box">
                      <i className="bi bi-shield-fill white"></i>Our Best Home
                      Guarantee
                      <p className="boxpara">
                        If You buy A House You Will Get Special Guarantee
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="box">
                      <i className="bi bi-lock-fill white"></i>100% Safe
                      <p className="boxpara">
                        Your Transaction Will Always be kept Confidential and
                        safe using the technology of blockchain
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3  ">
                    <div className="box">
                      <i className="bi bi-heart-fill white"></i>Facilities
                      <p className="boxpara">
                        Buy Your House Without Any Kind of Difficulty
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row form">
                  <h4 className="searching">What do you searching for?</h4>
                  <select className="input" onChange={e=>Setcity(e.target.value)}>
                  <option value='' disabled selected>Select City</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Islamabad">Islamabad</option>
                    {/* <option value="2">Rent</option> */}
                  </select>
                  <input type='text' disabled placeholder='Bahria Town' className="input" />
                  <select className="input" onChange={e=>Setsector(e.target.value)}>
                  <option value='' disabled selected>Select Sector</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                  </select>
                  <select className="input" onChange={e=>Settype(e.target.value)}>
                  <option value='' disabled selected>Select Type</option>
                            <option value="House">House</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Plot">Plot</option>
                  </select>
                  <select className="input" onChange={e=>Setsize(e.target.value)}>
                  <option value='' disabled selected>Select Size</option>
                            <option value="5 ">5 marla</option>
                            <option value="10">10 marla</option>
                            <option value="15">15 marla</option>
                            <option value="1">1 kanal</option>
                            <option value="1.5">1.5 kanal</option>
                  </select>
                  <select className='input'onChange={e=>Setprice(e.target.value)}>
                            <option value='' disabled selected>Select Price</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                            <option value='1,00,00,000'>1,00,00,000</option>
                        </select>
                        <a className="Findbtn" href={`/searchdata?city=${City}&sector=${Sector}&type=${Type}&size=${Size}&price=${Price}`}>Find</a>
                 {/* <button className="Findbtn"><a target={'_blank'} href={`/searchdata?area=${area}&location=${location}&size=${size}&type=${type}&price=${price}`}>Find</a></button> */}
                </div>
              </div>
              <div className="container paras">
                <h4 className="para3">What we are ?</h4>
                <br />
                <p className="para4">
                  Our vision is provide the client the secure platform to
                </p>
                <br />
                <p className="para4">
                  buy or rent property and smooth online transaction using the
                </p>
                <br />
                <p className="para4">
                  rising technology of <span>Block Chain.</span>
                </p>
                <br />
              </div>
              <div className="container paras2">
                <h4 className="para3">What do we offer?</h4>
                <br />
                <p className="para4">
                  We offer variety of commercial, residential, industrial plots
                </p>
                <br />
                <p className="para4">
                  houses and projects to our client within the capacity of
                </p>
                <br />
                <p className="para4">affordability and accessibility.</p>
                <br />
              </div>
              <br />
              <div className="container2 paras2">
                <h2 className="para5  ">Have Any Query?</h2>
                <input type="text" className="input2" placeholder="FirstName" />
                <input type="text" className="input2" placeholder="LastName" />
                <input type="email" className="input2" placeholder="Email" />
                <input
                  type="email"
                  className="input3"
                  placeholder="Your Question..."
                />
              </div>
              <Footer/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
export default Home