(this.webpackJsonpreact_website=this.webpackJsonpreact_website||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),s=n(7),o=n.n(s),r=(n(18),n(19),n.p+"static/media/selfie.aab65715.png");var l=function(e){var t=e.handleClose;return Object(a.jsxs)("div",{id:"popup",children:[Object(a.jsx)("h2",{id:"popupHeader",children:"About Me. . . "}),Object(a.jsx)("h3",{children:"Hello!"}),Object(a.jsx)("image",{className:"infoImage",children:Object(a.jsx)("img",{src:r,width:"160",height:"275"})}),Object(a.jsx)("p",{id:"infoPara",children:"My name is Hannah Friedman, I am an ambitious beginner looking for a challenge. Currently pursuing my bachelor\u2019s in computer science, I am humble and hungry to learn new skills and grow as a developer.  "}),Object(a.jsx)("a",{href:"/#",onClick:function(){return t("popup")},children:"Close"})]})},d=n(26),j=n(27),m=n(28);var u=function(e){var t=e.handleClose;return Object(a.jsxs)("div",{id:"projects",children:[Object(a.jsx)("h2",{id:"popupHeader",children:"Projects!"}),Object(a.jsxs)(d.a,{children:[Object(a.jsxs)(j.a,{children:[Object(a.jsx)(d.a.Toggle,{className:"accordionHeader",as:m.a,eventKey:"0",children:"Personal Site"}),Object(a.jsx)(d.a.Collapse,{eventKey:"0",children:Object(a.jsx)(j.a.Body,{className:"accordionBody",children:"My personal webpage is written with a combination of React, javaScript, and css. I created this page to allow users to view infomation about myself including my resume with direct links to my Github and Linkdin account."})})]}),Object(a.jsxs)(j.a,{children:[Object(a.jsx)(d.a.Toggle,{className:"accordionHeader",as:m.a,eventKey:"1",children:"iOS Development Bootcamp"}),Object(a.jsx)(d.a.Collapse,{eventKey:"1",children:Object(a.jsx)(j.a.Body,{className:"accordionBody",children:"I am currently enrolled in a iOS App development bootcamp. During the length of the course I have currently completed 10 Apps, as well as developed a love for the Swift language. I am developing my own app store game, which I hope to be completed soon and have it downloadable in the app store."})})]}),Object(a.jsxs)(j.a,{children:[Object(a.jsx)(d.a.Toggle,{className:"accordionHeader",as:m.a,eventKey:"2",children:"C# Web Browser"}),Object(a.jsx)(d.a.Collapse,{eventKey:"2",children:Object(a.jsxs)(j.a.Body,{className:"accordionBody",children:["Using Visual Studio and the Windows Forms framework in C#. The web browser has multiple functions, similar to those in a typical web browser. A menubar, tool strip, tab control, etc..",Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://github.com/Hfriedman13/CPSC-2713",children:"Repository"})]})})]})]}),Object(a.jsx)("a",{href:"/#",onClick:function(){return t("projects")},children:"Close"})]})};var b=function(e){var t=e.handleClose;return Object(a.jsxs)("div",{id:"resume",children:[Object(a.jsx)("h2",{id:"popupHeader",children:"Resume"}),Object(a.jsxs)(d.a,{children:[Object(a.jsxs)(j.a,{children:[Object(a.jsx)(d.a.Toggle,{className:"accordionHeader",as:m.a,eventKey:"0",children:"Schooling"}),Object(a.jsx)(d.a.Collapse,{eventKey:"0",children:Object(a.jsx)(j.a.Body,{className:"accordionBody",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"})})]}),Object(a.jsxs)(j.a,{children:[Object(a.jsx)(d.a.Toggle,{className:"accordionHeader",as:m.a,eventKey:"1",children:"Skills and Abilities"}),Object(a.jsx)(d.a.Collapse,{eventKey:"1",children:Object(a.jsx)(j.a.Body,{className:"accordionBody",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"})})]}),Object(a.jsxs)(j.a,{children:[Object(a.jsx)(d.a.Toggle,{className:"accordionHeader",as:m.a,eventKey:"2",children:"Experience?"}),Object(a.jsx)(d.a.Collapse,{eventKey:"2",children:Object(a.jsx)(j.a.Body,{className:"accordionBody",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"})})]})]}),Object(a.jsx)("a",{href:"/#",onClick:function(){return t("resume")},children:"Close"})]})};var h=function(e){var t=e.handleClose;return Object(a.jsxs)("div",{id:"contact",children:[Object(a.jsx)("h2",{id:"popupHeader",children:"Contact Me..."}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"colum",children:Object(a.jsxs)("form",{method:"post",name:"contactForm",action:"form-to-email.php",children:[Object(a.jsx)("label",{for:"name",children:"Name: "}),Object(a.jsx)("input",{type:"text",id:"name",placeholder:"First and Last Name..."}),Object(a.jsx)("label",{for:"email",children:"Email: "}),Object(a.jsx)("input",{type:"text",id:"email",placeholder:"Email.."}),Object(a.jsx)("label",{for:"message",children:"Message Me:"}),Object(a.jsx)("textarea",{id:"message",name:"message",placeholder:"Type message here..."})]})})}),Object(a.jsx)("input",{type:"submit"}),Object(a.jsx)("a",{href:"/#",onClick:function(){return t("contact")},children:"Close"})]})};var p=function(){function e(e){var t=document.getElementById("blur");switch(t&&t.classList.toggle("active"),e){case"popup":var n=document.getElementById("popup");n&&n.classList.toggle("active");break;case"projects":var a=document.getElementById("projects");a&&a.classList.toggle("active");break;case"resume":var c=document.getElementById("resume");c&&c.classList.toggle("active");break;case"contact":var i=document.getElementById("contact");i&&i.classList.toggle("active");break;default:t.classList.toggle("active")}}return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("head",{children:Object(a.jsx)("title",{children:"Hannah Friedman"})}),Object(a.jsxs)("body",{children:[Object(a.jsxs)("div",{className:"container",id:"blur",children:[Object(a.jsx)("h1",{id:"nameHeader",children:"Hannah Friedman"}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"mainButtons",onClick:function(){return e("popup")},children:"INFO"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"mainButtons",onClick:function(){return e("projects")},children:"PROJECTS"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"mainButtons",onClick:function(){return e("resume")},children:"RESUME"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"mainButtons",onClick:function(){return e("contact")},children:"Contact"}),Object(a.jsx)("button",{id:"gitButton",className:"mainButtons",onClick:function(){return window.open("https://github.com/Hfriedman13","_blank")}}),Object(a.jsx)("button",{id:"linkedinButton",className:"mainButtons",onClick:function(){return window.open("http://www.linkedin.com/in/hannah-friedman-b0a6601a8","_blank")}})]})]}),Object(a.jsx)(l,{handleClose:e}),Object(a.jsx)(u,{handleClose:e}),Object(a.jsx)(b,{handleClose:e}),Object(a.jsx)(h,{handleClose:e})]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};n(23);o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),x()}},[[24,1,2]]]);
//# sourceMappingURL=main.4bec7e12.chunk.js.map