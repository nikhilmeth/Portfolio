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
            <div class="page-scroll"><a href="#contact" class="button button-ghost">Yes, I'm Available For Hire</a></div>
            <h4 style="color: cadetblue">Javascript enthusiastic</h4>
            <div class="page-scroll learn-more"><a href="#about">Learn more about what I do<br><i class="fa fa-chevron-down"></i></a></div>
          </div>
        </div> 
    </div>
 

    <div id="directory-root"></div>
   
    
       <section id="contact" class="otherDiv">
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

        </div>
      </section>
    
   
</asp:Content>