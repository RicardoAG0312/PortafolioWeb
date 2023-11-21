import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FotoFondo from "../imagenes/proyecto.png";
import "../estilos/proyectos.css";

function Proyecto(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
                <img src={FotoFondo} alt="Logo"/>
                <div className="overlay">
                    <p> {props.titulo} </p>
                    <div className="iconos-contenedor">
                        <a href={props.linkGit} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href={props.linkApp} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-laptop"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyecto;