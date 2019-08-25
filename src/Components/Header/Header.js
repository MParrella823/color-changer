import React from 'react';
import './Header.css';

export class Header extends React.Component{
    render(){
        return (
            <span id="headerSpan">
                <h1>Random Color Generator</h1>
            </span>
        );
    }
}