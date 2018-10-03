"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
    "use strict";

    var currentYear = new Date().getFullYear();

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

    function Link(props) {
        return React.createElement(
            "span",
            null,
            React.createElement(
                "a",
                { href: props.link.href, target: "_blank" },
                React.createElement("i", { className: props.link.icon, "aria-hidden": "true" })
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

    function Links(props) {
        return React.createElement(
            "footer",
            { className: "footer", id: "contact" },
            props.links.map(function (link) {

                return React.createElement(Link, { key: link.id, link: link });
            }),
            React.createElement(
                "p",
                null,
                "\xA9 ",
                currentYear,
                " - Nikhilesh Methuku"
            )
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
                skills: window.NikDirectory.skills,
                links: window.NikDirectory.footer
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
                        { className: "project-showcase otherDiv", id: "about" },
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
                                        "About me"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "row alignMargin" },
                                React.createElement(
                                    "div",
                                    { className: "col-md-6" },
                                    React.createElement(
                                        "div",
                                        { className: "cadetblue text-justify" },
                                        "I am a full-stack web developer with 3.5 years of proven experience. I have maintained and developed multiple projects, developing both back-end and front-end codebases. Fixing the cross-browser bugs is something I am fond of. I have demonstrated experience in developing applications in both Agile Methodology (Scrum and XP) and Waterfall Methodology. I enjoy being challenged and working on projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization. Developed applications using Java and ASP.NET with a deep knowledge of HTML, CSS, Javascript, JQuery, AngularJS and Bootstrap frameworks. Continued education has allowed me to stay ahead of the curve and deliver exceptional work to each employer I have worked for. Nikhil not only develops websites but also designs graphics using Adobe Creative Suite."
                                    ),
                                    React.createElement(
                                        "div",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "assets/Nikhilesh_Methuku.pdf", target: "_blank", className: "button button-primary" },
                                            "RESUME"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-6" },
                                    React.createElement("div", { id: "halfscreen-hero", className: "home-hero1" })
                                )
                            )
                        )
                    ),
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
                                        "Work Experience"
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
                    ),
                    React.createElement(Links, { links: this.state.links })
                );
            }
        }]);

        return Directory;
    }(React.Component);

    ReactDOM.render(React.createElement(Directory, null), document.getElementById('directory-root'));
})();
//# sourceMappingURL=directory-dist.js.map