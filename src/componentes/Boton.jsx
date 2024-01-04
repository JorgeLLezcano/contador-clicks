import React from 'react'
import '../Stylesheets/Boton.css'


function Boton({texto, esBotonClick, manejaClick}){
    return(
        <button
        className={ esBotonClick? 'boto-click': 'boton-reiniciar' }
        onClick={manejaClick}>
            {texto}
        </button>
    )
}

export default Boton