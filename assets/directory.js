(function () {
    "use strict";

    function Experience(props) {
        return (
            <div className="experiences">
                <div className="row" id={props.experience.id}>
                    <div className="col-md-4">
                        <img src={props.experience.img} alt={props.experience.company} className="project-image" />
                    </div>
                    <div className="col-md-8">
                        <div className="project-content text-center">
                            <h5 className="project-title">{props.experience.company}</h5>
                            <ul className="project-tags">
                                <li>{props.experience.name}</li>
                            </ul>
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

    class Directory extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                experiences: window.NikDirectory.experiences,
                testimonies: window.NikDirectory.testimonies,
                skills: window.NikDirectory.skills
            };

        }

        render() {
            return (
                <div className="main-div">
                    <section className="project-showcase" id="projects">
                        <div className="container">
                                <div className="row">
                                    <div className="eight columns offset-by-two columns">
                                        <p className="intro slate">Experiences</p>
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
                </div>
            );
        }
    }

    ReactDOM.render(<Directory />, document.getElementById('directory-root'));

})();