import React from 'react';

import FormGroup from '../form-group/form-group.component';
import Button from '../button-component/button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>
                    I already have an account
                </h2>
                <span>Sign in with your email and password</span>
                <form className="sign-in__form" onSubmit={this.handleSubmit}>
                    <FormGroup
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormGroup
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                        required
                    />
                    <div className="button__wrapper">
                        <Button type="submit" text="submit" />
                        <Button onClick={signInWithGoogle} isGoogleSignIn text="Sign In With Google" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;