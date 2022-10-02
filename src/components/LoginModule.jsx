import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginModule = ({ show, handleClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const loginData = useSelector(state => state.rootReducer.addUser);
    console.log("loginData", loginData);
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    console.log("userData", userData);
    const { email, password } = userData;
    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value });
    };
    const onSubmit = () =>{
        let existUser =  loginData.find((item) =>
            (item.email === email && item.password === password)     
        );
        if(existUser){
            return navigate("/mobile");
        
        }
        else if(!existUser){
            setError("Invalide credentials entered");
        }
       
    };
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control {...register("email", { required: true })} type="email" placeholder="Enter email" onChange={handleChange}/>
                            <Form.Text className="text-muted ">
                                <p className="error_msg"> {errors.email && <span>This field is required</span>}</p>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control  {...register("password", { required: true })} type="password"  placeholder="Password" onChange={handleChange}/>
                            <Form.Text className="text-muted error_msg">
                                <p className="error_msg"> {errors.password && <span>This field is required</span>} </p>
                            </Form.Text>
                        </Form.Group>
                        <p className="error_msg">{error}</p>
                        <Button variant="primary" type="submit">
                Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
            Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
LoginModule.propTypes = {
    show: PropTypes.any,
    handleClose: PropTypes.func,
};

export default LoginModule;
