import React from 'react';

export class ColorList extends React.Component{
    removeColor(){
        console.log('called!'); 
        this.props.colors.pop();
    }
    
    render() {     
        
        return (          
            <div>                
                <ul>
                  {this.props.colors.map((color) => <li key={color}>{color}</li>)}
                </ul>
            </div>            
            );
        }
     
}