import './App.css';
import "./estilos/componentes.css";
import LogoBarra from "./logo.svg";
import FotoPrincipal from "./imagenes/desarrollador-ejemplo3.svg";
import LogoHTML from "./imagenes/logos/html.svg";
import LogoCSS from "./imagenes/logos/css.svg";
import LogoJS from "./imagenes/logos/js.svg";
import CertiJS from "./imagenes/certi-js.jpg";
import CertiCSS from "./imagenes/certi-css.jpg";
import CertiHTML from "./imagenes/certi-html.jpg";
import Computadora from "./imagenes/computadora.png";
import Habilidad from "./componentes/habilidades.jsx";
import Proyecto from './componentes/proyectos.jsx';
import Testimonio from './componentes/testimonios.jsx';
import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as Bootstrap from 'bootstrap';

function App() {
    useEffect(() => {
        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        var toastList = toastElList.map(function (toastEl) {
            return new Bootstrap.Toast(toastEl)
        })
        toastList.forEach(toast => toast.show()); 
        window.addEventListener("scroll", function() {
            var footer = document.querySelector("footer"); 
            var position = footer.getBoundingClientRect();
            if(position.top < window.innerHeight && position.bottom >= 0) {
                document.querySelector(".toast").style.display = "none"; 
            } else {
                document.querySelector(".toast").style.display = "block";
            }
        });
    }, []);
    const misTestimonios = [
        <Testimonio
        nombreimagen = "beatriz"
        texto = "Ricardo es un buen estudiante en ingeniería de sistemas siendo apasionado y comprometido con su área de estudio. Posee una sólida base de conocimientos técnicos y una habilidad excepcional para resolver problemas. Se capacita en el aprendizaje constante y se impulsa a investigar las nuevas tendencias y tecnologías en el campo. Además, es un líder de grandes proyectos."
        nombre = "Beatriz"
        compañeros = "Compañera"
        />,
        <Testimonio
        nombreimagen = "edgar"
        texto = "Ricardo es un estudiante con características positivos, siendo leal, atento, dedicado, responsable y hábil en las diferentes actividades y materias que le presentan. Todo esto lo ha llegado a demostrar dentro de su carrera. Posee un buen conocimiento, ello le ha permitido a desenvolverse en los cursos e inclusive crear su propio portafolio web, el cuál llega a ser su CV de todos sus proyectos creados."
        nombre = "Edgar"
        compañeros = "Compañero"
        />,
        <Testimonio
        nombreimagen = "george"
        texto = "Es un buen estudiante y super responsable. Por el tiempo que lo conozco puedo decir que le gusta aprender demasiado y no es para nada conformista. Es un gran amigo y super destacable con lo que aprende."
        nombre = "George"
        compañeros = "Compañero"
        />,
        <Testimonio
        nombreimagen = "jhony"
        texto = "Tu responsabilidad y el deseo de hacer todo muy bien son atributos muy valiosos en la carrera de ingeniería de sistemas. Te asegurarás de completar tus tareas y proyectos de manera meticulosa, prestando atención a los detalles y garantizando un trabajo de alta calidad. Esto te destacará entre tus compañeros y te permitirá obtener resultados sobresalientes en tus estudios."
        nombre = "Jhony"
        compañeros = "Compañero"
        />,
        <Testimonio
        nombreimagen = "jesibeth"
        texto = "Es un super chico y muy estudioso. Ha aprendido varias cosas por su cuenta y no se queda con lo que le enseña la uni. Es super autodidacta y le gusta mucho la técnologia por lo que me cuenta y me demuestra con el avance de sus proyectos y cosas similares."
        nombre = "Jesibeth"
        compañeros = "Compañera"
        />,
        <Testimonio
        nombreimagen = "samir"
        texto = "Un gran amigo, sin duda alguna, es alguien que se destaca muy bien y me enseña nuevas cosas que aprende. Feliz de tener a un amigo como él, fuera de todo, alguien que le gusta aprender dia a dia porque sabe que la técnologia no tiene un límite y se va actualizando diariamente"
        nombre = "Samir"
        compañeros = "Compañero"
        />,
        <Testimonio
        nombreimagen = "orlando"
        texto = "Gran colega de estudios, muy afortunado de saber que tengo un amigo muy destacable en la informatica para su edad y ciclo que va. Estoy super seguro que cualquier trabajo donde vaya lo dará todo y si algo no sabe estoy seguro que lo va aprender rápido."
        nombre = "Orlando"
        compañeros = "Compañero"
        />
    ];
    const [certificado, setCertificado] = useState(CertiJS); 
    const cambiarCertificadoHTML = () => {
        setCertificado(CertiHTML);
    }
    const cambiarCertificadoCSS = () => {
        setCertificado(CertiCSS);
    }
    const cambiarCertificadoJS = () => {
        setCertificado(CertiJS);
    }
return (
<div className="App">
    <nav className="navbar navbar-expand-md bg-body-tertiary" id="navbar">
        <div className="container-fluid barra-nav">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <img className="h-100" src={LogoBarra} alt="Ricardo Goicochea"/>
            <div className="container-fluid collapse navbar-collapse" id="navbar-toggler">
                <ul className="navbar-nav d-flex justify-content-center align-items-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="#SobreMi"> Sobre Mí </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Proyectos"> Proyectos </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Certificados"> Certificados </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Testimonios"> Testimonios </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contacto"> Contacto </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <section className="container-fluid contenedor-saludo">
        <img src={FotoPrincipal} alt='Foto'/>
        <h1> Ricardo Goicochea </h1>
        <h2> Estudiante de Ingeniería de Sistemas e Informática </h2>
    </section>
    <section className='container-fluid contenedor-computadora'>
        <img src={Computadora} alt='Foto Tecnologia'/>
    </section>
    <section className='container-fluid contenedor-historia' id='SobreMi'>
        <div className='row'>
            <div className='col-12 col-md-4 imagen'> 
                <img src={FotoPrincipal} alt='Foto'/>
            </div>
            <div className='col-12 col-md-8 texto'> 
                <h2> Conoce a Ricardo Goicochea </h2>
                <p> Soy estudiante de Ingeniería de Sistemas de la Universidad Tecnológica del Perú. Me considero una persona súper directa, sencilla y empática. Soy autodicta y para nada conformista. Me gusta aprender a diario y trato de aprovechar mi tiempo libre tomando cursos en línea o creando nuevos proyectos. Me gusta actualizarme y conocer las nuevas tendencias tecnológicas. Como pasa tiempos, muy aparte de tomar cursos, me gusta caminar por la playa y poder oír la naturaleza. Por otro lado, ver películas y series de acción, romance entre otras cosas. También, oír música y pasar demasiado tiempo con mi familia. Me gusta aprender día a día porque sé que la tecnológia avanza muy rápido y quiero estar actualizado. </p>
            </div>
        </div>
    </section>
    <section className='container-fluid contenedor-habilidades'>
        <div className="container subcontenedor-habilidades">
            <div className="row">
                <Habilidad
                claseIcono = "bi bi-laptop"
                nombre = "Desarrollo Web"
                texto = "He adquirido habilidades en lenguajes de programación especializados en desarrollo web a través de plataformas de aprendizaje en línea como Udemy, Youtube y Edutin. Mi dominio de estos lenguajes me permite crear sitios web interactivos y atractivos. Asimismo, sitios webs responsivos y dinámicos."
                children={["HTML", "CSS", "JavaScript", "React", "BootStrap", "Angular"]}
                />
                <Habilidad
                claseIcono = "bi bi-lightbulb"
                nombre = "Lenguajes"
                texto = "He adquirido competencias en una variedad de lenguajes de programación, así como en la realización de consultas y el uso de software para la gestión y recopilación de datos. Estos conocimientos los he obtenido a través de plataformas digitales como Udemy y también durante mi formación universitaria."
                children={["Java", "C", "C++", "MySQL", "Power BI", "Excel"]}
                />  
                <Habilidad
                claseIcono = "bi bi-book"
                nombre = "Estudiante"
                texto = "A lo largo de mi formación académica, he adquirido una serie de habilidades que aplico diariamente en la realización de proyectos grupales. Mi capacidad para trabajar en equipo y contribuir con ideas innovadoras ha sido una constante en mi desempeño académico y profesional. De igual modo, estar actualizado de las redes."
                children={["Liderazgo", "Responsabilidad", "puntualidad", "Solidaridad"]}
                /> 
            </div>
        </div>
    </section>
    <section className='container-fluid contenedor-principal-proyectos' id='Proyectos'>
        <h2> Mis Proyectos </h2>
        <h3> Presento una selección de mis proyectos más destacados, cada uno de ellos refleja mi evolución y crecimiento en el ámbito de la programación. Estos proyectos son testimonio de mi compromiso con el aprendizaje continuo y mi pasión por la creación de soluciones innovadoras. </h3>
        <div className='container contenedor-proyecto'>
            <div className='row'>
                <Proyecto
                titulo = "Juego de Preguntas"
                linkGit = "https://github.com/RicardoAG0312/JuegoPreguntas"
                linkApp = "https://ricardoag0312.github.io/JuegoPreguntas/"
                />
                <Proyecto
                titulo = "Calculadora"
                linkGit = "https://github.com/RicardoAG0312/react-calculadora"
                linkApp = "https://ricardoag0312.github.io/react-calculadora/"
                />
                <Proyecto
                titulo = "Presupuesto Web"
                linkGit = "https://github.com/RicardoAG0312/PresupuestoWeb"
                linkApp = "https://ricardoag0312.github.io/PresupuestoWeb/"
                />
                <Proyecto
                titulo = "Portafolio"
                linkGit = "https://github.com/RicardoAG0312/portafolio-react"
                linkApp = "https://ricardoag0312.github.io/portafolio-react/"
                />
                <Proyecto
                titulo = "Contador"
                linkGit = "https://github.com/RicardoAG0312/contadorclics"
                linkApp = "https://ricardoag0312.github.io/contadorclics/"
                />
                <Proyecto
                titulo = "Juego De Bombas"
                linkGit = "https://github.com/RicardoAG0312/JuegoBombas"
                linkApp = "https://ricardoag0312.github.io/JuegoBombas/"
                />
            </div>
        </div>
        <a href="https://github.com/RicardoAG0312?tab=repositories" target="_blank" rel="noopener noreferrer" className='masProyectos'>
            <button type="button" className="btn btn-info"> 
                Ver más proyectos 
                <i className="bi bi-arrow-right-circle-fill"></i>
            </button>
        </a>
    </section>
    <section id="Certificados" className='container-fluid contenedor-certificados'>
        <header> Certificados </header>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-4 logos'>
                    <img src={LogoHTML} alt="Logo HTML" className='img-fluid' id='logoHTML' onClick={cambiarCertificadoHTML}/>
                    <img src={LogoJS} alt="Logo JS" className='img-fluid' id='logoJS' onClick={cambiarCertificadoJS}/>
                    <img src={LogoCSS} alt="Logo CSS" className='img-fluid' id='logoCSS' onClick={cambiarCertificadoCSS}/>
                </div>
                <div className='col-12 col-md-8 certificados'>
                    <img src={certificado} alt="Certificado" className='img-fluid'/>
                </div>
            </div>
        </div>
        <a href="https://www.linkedin.com/in/ricardo-goicochea-oyarce-535103240/details/certifications/" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-info"> 
                Ver más certificados 
                <i className="bi bi-arrow-right-circle-fill"></i>
            </button>
        </a>
    </section>
    <section id="Testimonios" className="testimonios">
        <h2> Testimonios </h2>
        <h3> Testimonios de mis compañeros de la Universidad </h3>
        <div id="testimonios-carrusel" className="carousel carousel-dark">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div className="carousel-inner">
                {misTestimonios.map((testimonio, indice) => {
                    if (indice === 0) {
                        return (
                            <div key={indice} className='carousel-item active'>
                                {testimonio}
                            </div>                            
                        );
                    } else {
                        return (
                            <div key={indice} className='carousel-item'>
                                {testimonio}
                            </div>
                        );                       
                    }
                })}
            </div>
        </div>
    </section>
    <footer className="d-flex flex-column align-items-center justify-content-center" id='Contacto'>
        <img className="footer-logo" src={LogoBarra} alt="Logo de icono blanco"/>
        <p className="footer-texto text-center"> Aprendo todos los días </p>
        <div className="item iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
            <a href="https://twitter.com/RicardoG0312" target="_blank" rel="noopener noreferrer"> 
                <i className="icon fa-brands bi bi-twitter"></i>
            </a>    
            <a href="https://github.com/RicardoAG0312?tab=repositories" target="_blank" rel="noopener noreferrer"> 
                <i className="icon fa-brands bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ricardo-goicochea-oyarce-535103240/" target="_blank" rel="noopener noreferrer"> 
                <i className="icon fa-brands bi bi-linkedin"></i>
            </a>
            <a href="https://wa.me/51981012139" target="_blank" rel="noopener noreferrer"> 
                <i className="icon fa-brands bi bi-whatsapp"></i>
            </a>
            <a href="mailto: ricardo41216383@gmail.com" target="_blank" rel="noopener noreferrer"> 
                <i className="icon fa-brands bi bi-envelope-at-fill"></i>
            </a>
        </div>
        <div className="derechos-de-autor">
            Creado por Ricardo Goicochea (2024) &#169;
        </div>
    </footer>
    <div role="alert" aria-live="assertive" aria-atomic="true" className="toast" data-bs-autohide="false">
        <div className="toast-body">
            ¿Dudas o consultas? No dudes en contactarme
        </div>
        <div className="toast-header">
            <a href="https://wa.me/51981012139" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp me-1"></i>
                <strong className="me-auto"> WhatsApp </strong>
            </a>
        </div>
    </div>
</div>
);
}

export default App;
