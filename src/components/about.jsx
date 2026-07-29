import { useScrollAnimation } from '../hooks/useIntersectionObserver';

export function About() {
    // Obtenemos la función para enlazar las refs
    const animateRef = useScrollAnimation();

    return (
        <div className="about-article" id="about">
            <div className="svg-bottom">
                <img className="background-svg" src="/portfolio/assets/ondassub.svg" alt="" />
            </div>

            {/* Asignamos la ref y especificamos qué clase agregar al intersectar */}
            <div
                className="poster hidden"
                ref={animateRef}
                data-animation-class="setshow"
            >
                <h1>Gonzalo Cabrera</h1>
                <div className="redes-contacto">
                    <a href="https://www.linkedin.com/in/gonzalo-cabrera-battistessa-858066128" target="_blank" className="item-skill" rel="noreferrer">
                        <img src="/portfolio/assets/linkedin-svg.svg" alt="" style={{ width: "30px" }} />
                        <p>Linkedin</p>
                    </a>
                    <a href="https://github.com/gonzalocabrera1990" target="_blank" className="item-skill" rel="noreferrer">
                        <img src="/portfolio/assets/github-svg.svg" alt="" style={{ width: "30px" }} />
                        <p>Github</p>
                    </a>
                    <a href="/portfolio/contact/email" className="item-skill">
                        <img src="/portfolio/assets/google-gmail-svg.svg" alt="" style={{ width: "30px" }} />
                        <p>Gmail</p>
                    </a>
                    <a href="https://youtu.be/7ih9IcGhG6Q" target="_blank" className="item-skill" rel="noreferrer">
                        <img src="/portfolio/assets/youtube-svg.svg" alt="" style={{ width: "30px" }} />
                        <p>Youtube</p>
                    </a>
                </div>
                <div className="about-descripption">
                    <p>
                        Con formación técnica en administración contable, he buscado estos últimos años redireccionar mi carrera hacia donde he encontrado mi pasión: la programación.
                    </p>
                    <p>
                        Me he capacitado en JavaScript, tanto como desarrollador frontend y backend, y en diferentes herramientas para lograr ser programador web.
                    </p>
                    <p>
                        Estoy en la búsqueda de adquirir experiencia en posiciones que me permitan mejorar como profesional de la programación, aprendiendo día a día el oficio de esta profesión.
                    </p>
                </div>
            </div>

            {/* Asignamos la misma ref pero con una clase diferente */}
            <div
                className="imagen hiddenImg"
                ref={animateRef}
                data-animation-class="showImg"
            >
                <img src="/portfolio/assets/profile10.png" alt="" />
            </div>
        </div>
    );
}