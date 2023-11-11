export function DrawNavBar() {
  const addClassListEvent = () => {
    const drawEvent = document.getElementById('draw');
    drawEvent.classList.toggle("drawing");
  }
  return (
    <div className='draw' id='draw'>
      <div className='draw-nav' >
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
      </div>
      <div className="burger" onClick={() => addClassListEvent()}>
        <img className="background-svg" src={'/assets/burger-draw-svg.svg'} alt="" />
      </div>
    </div>
  )
}