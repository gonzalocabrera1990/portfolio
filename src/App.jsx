import { useEffect, useState } from 'react';
import './App.css';
import { DrawNavBar } from './components/drawnav'

function App() {
  const [colorHeader, setColorHeader] = useState(false)
  const [projects, setProjects] = useState([])
  const [modalApp, setModalApp] = useState(null)
  useEffect(() => {
    (function () {
      fetch('data.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(response => response.json())
        .then((myJson) => {
          setProjects(myJson)
        })
        .catch(error => console.log(error))
    })()

  }, [])


  const changeColor = () => {
    if (window.scrollY >= 200) {
      setColorHeader(true)
    } else {
      setColorHeader(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  const scrollObserver = new IntersectionObserver((data) => {
    data.forEach((screen) => {
      if (screen.isIntersecting) {
        screen.target.classList.add('setshow')
      } else {
        screen.target.classList.remove('setshow')
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((item) => { scrollObserver.observe(item) })

  const scrollObserverImg = new IntersectionObserver((data) => {
    data.forEach((screen) => {
      if (screen.isIntersecting) {
        screen.target.classList.add('showImg')
      } else {
        screen.target.classList.remove('showImg')
      }
    })
  })

  const hiddenImage = document.querySelectorAll('.hiddenImg');
  hiddenImage.forEach((item) => { scrollObserverImg.observe(item) })

  const addClassListEvent = () => {
    const drawEvent = document.getElementById('draw');
    drawEvent.classList.toggle("drawing");
  }

  const showView = (item) => {
    setModalApp(item)
  }

  const projectsMap = projects ? projects.map((item, index) => {
    return (
      <div key={index} className="projects-card" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => showView(item)} >
        <div className="projects-image" >
          <img className="projects-image-item" src={item.image} alt="" />
        </div>
        <div className="projects-name" >
          <h3>{item.name}</h3>
        </div>
        <div className="projects-description" >
          <span>{item.description}</span>
        </div>
      </div>
    )
  }) : null
  return (
    <div className="App" >
      <DrawNavBar />
      <header className={colorHeader ? 'header header-con-color' : 'header'} >
        <div className="navigation">
          <a className="logo">
            <img className="background-svg" src={'/assets/logo-img.png'} alt="" />
            <div className="logo-name">
              <h1>Gonzalo</h1>
              <h1>Cabrera</h1>
            </div>
          </a>
          <nav>
            <div className="links">
              <a href="#about" className="link-name">About</a>
            </div>
            <div className="links">
              <a href="#projects" className="link-name">Proyectos</a>
            </div>
            <div className="links">
              <a href="#skills" className="link-name">Skills</a>
            </div>
            <div className="links">
              <a href="#redes" className="link-name">Contacto</a>
            </div>
          </nav>
          <div className="burger" onClick={() => addClassListEvent()}>
            <img className="background-svg" src={'/assets/burger-svg.svg'} alt="" />
          </div>
        </div>
      </header>

      <div className="portada">
        <div className="custom-shape-divider-bottom-1691532494">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <h1 className="portada-title">
          Hola, soy Gonzalo!!! <br />
          Programador Web.
        </h1>
      </div>

      <div className="about-article" id='about'>
        <div className="svg-bottom">
          <img className="background-svg" src={'/assets/ondassub.svg'} alt="" />
        </div>

        <div className="poster hidden">
          <h1>Gonzalo Cabrera</h1>
          <div className='redes-contacto' >
            <a href="https://www.linkedin.com/in/gonzalo-cabrera-battistessa-858066128" target='_blank' className="item-skill" rel="noreferrer">
              <img src={'/assets/linkedin-svg.svg'} alt="" style={{ width: "30px" }} />
              <p>Linkedin</p>
            </a>
            <a href="https://github.com/gonzalocabrera1990" target='_blank' className="item-skill" rel="noreferrer">
              <img src={'/assets/github-svg.svg'} alt="" style={{ width: "30px" }} />
              <p>Github</p>
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcQsbbrXPfbBSllwbKdXddnPDVfpSRnTzPZNdbNSpbnpksQcTfDhNVFwGBWNkJSQdXWqq" target='_blank' className="item-skill" data-tooltip="gonzalocabrera1990@gmail.com" rel="noreferrer">
              <img src={'/assets/google-gmail-svg.svg'} alt="" style={{ width: "30px" }} />
              <p>Gmail</p>
            </a>
            <a href="https://youtu.be/7ih9IcGhG6Q" target='_blank' className="item-skill" rel="noreferrer">
              <img src={'/assets/youtube-svg.svg'} alt="" style={{ width: "30px" }} />
              <p>Youtube</p>
            </a>
          </div>
          <div className='about-descripption' >
            <p>
              Con formación técnica en administración contable, he buscado estos últimos años redireccionar mi carrera hacia donde he encontrado mi pasión: la programación.
            </p>
            <p>
              Me he capacitado en JavaScript, tanto como frontend y backend, y en diferentes herramientas para lograr ser programador web.
            </p>
            <p>
              Estoy en búsqueda de desarrollar experiencia en posiciones que me permitan mejorar como profesional de la programación aprendiendo día a día el oficio de esta profesión.
            </p>
          </div>
        </div>
        <div className="imagen hiddenImg">
          <img src={'/assets/profile10.png'} alt="" />
        </div>
      </div>
      <div className='projects' id='projects'>
        <h2>Proyectos</h2>
        <div className='projects-items'>
          {projectsMap}
        </div>

      </div>
      <div className='skill-list' id='skills'>
        <h2>Skills</h2>
        <div className="skills">
          <div className="skills-type frontend">
            <h3>Frontend</h3>
            <div className="skills-group" >
              <div className="item-skill">
                <img src={'/assets/html.svg'} alt="" style={{ width: "57px" }} />
                <p>HTML</p>
              </div>
              <div className="item-skill">
                <img src={'/assets/css.svg'} alt="" style={{ width: "57px" }} />
                <p>CSS</p>
              </div>
              <div className="item-skill">
                <img src={'/assets/javascript.svg'} alt="" style={{ width: "57px" }} />
                <p>JavaScript</p>
              </div>
              <div className="item-skill">
                <img src={'/assets/typescript-official-svgrepo-com.svg'} alt="" style={{ width: "57px" }} />
                <p>TypeScript</p>
              </div>
              <div className="item-skill">
                <img src={'/assets/bootstrap.svg'} alt="" style={{ width: "57px" }} />
                <p>Bootstrap</p>
              </div>
              <div className="item-skill">
                <img src={'/assets/reactjs.svg'} alt="" style={{ width: "57px" }} />
                <p>ReactJS</p>
              </div>
              <div className="item-skill">
                <img src={'/assets/react-svgrepo-com.svg'} alt="" style={{ width: "57px" }} />
                <p>Redux</p>
              </div>
              <div className="item-skill">
                <img src={'/assets/angular.svg'} alt="" style={{ width: "57px" }} />
                <p>Angular</p>
              </div>
            </div>
          </div>
          <div className="skills-type backend">
            <h3>Backend</h3>
            <div className="skills-group" >
              <div className="item-skill">
                <img src={'/assets/node.svg'} alt="" style={{ width: "57px" }} />
                <p>NodeJS</p>
              </div>
              <div className="item-skill">
                <img src={'/assets/express-svgrepo-com.svg'} alt="" style={{ width: "57px" }} />
                <p>ExpressJS</p>
              </div>
              <div className="item-skill">
                <img src={'/assets/mongo-svgrepo-com.svg'} alt="" style={{ width: "57px" }} />
                <p>MongoDB</p>
              </div>
              <div className="item-skill">
                <img src={'/assets/mongoose.svg'} alt="" style={{ width: "57px" }} />
                <p>Mongoose</p>
              </div>
              <div className="item-skill">
                <img src={'/assets/socket-io.svg'} alt="" style={{ width: "57px" }} />
                <p>Socket.IO</p>
              </div>
            </div>
          </div>
          <div className="skills-type mobile">
            <h3>Mobile</h3>
            <div className="skills-group" >
              <div className="item-skill">
                <img src={'/assets/native-svgrepo-com .svg'} alt="" style={{ width: "57px" }} />
                <p>React NAtive</p>
              </div>
              <div className="item-skill">
                <img src={'/assets/expo-svgrepo-com.svg'} alt="" style={{ width: "57px" }} />
                <p>Expo Go</p>
              </div>
            </div>
          </div>
          <div className="skills-type tools">
            <h3>Tools</h3>
            <div className="skills-group" >
              <div className="item-skill">
                <img src={'/assets/git.svg'} alt="" style={{ width: "57px" }} />
                <p>GIT</p>
              </div>

              <div className="item-skill">
                <img src={'/assets/postman-icon-svgrepo-com.svg'} alt="" style={{ width: "57px" }} />
                <p>Postman</p>
              </div>
            </div>
          </div>
          <div className="skills-type learning">
            <h3>Aprendiendo</h3>
            <div className="skills-group" >
              <div className="item-skill">
                <img src={'/assets/nextjs-fill-svgrepo-com.svg'} alt="" style={{ width: "57px" }} />
                <p>NextJS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="svg-top">
          <img className='background-svg' src={'/assets/c.svg'} alt="" />
        </div>
      </div>
      <div className="modal fade modal-xl" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          {modalApp ?
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">{modalApp.name}</h1>
                <a href={modalApp.link} target='_blank' className="item-skill" rel="noreferrer">
                  <img src={modalApp.iconWatch} alt="watch icon" style={{ width: "24px" }} />
                </a>
                <button type="button" className="btn-close color-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div>
                  {modalApp.descriptionDetail}
                </div>
                <div className='modal-media-images'>
                  {
                    modalApp.imageContent.map((img, index) => {
                      return (
                        <div key={index} className="modal-card" >
                          <div className="modal-image" >
                            <img className="projects-image-item" src={img} alt="" />
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
            : null
          }
        </div>

      </div>
      <footer id='redes'>
        <h2>
          ¿Quieres contactarme?
        </h2>
        <div className='redes-contacto' >
          <a href="https://www.linkedin.com/in/gonzalo-cabrera-battistessa-858066128" target='_blank' className="item-skill" rel="noreferrer">
            <img src={'/assets/linkedin-svg.svg'} alt="" style={{ width: "35px" }} />
            <p>Linkedin</p>
          </a>
          <a href="https://github.com/gonzalocabrera1990" target='_blank' className="item-skill" rel="noreferrer">
            <img src={'/assets/github-svg.svg'} alt="" style={{ width: "35px" }} />
            <p>Github</p>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcQsbbrXPfbBSllwbKdXddnPDVfpSRnTzPZNdbNSpbnpksQcTfDhNVFwGBWNkJSQdXWqq" target='_blank' className="item-skill" data-tooltip="gonzalocabrera1990@gmail.com" rel="noreferrer">
            <img src={'/assets/google-gmail-svg.svg'} alt="" style={{ width: "35px" }} />
            <p>Gmail</p>
          </a>
          <a href="https://youtu.be/oqHR4m2FGgI" target='_blank' className="item-skill" rel="noreferrer">
            <img src={'/assets/youtube-svg.svg'} alt="" style={{ width: "35px" }} />
            <p>Youtube</p>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
