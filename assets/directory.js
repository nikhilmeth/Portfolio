(function () {
    "use strict";

    const currentYear = new Date().getFullYear()

    function Experience(props) {
        return (
            <div className="experiences">
                <div className="row" id={props.experience.id}>
                    <div className="col-md-4">
                        <img src={props.experience.img} alt={props.experience.company} className="project-image" />
                    </div>
                    <div className="col-md-8">
                        <div className="project-content text-center">
                            <div className="project-title">{props.experience.name}</div>
                                <h6>{props.experience.company}</h6>
                            <p className="project-description text-justify" >
                                {props.experience.bio}
                            </p>
                            <a href={props.experience.url} target="_blank" className="button button-primary">Visit Website</a>
                        </div>
                    </div>
                </div>
                <p className="borderClass"></p>
            </div>
        );
    }

    function Testimony(props) {
        return (
            <div className="testimony">
                <div className="row" id={props.testimony.id}>
                    <div className="col-md-9">
                        <div className="project-content text-right">
                            <h5 className="project-title">{props.testimony.name}</h5>
                            <ul className="project-tags">
                                <li>{props.testimony.position}</li>
                            </ul>
                            <p className="project-description cadetblue text-justify" >
                                {props.testimony.testimony}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <img src={props.testimony.img} alt={props.testimony.name} className="project-image" />
                    </div>                  
                </div>
                <p className="borderClass"></p>
            </div>
        );
    }

    function Skill(props) {
        return (
            <div className="col-md-4">
                <div className="expertise-block"><i className={props.skill.icon}></i>
                    <h4 className="title slate">{props.skill.title}</h4>
                    <p className="summary cadetblue">{props.skill.desc}</p>
                </div>
            </div>
        );
    }

    function Link(props) {
        return (
                <span>
                    <a href={props.link.href} target="_blank"><i className={props.link.icon} aria-hidden="true"></i></a>
                </span>
                
            );
    }

    function Experiences(props) {
        return (
            <div className="results">

                {props.experiences.map(function (experience) {

                    return <Experience key={experience.id} experience={experience} />;

                })}

            </div>
        );
    }

    function Testimonies(props) {
        return (
            <div className="testimonies">

                {props.testimonies.map(function (testimony) {

                    return <Testimony key={testimony.id} testimony={testimony} />;

                })}

            </div>
        );
    }

    function Skills(props) {
        return (
            <div className="skills">

                {props.skills.map(function (skill) {

                    return <Skill key={skill.id} skill={skill} />;

                })}

            </div>
        );
    }

    function Links(props) {
        return (
            <footer className="footer" id="contact">
                {props.links.map(function (link) {

                    return <Link key={link.id} link={link} />;

                })}
                <p>© {currentYear} - Nikhilesh Methuku</p>
            </footer>    
        );
    }

    class Directory extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                experiences: window.NikDirectory.experiences,
                testimonies: window.NikDirectory.testimonies,
                skills: window.NikDirectory.skills,
                links: window.NikDirectory.footer
            };

        }

        render() {
            return (
                <div className="main-div">
                    <section className="project-showcase otherDiv" id="about">
                        <div className="container">
                            <div className="row">
                                <div className="eight columns offset-by-two columns">
                                    <p className="intro slate">About me</p>
                                </div>
                            </div>
                            <div className="row alignMargin">
                                <div className="col-md-6">
                                    <div className="cadetblue text-justify">
                                                    I am a full-stack web developer with 4 years of proven experience.
                                        I have maintained and developed multiple projects, developed both back-end and front-end codebases.
                                        Fixing the cross-browser bugs is something I am fond of.
                                        I have demonstrated experience in developing applications in both Agile Methodology (Scrum and XP) and Waterfall Methodology.
                                        I enjoy being challenged and working on projects that require me to work outside my comfort and knowledge set,
                                        as continuing to learn new languages and development techniques are important to me and the success of your organization.
                                        Developed applications using PHP, Java and ASP.NET with a deep knowledge of HTML, CSS, Javascript, React, JQuery, Angular and Bootstrap frameworks.
                                        Continued education has allowed me to stay ahead of the curve and deliver exceptional work to each employer I have worked for.
                                        Nikhil not only develops websites but also designs graphics using Adobe Creative Suite.
                                    </div>
                                    <div><a href="assets/Nikhilesh_Methuku.pdf" target="_blank" className="button button-primary">RESUME</a></div>
                                </div>
                                <div className="col-md-6">
                                    <div id="halfscreen-hero" className="home-hero1"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="project-showcase" id="projects">
                        <div className="container">
                                <div className="row">
                                    <div className="eight columns offset-by-two columns">
                                        <p className="intro slate">Work Experience</p>
                                    </div>
                                </div>    
                                <Experiences experiences={this.state.experiences} />
                        </div>
                    </section>

                    <section className="testimony-showcase otherDiv" id="testimony">
                        <div className="container">
                            <div className="row">
                                <div className="eight columns offset-by-two columns">
                                    <p className="intro slate">What my previous employers are saying?</p>
                                </div>
                            </div>
                            <Testimonies testimonies={this.state.testimonies} />
                        </div>
                    </section>

                    <section id="me">
                        <div className="container">
                            <div className="row">
                                <div className="eight columns offset-by-two columns">
                                    <p className="intro slate">Expertise</p>
                                </div>
                            </div>
                            <div className="row">
                                <Skills skills={this.state.skills} />
                            </div>
                        </div>
                    </section>

                    <Links links={this.state.links}/>
                </div>
            );
        }
    }

    ReactDOM.render(<Directory />, document.getElementById('directory-root'));

})();