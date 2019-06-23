//Aquí quiero mostrar el nombre del jugador, puntaje, intentos etc.
// render método obligatorio que define cual va a ser el resultado en pantalla
// React se importa para cuando se usa JSX
    
import React, {Component} from 'react';
import './Header.css';


class Header extends Component {
    render() { 
        return (
            <header>
                <div className="title">Memorama</div>
                <div className="attempts">Intentos:</div>
            </header>
        )
   }                                   
}

export default Header;