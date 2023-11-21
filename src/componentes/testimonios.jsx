import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

function Testimonio(props) {
    return (
    <div className="">
        <div className="container">
            <img className="testimonio-imagen roudend-circle" src={require(`../imagenes/${props.nombreimagen}.jpeg`)} alt="Foto"/>
            <p className="testimonio-texto centrada"> {props.texto} </p>
            <div className="testimonio-info">
                <h5 className="cliente"> {props.nombre} </h5>
                <p className="cargo"> {props.compañeros} de la Universidad </p>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden"> Anterior </span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden"> Siguiente </span>
            </button>
        </div>
    </div>      
    );
}

export default Testimonio;