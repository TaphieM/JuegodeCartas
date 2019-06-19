//Aquí van a unirse todos los componentes

import React, {Component} from 'react';
import Header from './Header';


class Playground extends Component {
    render() {
        return(
       <div>
           <article>
               <Header />
           </article>
       </div>
        )      
    }
}

export default Playground;