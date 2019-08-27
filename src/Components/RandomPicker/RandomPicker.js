import React from 'react';
import  Button  from '../Button/Button';
import './RandomPicker.css';
import { ColorList } from '../ColorList/ColorList';

export class RandomPicker extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            color: ['A','B', 'C', 1, 2, 3],
            colors: [],
        };
        this.handleClick = this.handleClick.bind(this);  
        this.addColor = this.addColor.bind(this);
        this.clearList = this.clearList.bind(this);
        this.removeLast = this.removeLast.bind(this);
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
    
    /* Generates random background color */
    handleClick(){
        this.setState({
            color: this.generateColor()           
        });
    }

    /* Will first check if color was already added to list, to prevent duplicates,
            if it wasn't, it will add the current color to the list */
    addColor(){        
        let duplicate = false;
        if (this.state.colors.length > 0){
            for(let i = 0; i < this.state.colors.length; i ++){
                if (this.formatColor(this.state.color) === this.state.colors[i])
                    duplicate = true;
            }
        }
        if (!duplicate){
            this.setState({
                colors: this.state.colors.concat(this.formatColor(this.state.color))
            }); 
        }       
    }

    /* Will clear the current list of saved colors */
    clearList(){
        this.setState({
            colors: []
        });
    }

    /* Will remove the last color added to the list */
    removeLast(){
      let newColors = this.state.colors.filter(color => color !== this.state.colors[this.state.colors.length-1]);
      this.setState({
          colors: newColors
      })
    }   

    render(){
        return (
            <div id="content">
                <h1>Current color: {this.formatColor(this.state.color)}</h1>
                <div id="buttonContainer">           
                    <Button onClick={this.handleClick} buttonText="Generate Color!"/>
                    <Button className="listButton" buttonText="Add to List" onClick={this.addColor} />
                    <Button className="clearButton" buttonText="Clear List" onClick={this.clearList} />
                    <Button className="removeLast" buttonText="Remove Last" onClick={this.removeLast} />
                </div>
                <h2>{this.state.colors.length} Saved Colors:</h2>
                <div id="containerDiv">               
                    <ColorList colors={this.state.colors}/>
                </div>      
            </div>
        );
    }
}