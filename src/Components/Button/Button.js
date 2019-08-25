import React from 'react';
import './Button.css';
export class Button extends React.Component{
    render() {
        return (
        <button onClick={this.props.onClick}>
            Click me!
        </button>);

    }
}