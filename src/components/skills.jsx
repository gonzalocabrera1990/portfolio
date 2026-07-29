import { useScrollAnimation } from '../hooks/useIntersectionObserver';

export function SkillList() {
    const animateRef = useScrollAnimation();
    const timelineData = [
        // {
        //     id: 1,
        //     text: "🏦 Con formación técnica en administración contable, he buscado estos últimos años redireccionar mi carrera hacia donde he encontrado mi pasión: la programación. ⚙️"
        // },
        // {
        //     id: 2,
        //     text: "🟨 ⚛️ Me he capacitado en JavaScript, tanto como desarrollador frontend y backend, y en diferentes herramientas para lograr ser programador web. 🖥️"
        // },
        // {
        //     id: 3,
        //     text: "💪 Estoy en la búsqueda de adquirir experiencia en posiciones que me permitan mejorar como profesional de la programación, aprendiendo día a día el oficio de esta profesión. 💡"
        // },
        // {
        //     id: 4,
        //     text: "☁️ Para un futuro en el desarrollo de software, donde pueda aplicar mis habilidades y seguir creciendo profesionalmente."
        // }
        {
            id: 1,
            title: "Diplomatura en Desarrollo de Software | 2025 - 2026 | UTN.",
            text: "Arquitectura y Sistemas de Datos - Programación I - Sistemas de Procesamiento de Datos - Programación II."
        },
        {
            id: 2,
            title: "Argentina Programa 4.0 | 2023 | Segunda Etapa | UTN.",
            text: "Desarrollo de Aplicaciones Web en React."
        },
        {
            id: 3,
            title: "Argentina Programa 4.0 | 2022 | Primera Etapa | UTN.",
            text: "Introducción a la Programación y Desarrollo Web."
        },
        {
            id: 4,
            title: "Tecnicatura Superior en Administración Contable | Instituto Superior N° 87 - Ayacucho | 2012 - 2014.",
            text: "Contabilidad General - Contabilidad Impositiva - Costos y Presupuestos - Leyes Impositivas."
        }
    ];
    return (
        <div className='skill-list' id='estudios'>
            <h2>Estudios</h2>
            <section className="timeline">
                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {timelineData.map((item, index) => (
                        <article
                            key={item.id}
                            className={`timeline-item ${index % 2 === 0 ? "left" : "right"
                                }`}
                        >
                            <div className="timeline-dot">
                                <span>{item.id}</span>
                            </div>

                            <div className="timeline-card">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <h2 id='skills'>Skills</h2>
            <div className="skills">
                <div className="skills-type frontend hidden" ref={animateRef} data-animation-class="setshow">
                    <h3>Frontend</h3>
                    <div className="skills-group" >
                        <div className="item-skill">
                            <img src={'/portfolio/assets/html.svg'} alt="" style={{ width: "54px" }} />
                            <p>HTML</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/css.svg'} alt="" style={{ width: "54px" }} />
                            <p>CSS</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/javascript.svg'} alt="" style={{ width: "54px" }} />
                            <p>JavaScript</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/typescript-official-svgrepo-com.svg'} alt="" style={{ width: "54px" }} />
                            <p>TypeScript</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/bootstrap.svg'} alt="" style={{ width: "54px" }} />
                            <p>Bootstrap</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/reactjs.svg'} alt="" style={{ width: "54px" }} />
                            <p>ReactJS</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/react-svgrepo-com.svg'} alt="" style={{ width: "54px" }} />
                            <p>Redux</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/angular.svg'} alt="" style={{ width: "54px" }} />
                            <p>Angular</p>
                        </div>
                    </div>
                </div>
                <div className="skills-type backend  hidden" ref={animateRef} data-animation-class="setshow">
                    <h3>Backend</h3>
                    <div className="skills-group" >
                        <div className="item-skill">
                            <img src={'/portfolio/assets/node.svg'} alt="" style={{ width: "54px" }} />
                            <p>NodeJS</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/express-svgrepo-com.svg'} alt="" style={{ width: "54px" }} />
                            <p>ExpressJS</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/mongo-svgrepo-com.svg'} alt="" style={{ width: "54px" }} />
                            <p>MongoDB</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/mongoose.svg'} alt="" style={{ width: "54px" }} />
                            <p>Mongoose</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/socket-io.svg'} alt="" style={{ width: "54px" }} />
                            <p>Socket.IO</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/django.svg'} alt="" style={{ width: "54px" }} />
                            <p>Django</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/postgresql.svg'} alt="" style={{ width: "54px" }} />
                            <p>PostgreSQL</p>
                        </div>
                    </div>
                </div>
                <div className="skills-type mobile  hiddenImg" ref={animateRef} data-animation-class="setshow">
                    <h3>Mobile</h3>
                    <div className="skills-group" >
                        <div className="item-skill">
                            <img src={'/portfolio/assets/native-svgrepo-com .svg'} alt="" style={{ width: "54px" }} />
                            <p>React Native</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/expo-svgrepo-com.svg'} alt="" style={{ width: "54px" }} />
                            <p>Expo Go</p>
                        </div>
                    </div>
                </div>
                <div className="skills-type tools  hiddenImg" ref={animateRef} data-animation-class="setshow">
                    <h3>Tools</h3>
                    <div className="skills-group" >
                        <div className="item-skill">
                            <img src={'/portfolio/assets/git.svg'} alt="" style={{ width: "54px" }} />
                            <p>GIT</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/postman-icon-svgrepo-com.svg'} alt="" style={{ width: "54px" }} />
                            <p>Postman</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/docker.svg'} alt="" style={{ width: "54px" }} />
                            <p>Docker</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/antigravity.svg'} alt="" style={{ width: "54px" }} />
                            <p>Antigravity</p>
                        </div>
                    </div>
                </div>
                <div className="skills-type learning hiddenImg" ref={animateRef} data-animation-class="setshow">
                    <h3>Aprendiendo</h3>
                    <div className="skills-group" >
                        <div className="item-skill">
                            <img src={'/portfolio/assets/nextjs-fill-svgrepo-com.svg'} alt="" style={{ width: "54px" }} />
                            <p>NextJS</p>
                        </div>
                        <div className="item-skill">
                            <img src={'/portfolio/assets/python-svgrepo-com.svg'} alt="" style={{ width: "54px" }} />
                            <p>Python</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="svg-top">
                <img className='background-svg' src={'/portfolio/assets/c.svg'} alt="" />
            </div>
        </div>
    )
}