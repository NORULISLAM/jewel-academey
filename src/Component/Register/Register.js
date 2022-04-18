import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { getAuth } from 'firebase/auth';
import App from '../../App';

//   const auth = getAuth(App)

const Register = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth);



    // const emailRef = useRef('');
    // const passwordRef = useRef('');
    // const nameRef = useRef('');

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/register');
    }

    // if (user) {
    //     navigate('/home');
    // }
    if (error) {
        setError('right password please');
    }
    const handleRegister = event => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setEmail('');
                setPassword('')
                setName('')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

        event.preventDefault();


        // const email = emailRef.current.value;
        // const password = passwordRef.current.value;
        // const name = nameRef.current.value;

        // createUserWithEmailAndPassword(name, email, password);

    }
    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }


    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-primary text-center mt-4'>Please Register </h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Your Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="efgdfggfdw">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already an Account ? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Register;