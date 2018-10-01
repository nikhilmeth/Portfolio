<%@ Page Title="Nikhil Methuku" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div id="fullscreen-hero" class="home-hero">
        <div class="hero-container">
          <div class="hero-content"><a href="#" class="home-logo"><img src="images/NIK_LOGO.png" style="padding:0;"></a>
              <h1>Hi, I am Nikhil. I love to develop </h1>  
              <h1 class="">
                <a href="#" class="typewrite" data-period="2000" data-type='[ "websites.", "applications." ]'>
                <span class="wrap"></span>
                </a>
            </h1>
            <div class="page-scroll"><a href="#hireMe" class="button button-ghost">Yes, I'm Available For Hire</a></div>
            <h4 style="color: cadetblue">Javascript enthusiastic</h4>
            <div class="page-scroll learn-more"><a href="#about">Learn more about what I do<br><i class="fa fa-chevron-down"></i></a></div>
          </div>
        </div> 
    </div>
        <section id="about"> 
            <div class="container">
                <div class="row">
                    <div class="eight columns offset-by-two columns">
                      <p class="intro slate">About me</p>
                    </div>
                </div>
                <div class="row" style="text-align:center; margin:0px 0px">
                    <div class="col-md-6">
                        <div class="cadetblue" style="text-align:justify"> 
                            I am a full-stack web developer with 3.5 years of proven experience. 
                            I have maintained and developed multiple projects, developing both back-end and front-end codebases. 
                            Fixing the cross-browser bugs is something I am fond of. 
                            I have demonstrated experience in developing applications in both Agile Methodology (Scrum and XP) and Waterfall Methodology. 
                            I enjoy being challenged and working on projects that require me to work outside my comfort and knowledge set, 
                            as continuing to learn new languages and development techniques are important to me and the success of your organization. 
                            Developed applications using Java and ASP.NET with a deep knowledge of HTML, CSS, Javascript, JQuery, AngularJS and Bootstrap frameworks. 
                            Continued education has allowed me to stay ahead of the curve and deliver exceptional work to each employer I have worked for. 
                            Nikhil not only develops websites but also designs graphics using Adobe Creative Suite.
                        </div>
                        <div style="padding: 20px 0px"><a href="Assets/Nikhilesh_Methuku.pdf" target="_blank" class="button button-primary">RESUME</a></div>
                    </div> 
                    <div class="col-md-6">
                      <div id="halfscreen-hero" class="home-hero1"></div>
                    </div>
                </div>
            </div>
        </section>

    <div class="otherDiv">
    <section id="me">
        <div class="container">
          <div class="row">
            <div class="eight columns offset-by-two columns">
              <p class="intro slate">Expertise</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="expertise-block"><i class="fa fa-lightbulb-o cadetblue"></i>
                <h4 class="title slate">Languages</h4>
                <p class="summary cadetblue">I have developed applications on PHP, Java and ASP.NET. Experienced in developing internet banking applications and E-Commerce websites.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="expertise-block"><i class="fa fa-magic cadetblue"></i>
                <h4 class="title slate">Agile/Waterfall</h4>
                <p class="summary cadetblue">I can work on Agile Methodology and Waterfall Methodology. Never exceeded time to deliver a sprint. I write user stories for business requirements by interacting with the clients.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="expertise-block"><i class="fa fa-code cadetblue"></i>
                <h4 class="title slate">Code</h4>
                <p class="summary cadetblue">I love to design on the browsers, try to make most of the elements cross compatible with all the browsers including Microsoft IE 11. Love to imbibe the hot technologies like React or Angular to the website.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

        <section class="project-showcase" id="projects">
            <div class="container">
                <div class="row">
                    <div class="eight columns offset-by-two columns">
                      <p class="intro slate">Experiences</p>
                    </div>
                </div>
                <div id="directory-root"></div>
                
                <div class="row">
                  <div class="col-md-4">
                      <img src="images/ksu-hds.jpeg" class="project-image"></div>
                  <div class="col-md-8">
                    <div class="project-content" style="text-align:center">
                      <h3 class="project-title">K-State Housing & Dining</h3>
                      <ul class="project-tags">
                        <li>Application Developer (PHP, ASP.NET, AJAX, Javascript, API)</li>
                      </ul>
                      <p class="project-description" style="text-align: justify">Design and develop modules for both internal employees and students, integrating them into Staff Center application which is one stop solution for all IT solutions and applications for Housing and Dining Services staff. I meet stakeholders to discuss what their expectations are out of their new system and process them into business solutions by providing them an approachable prototype. I have developed applications where students or employees can place an order for food to various dining centers based on what they serve. This imitates a small-sized e-commerce website which allows the users to track their order, chat with the dining centers or upload any documents if necessary. I have also developed other modules where administrative staff of housing and dining can request the management for new positions. The higher officials mainly use this system to approve or reject positions requested by the staff and most importantly can be tracked where the application is pending. Most of these applications are built using PHP, AJAX, JQuery, Bootstrap and APIs. I like to build interactive applications which are lively.</p>
                        <a href="http://housing.k-state.edu/" target="_blank" class="button button-primary">Visit Website</a>
                    </div>
                  </div>
                </div>
                <p style="border-bottom:1px solid;margin:20px 0 60px"></p>

                <div class="row">
                  <div class="col-md-8">
                    <div class="project-content" style="text-align:center">
                      <h3 class="project-title">Mcklein Company LLC</h3>
                      <ul class="project-tags">
                        <li>Web Application Developer(ASP.NET, JQuery, SAP B1, AJAX)</li>
                      </ul>
                      <p class="project-description" style="text-align: justify">Being a single IT man for the entire company here was great because, I had a lot of opportunity to learn and fix various bugs reported by each employee of Mcklein. I worked on 3 e-commerce websites and company website simultaneously which we hosted. We had 3 brands; namely McKlein, Parinda and Siamod all websites sell their leather accessories. These applications were mainly developed on ASP.NET, C#, Bootstrap which was synced to ZedSuite CMS where images and content of these websites can be added or changed but not the backend.</p>
                        <a href="https://www.mckleinusa.com/default.aspx" target="_blank" class="button button-primary">Visit Website</a>
                    </div>
                  </div>
                  <div class="col-md-4">
                      <img src="images/McKleinUSA.jpg" class="project-image">
                  </div>
                </div>

                <p style="border-bottom:1px solid;margin:20px 0 60px"></p>
                
                <div class="row">
                  <div class="col-md-4">
                      <img src="images/nsec.png" class="project-image">
                  </div>
                    <div class="col-md-8">
                    <div class="project-content" style="text-align:center">
                      <h3 class="project-title">National Safety Education Center</h3>
                      <ul class="project-tags">
                        <li>Front End Developer (HTML, Javascript, Bootstrap)</li>
                      </ul>
                      <p class="project-description" style="text-align: justify">I worked as a Graduate Assistant at National Safety Education Center for over 1.5 years. I maintained their official website by complying to Norther Illinois University’s web standards. I have introduced features where users can search courses by location and designed their catalog. I actively managed their social media content by designing and posting the content to various media platforms. I was awarded Ninja Award for driving in most of registrations for few classes hosted by us.</p>
                        <a href="https://www.nsec.niu.edu/nsec/" target="_blank" class="button button-primary">Visit Website</a>
                    </div>
                  </div>
                </div>

                <p style="border-bottom:1px solid;margin:20px 0 60px"></p>

                <div class="row"> 
                  <div class="col-md-8">
                    <div class="project-content" style="text-align:center">
                      <h3 class="project-title"><a href="https://www.infosys.com/" target="_blank">Infosys</a> (Client: ANZ Bank)</h3>
                      <ul class="project-tags">
                        <li>Full Stack Developer (Java, Finacle)</li>
                      </ul>
                      <p class="project-description" style="text-align: justify">I began my career of developing applications with ANZ internet banking application. This application was built on home-grown Infosys tool called Finacle (framework). I was responsible for revamping and making this application responsive. I have redesigned modules like Pay anyone, Funds transfer and Pay Bills modules. I worked on dozens of sprints, where each sprint consisted of 10 business days. The new user registration module was completely build by revamping the entire module by me. These projects were a good start for my career and gave a good boost to my career as I worked on AngularJS, Java, Bootstrap and other front-end technologies.</p>
                        <a href="https://www.anz.com.au/personal/" target="_blank" class="button button-primary">Visit Website</a>
                    </div>
                  </div>
                  <div class="col-md-4">
                      <img src="images/anz-logo.jpg" class="project-image">
                  </div>
                </div>

            </div>
          </section>

    <div class="otherDiv">
       <section id="contact">
        <div class="container">
            <div class="row">
                <div class="eight columns offset-by-two columns">
                  <p class="intro slate">Contact</p>
                </div>
            </div>
            
            <div class="row" align="center" style="padding-bottom:30px">
              <div style="display:table; font-size:14px; font-weight:600; color:cadetblue; padding-bottom: 24px">
                  <div style="display:table-row">
                      <div style="display:table-cell; width:100px;text-align:left;padding-right:5px;padding-bottom: 8px">Name:</div>
                      <div style="display:table-cell; width:80px;text-align:left">Nikhilesh Methuku</div>
                  </div>
                  <div style="display:table-row">
                      <div style="display:table-cell;text-align:left;padding-right:5px;padding-bottom: 8px">Email:</div>
                      <div style="display:table-cell;text-align:left"><a href="mailto:nikhil.methuku@gmail.com" target="_top">nikhil.methuku@gmail.com</a></div>
                  </div>
                  <div style="display:table-row">
                      <div style="display:table-cell;text-align:left;padding-right:5px;padding-bottom: 8px">Phone:</div>
                      <div style="display:table-cell;text-align:left">(815) 764-7215</div>
                  </div>
                  <div style="display:table-row">
                      <div style="display:table-cell;text-align:left;padding-right:5px;padding-bottom: 8px">Address:</div>
                      <div style="display:table-cell; width:80px;text-align:left">3128 Lundin Dr. Manhattan, KS 66503</div>
                  </div>
              </div>
            </div>
            <br>
            <div id="hireMe">
                <div class="form-group row">
                    <label class="col-md-4 text-right">Name <span class="colorRed">*</span></label>
                    <div class="col-md-3">
                        <input type="text" runat="server" class="form-control" id="firstName" value="" placeholder="First name" required/>
                    </div>
                    <div class="col-md-3">
                        <input type="text" runat="server" class="form-control" id="lastName" value="" placeholder="Last name" required/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="emailId" class="col-md-4 text-right">Email <span class="colorRed">*</span></label>
                    <div class="col-md-6">
                        <input type="text" runat="server" class="form-control" id="emailId" value="" placeholder="Email@email.com" required />
                    </div>                        
                </div>
                <div class="form-group row">
                    <label for="companyName" class="col-md-4 text-right ">Company</label>
                    <div class="col-md-6">
                        <input type="text" runat="server" class="form-control" id="companyName" value="" placeholder="abc llc" />
                    </div>                        
                </div>
                <div class="form-group row">
                    <label for="phNo" class="col-md-4 text-right">Phone Number</label>
                    <div class="col-md-6">
                        <input type="text" runat="server" class="form-control" id="phNo" value="" placeholder="(000) 000-0000" />
                    </div>                        
                </div>
                <div class="form-group row">
                    <label for="jobDesc" class="col-md-4 text-right">Job description</label>
                    <div class="col-md-6">
                        <input type="text" runat="server" class="form-control" id="jobDesc" rows="3" />
                    </div>                        
                </div>
                <div class="form-group text-center" >
                    <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Submit" cssClass="btn btn-primary" />
                </div>
                <!--iframe-- src="https://docs.google.com/forms/d/e/1FAIpQLSc2-91Q-d4UfgRbrq9BRdpTVFonPSuMZ7oNkTEtvWRCUkvNgg/viewform?embedded=true" width="640" height="1016" frameborder="0" marginheight="0" marginwidth="0">Loading...</!--iframe-->
            </div>
        </div>
      </section>
    </div>
   
</asp:Content>