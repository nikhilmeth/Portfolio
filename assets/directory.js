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
                            <h3 className="project-title">{props.experience.company}</h3>
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

    function Experiences(props) {
        return (
            <div className="results">

                {props.experiences.map(function (experience) {

                    return <Experience key={experience.id} experience={experience} />;

                })}

            </div>
        );
    }

    class Directory extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                experiences: window.NikDirectory.experiences
            };

        }

        render() {
            return (
                <div className="experiences-info">
                    <div className="row">
                        <div className="eight columns offset-by-two columns">
                            <p className="intro slate">Experiences</p>
                        </div>
                    </div>    

                    <Experiences experiences={this.state.experiences} />
                </div>
            );
        }
    }

    ReactDOM.render(<Directory />, document.getElementById('directory-root'));

})();