//Aquí van a unirse todos los componentes

import React, {Component} from 'react';
import Header from './Header';
import Board from './Board';
import imgs from './utils/CardDeckImg';
import buildCardDeck from './utils/buildCardDeck';

class Playground extends Component {

    render() {
        return(
       <div>
           <section>    
               <Header />
           </section>
           <section>
               <Board imgs={imgs}/>
           </section>    
       </div>
        )      
    }
}

export default Playground;