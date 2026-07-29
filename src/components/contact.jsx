import { useNavigate } from 'react-router-dom';
export function Contact() {
    const navigate = useNavigate();
    return (
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
                {/* <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcQsbbrXPfbBSllwbKdXddnPDVfpSRnTzPZNdbNSpbnpksQcTfDhNVFwGBWNkJSQdXWqq" target='_blank' className="item-skill" data-tooltip="gonzalocabrera1990@gmail.com" rel="noreferrer">
                    <img src={'/assets/google-gmail-svg.svg'} alt="" style={{ width: "35px" }} />
                    <p>Gmail</p>
                </a> */}
                <a href="/contact/email" className="item-skill" >
                    <img src={'/assets/google-gmail-svg.svg'} alt="" style={{ width: "35px" }} />
                    <p>Gmail</p>
                </a>
                <a href="https://youtu.be/oqHR4m2FGgI" target='_blank' className="item-skill" rel="noreferrer">
                    <img src={'/assets/youtube-svg.svg'} alt="" style={{ width: "35px" }} />
                    <p>Youtube</p>
                </a>
            </div>
        </footer>
    )
}