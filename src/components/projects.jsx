import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'bootstrap';

export function Projects() {
    const [projects, setProjects] = useState([])
    const [modalApp, setModalApp] = useState(null)
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        (function () {
            fetch('/data.json', {
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
    const handleProjectClick = (item) => {
        if (isMobile) {
            // 📱 MÓVIL: Redirige a la vista completa
            navigate(`/detalle/${item.id}`);
        } else {
            // 🖥️ ESCRITORIO: Carga los datos en el estado y muestra el modal
            setModalApp(item);

            const modalElement = document.getElementById('staticBackdrop');
            if (modalElement) {
                const modalInstance = Modal.getOrCreateInstance(modalElement);
                modalInstance.show();
            }
        }
    };

    // const showView = (item) => {
    //     if (isMobile) {
    //         navigate(`/detalle/${item.id}`);
    //     } else {
    //         setModalApp(item)
    //     }
    // };

    const projectsMap = projects ? projects.map((item, index) => {
        return (
            <div key={index} className="projects-card" onClick={() => handleProjectClick(item)} >
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
        <div className='projects' id='projects'>
            <h2>Proyectos</h2>
            <div className='projects-items'>
                {projectsMap}
            </div>
            <div className="modal fade modal-xl modal-dialog-scrollable scrollable" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
        </div>
    )
}