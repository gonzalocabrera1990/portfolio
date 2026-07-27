export function SkillList() {
    return (
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
                            <p>React Native</p>
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
                        <div className="item-skill">
                            <img src={'/assets/python-svgrepo-com.svg'} alt="" style={{ width: "57px" }} />
                            <p>Python</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="svg-top">
                <img className='background-svg' src={'/assets/c.svg'} alt="" />
            </div>
        </div>
    )
}