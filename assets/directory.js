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
                            <h4 className="project-title">{props.experience.company}</h4>
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
                        <div className="project-content text-center">
                            <h4 className="project-title">{props.testimony.name}</h4>
                            <ul className="project-tags">
                                <li>{props.testimony.position}</li>
                            </ul>
                            <p className="project-description text-justify cadetblue" >
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

    class Directory extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                experiences: window.NikDirectory.experiences,
                testimonies: window.NikDirectory.testimonies
            };

        }

        render() {
            return (
                <div className="main-div">
                    <section class="project-showcase" id="projects">
                        <div class="container">
                                <div className="row">
                                    <div className="eight columns offset-by-two columns">
                                        <p className="intro slate">Experiences</p>
                                    </div>
                                </div>    
                                <Experiences experiences={this.state.experiences} />
                        </div>
                    </section>

                    <section class="testimony-showcase otherDiv" id="testimony">
                        <div class="container">
                            <div className="row">
                                <div className="eight columns offset-by-two columns">
                                    <p className="intro slate">What my previous employers are saying?</p>
                                </div>
                            </div>
                            <Testimonies testimonies={this.state.testimonies} />
                        </div>
                    </section>
                </div>
            );
        }
    }

    ReactDOM.render(<Directory />, document.getElementById('directory-root'));

})();