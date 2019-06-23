

import React, {Component} from 'react';
import './Board.css';
import Card from './Card';


class Board extends Component {
    constructor(props){
        super(props)
        this.state ={
            url: ''
        }
    }
    render() { 
          
        return (
            <section className="board">
                {
                    this.props.imgs.map((url,index) => <Card src={url} alt={'Img number' + (index + 1)} key={index} />)
                }           
            </section>
        );
   }
}

export default Board