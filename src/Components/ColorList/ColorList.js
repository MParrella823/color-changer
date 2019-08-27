import React from 'react';
import './ColorList.css';

export class ColorList extends React.Component{
    render() {     
        return (          
            <div id="listContainer">                
                <ul>
                  {this.props.colors.map((color) => <li key={color}>{color}</li>)}
                </ul>
            </div>            
            );
        }     
}