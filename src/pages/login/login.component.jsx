import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const LoginPage = () => (
    <div className="container">
        <div className="login">
            <SignIn />
            <SignUp />
        </div>
    </div>
);

export default LoginPage;
