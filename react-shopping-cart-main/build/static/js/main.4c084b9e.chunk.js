(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(5),c=n.n(r),o=n(3),s=(n(12),n(6));var l=function(e){var t=e.products.map(function(e,t){return i.a.createElement("li",{key:t,onClick:function(){n(e)}},"".concat(e.name," - $ ").concat(e.price))}),n=function(t){e.setCart([].concat(Object(s.a)(e.cartList),[t]))};return i.a.createElement("div",{className:"AllTheThings"},i.a.createElement("h2",null,"Put these in your cart!"),i.a.createElement("ul",null,t))};var p=function(e){var t=e.cartList.map(function(e,t){return i.a.createElement("li",{key:t,onClick:function(){n(e,t)}},"".concat(e.name," - $ ").concat(e.price))}),n=function(t,n){console.log(n);var a=e.cartList.filter(function(e,t){return console.log(t),n!==t});e.setCart(a)};return i.a.createElement("div",{className:"MyShoppingCart"},i.a.createElement("h2",null,"Your Cart!"),t)};var u=function(e){return i.a.createElement("div",{className:"Form"},i.a.createElement("h2",null,"Form goes here"))},m=[{name:"allen wrench",price:2.99,description:"handy tool"},{name:"cornucopia",price:5.99,description:"festive holiday decoration"},{name:"banana",price:.99,description:"full of potassium"},{name:"guillotine (cigar)",price:10.59,description:"behead your stub"},{name:"jack-o-lantern",price:3.99,description:"spooky seasonal fun"},{name:"doggie treat (box)",price:5.99,description:"fido loves 'em"},{name:"egg separator",price:3.99,description:"it separates yolks from whites"},{name:"LED lightbulb",price:6.55,description:"It's super-efficient!"},{name:"owl pellets",price:3.99,description:"Don't ask what they used to be."},{name:"flag",price:5.99,description:"catches the breeze"},{name:"hair brush",price:6.99,description:"fine boar bristles"},{name:"iridium (one gram)",price:19.36,description:"corrosion-resistant metal"},{name:"quark",price:.01,description:"Very small"},{name:"turtleneck",price:19.99,description:"available in black and slightly-darker black"},{name:"kaleidoscope",price:8.25,description:"tube with moving plastic pieces inside"},{name:"mitt (leather)",price:15,description:"regulation sized"},{name:"nothing",price:10,description:"Hey, if you pay us, we won't ask any questions."},{name:"violin",price:2e3,description:"Talk about a JS fiddle..."},{name:"yoyo",price:1,description:"We had to pull some strings to get this one in."},{name:"pincushion",price:1.99,description:"You'll get 'stuck' on it"}];function d(){var e=Object(a.useState)(m),t=Object(o.a)(e,2),n=t[0],r=(t[1],Object(a.useState)([])),c=Object(o.a)(r,2),s=c[0],d=c[1];return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Big Time Shopping"),i.a.createElement(u,null),i.a.createElement("div",{className:"products"},i.a.createElement(l,{products:n,setCart:d,cartList:s}),i.a.createElement(p,{cartList:s,setCart:d})))}var h=document.getElementById("root");c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),h)},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.4c084b9e.chunk.js.map