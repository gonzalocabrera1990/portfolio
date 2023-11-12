export function DrawNavBar() {
  const addClassListEvent = () => {
    const drawEvent = document.getElementById('draw');
    drawEvent.classList.toggle("drawing");
  }
  return (
    <div className='draw' id='draw'>
      <div className='draw-nav' >
        <div className="links">
          <a href="#about" className="link-name">Sobre Mi</a>
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
      </div>
      <div className="burger" onClick={() => addClassListEvent()}>
        <img className="background-svg" src={'/portfolio/assets/burger-black.svg'} alt="" />
      </div>
    </div>
  )
}