(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){},11:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=a(1);var i=function(t){var e=t.lightData.map(function(e,a){return r.a.createElement("button",{key:a,onClick:function(){t.dispatch({lightState:e.name,lightCode:e.color}),t.dispatchCount({type:"CHANGE",payload:1})}},e.name)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"controls"},e))},u=[{name:"off",color:"rgba(0,0,0,1)"},{name:"low",color:"rgba(0,0,0,.6)"},{name:"med",color:"rgba(0,0,0,.4)"},{name:"high",color:"rgba(0,0,0,.1)"}];var d=function(t){var e={width:"100px",height:"100px",borderRadius:"50%",border:"1px solid",background:t.currentLightState.lightCode};return r.a.createElement("div",{style:e})};function h(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){t.dispatchCount({type:"CHANGE",payload:1})}},"+"),r.a.createElement("button",{onClick:function(){t.dispatchCount({type:"CHANGE",payload:-1})}},"-"),r.a.createElement("button",{onClick:function(){t.dispatchCount({type:"SET",payload:0})}},"RESET")),r.a.createElement("h2",null,"Current Click Count: ",t.currentClickState))}console.log("lightData",u);var g=function(t,e){switch(e.lightState){case"off":return{lightState:"off",lightCode:"rgba(0,0,0,1)"};case"low":return{lightState:"low",lightCode:"rgba(0,0,0,.6)"};case"med":return{lightState:"medium",lightCode:"rgba(0,0,0,.4)"};case"high":return{lightState:"high",lightCode:"rgba(0,0,0,.1)"};default:return t}},s=function(t,e){switch(e.type){case"CHANGE":return t+e.payload;case"SET":return e.payload;default:return t}};var m=function(){var t=Object(n.useReducer)(g,{lightState:"off",lightCode:"rgba(0,0,0,1)"}),e=Object(l.a)(t,2),a=e[0],c=e[1],o=Object(n.useReducer)(s,0),m=Object(l.a)(o,2),p=m[0],C=m[1];return r.a.createElement("div",{className:"App"},r.a.createElement(i,{lightData:u,dispatch:c,dispatchCount:C}),r.a.createElement(h,{dispatchCount:C,currentClickState:p}),r.a.createElement(d,{currentLightState:a}))},p=(a(10),document.getElementById("root"));o.a.render(r.a.createElement(m,null),p)},4:function(t,e,a){t.exports=a(11)}},[[4,1,2]]]);
//# sourceMappingURL=main.898d8e5c.chunk.js.map