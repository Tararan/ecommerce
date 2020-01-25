import React from 'react';

import FormGroup from '../form-group/form-group.component';
import Button from '../button-component/button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2>
                    I don't have an account
                </h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up__form" onSubmit={this.handleSubmit}>
                    <FormGroup
                        name="displayName"
                        type="text"
                        handleChange={this.handleChange}
                        value={displayName}
                        label="display name"
                        required
                    />
                    <FormGroup
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={email}
                        label='email'
                        required
                    />
                    <FormGroup
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={password}
                        label="Password"
                        required
                    />
                    <FormGroup
                        name="confirmPassword"
                        type="password"
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        label="Confirm password"
                        required
                    />
                    <div className="button__wrapper">
                        <Button type="submit" text="Sign Up" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;