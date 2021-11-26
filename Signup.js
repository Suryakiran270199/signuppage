import React from 'react';
import './Signup.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Row, Col, } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import sidelogo from './sidelogo.jpeg';
import headlogo from './headlogo.jpg';


function Signup() {

    const [data, setdata] = useState({
        name: "",
        email: "",
        password: "",
        checkbox: false,
    })

    const changeHandler = (e) => {
        const name = e.target.name;
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setdata({
            ...data,
            [name]: value
        })
    }

    const subimtHandler = (e) => {
        e.preventDefault();
        console.log(data)

        let sdata = {
            username: data.name,
            useremail: data.email,
            userpswd: data.password,
            usercheck: data.checkbox
        }

        axios.post("https://reactdata-6b0f8-default-rtdb.firebaseio.com/signup.json", sdata).then(responce => {
            console.log(sdata)
        }).catch(error => {

        })

    }
    return (
        <div className="layout">
            <div className="inside-layout">
                <Row>
                  <Col>
                        <div className="logo-layout">
                            <img src={sidelogo} className="logo" alt="logo is loading ...." />
                        </div>
                    </Col>
                    <Col>
                        <div className="col-signup">
                            <img className="head-logo" src={headlogo} alt="loading...."/>

                            <div className="sign-up-layout">
                                <h1>Sign Up</h1>
                                <h5>Sign Up With</h5>
                            </div>

                            <Row className="sfr">
                                <Col>
                                    <button className="signup-fields" > <FcGoogle size="20px" /> Sign up with google</button>
                                </Col>
                                <Col>
                                    <button className="signup-fields" > <FaFacebook color="blue" size="20px" /> Sign up with facebook</button>
                                </Col>
                            </Row>

                            <form onSubmit={subimtHandler}>
                                <Row>
                                    <Col>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputEmail1">Name</label>
                                            <input type="name"
                                                className="form-control"
                                                name="name"
                                                aria-describedby="emailHelp"
                                                value={data.name}
                                                onChange={changeHandler}
                                            />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputPassword1">Email</label>
                                            <input type="email"
                                                className="form-control"
                                                name="email"
                                                value={data.email}
                                                onChange={changeHandler}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="form-group text-left">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password"
                                            style={{width:"630px"}}
                                            className="form-control"
                                            name="password"
                                            value={data.password}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                </Row>
                                <Row>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="checkbox"
                                                name="checkbox"
                                                checked={data.checkbox}
                                                onChange={changeHandler}
                                                className="form-check-input"
                                            />
                                            I've read and agree with Terms of Service and our Privacy Policy
                                        </label>
                                    </div>
                                </Row>
                                <Row>
                                    <button type="submit" className="btn"> Get Started</button>
                                </Row>

                            </form>
                            <Row className="row-last">
                                <span>Already have an acount? <a href="xjkfvhfkh">Sign in</a></span>
                            </Row>

                        </div>
                    </Col>
                </Row>

            </div>



        </div>
    );
}
export default Signup;
