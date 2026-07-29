import { useState, useEffect } from "react";



export function NavBar({ menuOpen, setMenuOpen }) {
    const [colorHeader, setColorHeader] = useState(false)

    // const addClassListEvent = () => {
    //     const drawEvent = document.getElementById('draw');
    //     drawEvent.classList.toggle("drawing");
    // }
    useEffect(() => {
        window.addEventListener("scroll", changeColor);

        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);
    const changeColor = () => {
        if (window.scrollY >= 200) {
            setColorHeader(true)
        } else {
            setColorHeader(false)
        }
    }
    // window.addEventListener('scroll', changeColor)

    return (
        <header className={colorHeader ? 'header header-con-color' : 'header'} >
            <div className="navigation">
                <a className="logo">
                    <img className="background-svg" src={'/portfolio/assets/logo-img.png'} alt="" />
                    <div className="logo-name">
                        <h1>Gonzalo</h1>
                        <h1>Cabrera</h1>
                    </div>
                </a>
                <nav>
                    <div className="links">
                        <a href="#about" className="link-name">Sobre Mi</a>
                    </div>
                    <div className="links">
                        <a href="#projects" className="link-name">Proyectos</a>
                    </div>
                    <div className="links">
                        <a href="#estudios" className="link-name">Estudios</a>
                    </div>
                    <div className="links">
                        <a href="#skills" className="link-name">Skills</a>
                    </div>
                    <div className="links">
                        <a href="#redes" className="link-name">Contacto</a>
                    </div>
                </nav>
                {/* <div className="burger" onClick={() => addClassListEvent()}>
                    <img className="background-svg" src={'/portfolio/assets/burger-white.svg'} alt="" />
                </div> */}
                <div
                    className="burger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <img
                        className="background-svg"
                        src="/portfolio/assets/burger-white.svg"
                        alt=""
                    />
                </div>
            </div>
        </header>
    )
}   