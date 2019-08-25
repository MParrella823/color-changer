import React from 'react';
import { Button } from '../Button/Button';
import './RandomPicker.css';

export class RandomPicker extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            color: ['A','B', 'C', 1, 2, 3]
        };
        this.handleClick = this.handleClick.bind(this);  
    }

    generateColor() {
        const random = [];
        const values = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < 6; i++){
            random.push(values[Math.floor(Math.random() * values.length)]);
        }
        return random;
    }

    formatColor(arr){
        return '#' + arr.join('') + '';
    }

    applyColor(){
        const color = this.formatColor(this.state.color);
        document.body.style.background = color;
    }

    componentDidMount() {
        this.applyColor();
      }
    
    componentDidUpdate(prevProps, prevState) {
        this.applyColor();
      }

    handleClick(){
        this.setState({
            color: this.generateColor()           
        });
    }

    render(){
        return (
            <div id="content">
                <h1>Current color: {this.formatColor(this.state.color)}</h1>                
                <Button onClick={this.handleClick} />
            </div>
        );
    }
}