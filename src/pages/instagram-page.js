import React, { Component } from 'react';
import logo from '../images/IMG_0364.jpg';

export default class Instagrammer extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={logo} className="App-logo blurred" alt="logo" />
                </header>
            </div>
        );
    }
}