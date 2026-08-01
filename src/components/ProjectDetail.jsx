import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function ProjectDetail() {
    const { id } = useParams(); // Captura el parámetro :id de la URL
    const navigate = useNavigate();

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Si tu data.json está en la carpeta 'public', la ruta raíz es '/data.json'
        fetch('data.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Error al cargar la información');
                }
                return res.json();
            })
            .then((data) => {
                // Asumiendo que data.json contiene un array de proyectos o una propiedad 'projects'
                const projectsList = Array.isArray(data) ? data : data.projects;

                // Buscamos el proyecto que coincida con el id (convertimos a String por seguridad)
                const found = projectsList.find((p) => String(p.id) === String(id));

                if (found) {
                    setProject(found);
                } else {
                    setError('Proyecto no encontrado');
                }
            })
            .catch((err) => {
                console.error(err);
                setError('Ocurrió un error al cargar los datos');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="loading">Cargando proyecto...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="project-detail-container">
            <div className="project-detail-dialog">
                <div className="project-detail-content">
                    <div className="project-detail-back" onClick={() => navigate(-1)}>
                        <img src={'/assets/back-arrow.svg'} alt="" />
                        <span>Volver</span>
                    </div>
                    <div className="project-detail-header">
                        <h1>{project.name}</h1>
                        <a href={project.link} className="icon-svg-link">
                            <img src={project.iconWatch} alt="watch icon" style={{ width: "40px" }} />
                        </a>
                    </div>
                    <div className="">
                        <div>
                            {project.descriptionDetail}
                        </div>
                        <div className='project-detail-media-images'>
                            {
                                project.imageContent.map((img, index) => {
                                    return (
                                        <div key={index} className="project-detail-card" >
                                            <div className="project-detail-image" >
                                                <img className="projects-image-item" src={img} alt="" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}