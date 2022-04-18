import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const socail = () => {
    // const [signInWithGoogle, user, loading, error] = 
    // useSignInWithGoogle(auth);
    // // const navigate = useNavigate();
    // let errorElement;
    // if (error) {
    //     errorElement =
    //         <div>
    //             <p className='text-danger'>Error: {error.message}</p>
    //         </div>

    // }
    // if (user) {
    //     navigate('/home');
    // }

    // return (
    //     <div>
    //         <Button onClick={() => signInWithGoogle()} variant="primary" type="submit">
    //             Google Sing In
    //         </Button>
    //         {errorElement}
    //     </div>
    // );
};

export default socail;