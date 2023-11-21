import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../estilos/componentes.css";

function Habilidad({nombre, texto, claseIcono, children}) {
    return (
            <div className="columna col-12 col-md-4">
                <i className={claseIcono}> </i>
                <h1> {nombre} </h1>
                <p> {texto} </p>
                <div>
                    {children.map((child, index) => (
                        <span key={index} className="badge text-bg-primary"> {child} </span>
                    ))}
                </div>
            </div>
    );
}

export default Habilidad;