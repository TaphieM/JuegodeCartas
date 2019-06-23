import React, {Component} from 'react';
import './Card.css';


class Card extends Component {
  
    render() {
         
        return (
            <div>
              <img className="card" alt={this.props.alt} src={this.props.src}/> 
            </div>
        );  
   };                                   
};

export default Card;