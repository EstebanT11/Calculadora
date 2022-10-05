import React from "react";
import '../estilo-componentes/reset.css';

const Reset = (props) => {
    return(
        <div className="reset" onClick={props.handleClick}>
            RESET
        </div>
    )
}

export default Reset;