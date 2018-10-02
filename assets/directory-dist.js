"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
    "use strict";

    function Experience(props) {
        return React.createElement(
            "div",
            { className: "experiences" },
            React.createElement(
                "div",
                { className: "row", id: props.experience.id },
                React.createElement(
                    "div",
                    { className: "col-md-4" },
                    React.createElement("img", { src: props.experience.img, alt: props.experience.company, className: "project-image" })
                ),
                React.createElement(
                    "div",
                    { className: "col-md-8" },
                    React.createElement(
                        "div",
                        { className: "project-content text-center" },
                        React.createElement(
                            "h5",
                            { className: "project-title" },
                            props.experience.company
                        ),
                        React.createElement(
                            "ul",
                            { className: "project-tags" },
                            React.createElement(
                                "li",
                                null,
                                props.experience.name
                            )
                        ),
                        React.createElement(
                            "p",
                            { className: "project-description text-justify" },
                            props.experience.bio
                        ),
                        React.createElement(
                            "a",
                            { href: props.experience.url, target: "_blank", className: "button button-primary" },
                            "Visit Website"
                        )
                    )
                )
            ),
            React.createElement("p", { className: "borderClass" })
        );
    }

    function Testimony(props) {
        return React.createElement(
            "div",
            { className: "testimony" },
            React.createElement(
                "div",
                { className: "row", id: props.testimony.id },
                React.createElement(
                    "div",
                    { className: "col-md-9" },
                    React.createElement(
                        "div",
                        { className: "project-content text-right" },
                        React.createElement(
                            "h5",
                            { className: "project-title" },
                            props.testimony.name
                        ),
                        React.createElement(
                            "ul",
                            { className: "project-tags" },
                            React.createElement(
                                "li",
                                null,
                                props.testimony.position
                            )
                        ),
                        React.createElement(
                            "p",
                            { className: "project-description cadetblue text-justify" },
                            props.testimony.testimony
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-3" },
                    React.createElement("img", { src: props.testimony.img, alt: props.testimony.name, className: "project-image" })
                )
            ),
            React.createElement("p", { className: "borderClass" })
        );
    }

    function Skill(props) {
        return React.createElement(
            "div",
            { className: "col-md-4" },
            React.createElement(
                "div",
                { className: "expertise-block" },
                React.createElement("i", { className: props.skill.icon }),
                React.createElement(
                    "h4",
                    { className: "title slate" },
                    props.skill.title
                ),
                React.createElement(
                    "p",
                    { className: "summary cadetblue" },
                    props.skill.desc
                )
            )
        );
    }

    function Experiences(props) {
        return React.createElement(
            "div",
            { className: "results" },
            props.experiences.map(function (experience) {

                return React.createElement(Experience, { key: experience.id, experience: experience });
            })
        );
    }

    function Testimonies(props) {
        return React.createElement(
            "div",
            { className: "testimonies" },
            props.testimonies.map(function (testimony) {

                return React.createElement(Testimony, { key: testimony.id, testimony: testimony });
            })
        );
    }

    function Skills(props) {
        return React.createElement(
            "div",
            { className: "skills" },
            props.skills.map(function (skill) {

                return React.createElement(Skill, { key: skill.id, skill: skill });
            })
        );
    }

    var Directory = function (_React$Component) {
        _inherits(Directory, _React$Component);

        function Directory(props) {
            _classCallCheck(this, Directory);

            var _this = _possibleConstructorReturn(this, (Directory.__proto__ || Object.getPrototypeOf(Directory)).call(this, props));

            _this.state = {
                experiences: window.NikDirectory.experiences,
                testimonies: window.NikDirectory.testimonies,
                skills: window.NikDirectory.skills
            };

            return _this;
        }

        _createClass(Directory, [{
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "main-div" },
                    React.createElement(
                        "section",
                        { className: "project-showcase", id: "projects" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "eight columns offset-by-two columns" },
                                    React.createElement(
                                        "p",
                                        { className: "intro slate" },
                                        "Experiences"
                                    )
                                )
                            ),
                            React.createElement(Experiences, { experiences: this.state.experiences })
                        )
                    ),
                    React.createElement(
                        "section",
                        { className: "testimony-showcase otherDiv", id: "testimony" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "eight columns offset-by-two columns" },
                                    React.createElement(
                                        "p",
                                        { className: "intro slate" },
                                        "What my previous employers are saying?"
                                    )
                                )
                            ),
                            React.createElement(Testimonies, { testimonies: this.state.testimonies })
                        )
                    ),
                    React.createElement(
                        "section",
                        { id: "me" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "eight columns offset-by-two columns" },
                                    React.createElement(
                                        "p",
                                        { className: "intro slate" },
                                        "Expertise"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(Skills, { skills: this.state.skills })
                            )
                        )
                    )
                );
            }
        }]);

        return Directory;
    }(React.Component);

    ReactDOM.render(React.createElement(Directory, null), document.getElementById('directory-root'));
})();
//# sourceMappingURL=directory-dist.js.map