(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),o=a(4),r=a.n(o),s=(a(9),a(2)),l=(a(10),a(0));function i(e){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.Title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"#",children:e.About})})]}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",onClick:e.togglemode,id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",for:"flexSwitchCheckDefault",children:"Enable to Dark Mode"})]})]})]})})})}function d(e){var t=Object(c.useState)(""),a=Object(s.a)(t,2),n=a[0],o=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("h2",{children:e.heading}),Object(l.jsx)("div",{className:"mb-3 my-2",children:Object(l.jsx)("textarea",{className:"form-control",id:"textbox",rows:"8",value:n,onChange:function(e){o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#271d1d":"white",color:"dark"===e.mode?"white":"black"}})}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",style:{backgroundColor:"dark"===e.mode?"#212529":"#FF8C00",borderColor:"dark"===e.mode?"#59677a":"white"},onClick:function(){var t=n.toUpperCase();o(t),e.showAlert("Converted to Uppercase!","success")},children:"Convert to Uppercase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",style:{backgroundColor:"dark"===e.mode?"#212529":"#FF8C00",borderColor:"dark"===e.mode?"#59677a":"white"},onClick:function(){var t=n.toLowerCase();o(t),e.showAlert("Converted to Lowercase!","success")},children:"Convert to Lowercase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",style:{backgroundColor:"dark"===e.mode?"#212529":"#FF8C00",borderColor:"dark"===e.mode?"#59677a":"white"},onClick:function(){o(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",style:{backgroundColor:"dark"===e.mode?"#212529":"#FF8C00",borderColor:"dark"===e.mode?"#59677a":"white"},onClick:function(){var t=document.getElementById("textbox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to ClipBoard!","success")},children:"Copy Text"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",style:{backgroundColor:"dark"===e.mode?"#212529":"#FF8C00",borderColor:"dark"===e.mode?"#59677a":"white"},onClick:function(){var t=n.split(/[ ]+/);o(t.join(" ")),e.showAlert("Remove ExtraSpaces!","success")},children:"Remove Extra Spaces"})]}),Object(l.jsxs)("div",{className:"container my-3 text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("h2",{children:"Text Summary"}),Object(l.jsxs)("p",{children:[n.split(" ").length," Words and ",n.length," Character"]}),Object(l.jsxs)("p",{children:[n.split(".").length-1," Sentence "]}),Object(l.jsxs)("p",{children:[(n.split(" ").length/275*60).toFixed(2)," sec reading time."]}),Object(l.jsxs)("p",{children:[(n.split(" ").length/180*60).toFixed(2)," sec specking time."]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:n.length>0?n:"Enter something in the textbox above to preview it here"})]})]})}function b(e){return e.alert&&Object(l.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})}i.defaultProps={Title:"TextApp",About:"About"};var m=function(){var e=Object(c.useState)("light"),t=Object(s.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(null),r=Object(s.a)(o,2),m=r[0],h=r[1],u=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1500)};return Object(l.jsxs)("div",{style:{backgroundColor:"light"===a?"#ffe4c4":"#1f1616"},children:[Object(l.jsx)(i,{Title:"Textutils",mode:a,togglemode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#1f1616",document.title="Textutils - Dark mode",u("Enable to dark mode!","success"),setInterval((function(){document.title="This is Dark mode"}),1500),setInterval((function(){document.title="Textutils - Dark mode"}),1e3)):(n("light"),document.body.style.backgroundColor="#ffe4c4",document.title="Textutils - Light mode",u("Enable to Light mode!","success"))},About:"About us"}),Object(l.jsx)(b,{alert:m}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(d,{heading:"Enter the text to analyse below",showAlert:u,mode:a})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.56072873.chunk.js.map