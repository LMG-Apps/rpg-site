(this["webpackJsonprpg-site"]=this["webpackJsonprpg-site"]||[]).push([[0],{123:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(11),o=t.n(i),c=(t(99),t(16)),l=t(35),u=t(12),s=t(6),m=t(162),d=t(163),p=t(165),f=t(164),g=t(169),h=t(76),v=t.n(h),x=t(77),b=t.n(x),E=t(168),w=t(158),j=t(167),y=t(43),O=t.n(y),k=t(55),z=t(72),S=t.n(z),C=t(51),G=new C.a,W=S.a.create({baseURL:"http://localhost:3333"}),L=function(){var e=Object(k.a)(O.a.mark((function e(n,t){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={email:n,password:t},e.next=3,W.post("auth/sign-in",a);case 3:r=e.sent,console.log("Response: ",r),200===r.status&&(G.set("token",r.data.token),G.set("refreshToken",r.data.refreshToken));case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),M=function(){var e=Object(k.a)(O.a.mark((function e(n,t,a,r){var i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={username:t,email:n,password:a,passwordConfirmation:r},e.next=3,W.post("auth/sign-up",i);case 3:o=e.sent,console.log("RESPONSE: ",o);case 5:case"end":return e.stop()}}),e)})));return function(n,t,a,r){return e.apply(this,arguments)}}(),T=t(7);function D(){var e=Object(s.a)(['\n  font-family: "Grenze Gotisch", cursive;\n  font-size: 24px;\n  text-transform: none;\n  line-height: 17px;\n  color: white;\n  background-color: rgba(255, 85, 85, 1);\n  &:hover {\n    background-color: rgba(255, 85, 85, 0.9);\n  }\n']);return D=function(){return e},e}var A=Object(T.a)(w.a)(D()),B=function(){var e=Object(a.useState)(""),n=Object(c.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(""),l=Object(c.a)(o,2),u=l[0],s=l[1];return r.a.createElement(m.a,{container:!0,direction:"column",spacing:2},r.a.createElement("span",{style:{fontFamily:"Grenze Gotisch, cursive",fontSize:"40px",textAlign:"center",lineHeight:"30px",marginBottom:"10px"}},"Bem vindo"),r.a.createElement(m.a,{item:!0},r.a.createElement(j.a,{value:t,onChange:function(e){return i(e.target.value)},label:"Usu\xe1rio",variant:"outlined",fullWidth:!0})),r.a.createElement(m.a,{item:!0},r.a.createElement(j.a,{value:u,onChange:function(e){return s(e.target.value)},label:"Senha",variant:"outlined",type:"password",fullWidth:!0})),r.a.createElement(m.a,{item:!0},r.a.createElement(A,{variant:"contained",size:"large",onClick:function(){return L(t,u)},fullWidth:!0},"Entrar")))};function F(){var e=Object(s.a)(['\n  font-family: "Grenze Gotisch", cursive;\n  font-size: 24px;\n  text-transform: none;\n  line-height: 17px;\n  color: white;\n  background-color: rgba(255, 85, 85, 1);\n  \n  :hover {\n    background-color: rgba(255, 85, 85, 0.9);\n  }\n']);return F=function(){return e},e}var H=Object(T.a)(w.a)(F()),R=function(){var e=Object(a.useState)(""),n=Object(c.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(""),l=Object(c.a)(o,2),u=l[0],s=l[1],d=Object(a.useState)(""),p=Object(c.a)(d,2),f=p[0],g=p[1],h=Object(a.useState)(""),v=Object(c.a)(h,2),x=v[0],b=v[1];return r.a.createElement(m.a,{container:!0,direction:"column",spacing:2},r.a.createElement(m.a,{item:!0},r.a.createElement(j.a,{style:{marginTop:"15px"},value:t,onChange:function(e){return i(e.target.value)},label:"Email",variant:"outlined",type:"email",fullWidth:!0})),r.a.createElement(m.a,{item:!0},r.a.createElement(j.a,{label:"Nome de usu\xe1rio",value:u,onChange:function(e){return s(e.target.value)},variant:"outlined",fullWidth:!0})),r.a.createElement(m.a,{item:!0},r.a.createElement(j.a,{label:"Senha",value:f,onChange:function(e){return g(e.target.value)},variant:"outlined",type:"password",fullWidth:!0})),r.a.createElement(m.a,{item:!0},r.a.createElement(j.a,{label:"Confirmar senha",value:x,onChange:function(e){return b(e.target.value)},variant:"outlined",type:"password",fullWidth:!0})),r.a.createElement(m.a,{item:!0},r.a.createElement(H,{onClick:function(){return M(t,u,f,x)},variant:"contained",size:"large",fullWidth:!0},"Cadastrar")))};function I(){var e=Object(s.a)(["\n  padding: 20px;\n  width: min(320px, 100vw);\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.9);\n  /* font-family: 'Grenze Gotisch', cursive; font-size: 40px; */\n  width: min(330px, 100vw);\n\n  @media (max-width: 600px) {\n    margin: auto;\n  }\n"]);return I=function(){return e},e}var P=Object(T.a)(d.a)(I()),N=function(){var e=Object(a.useState)("signin"),n=Object(c.a)(e,2),t=n[0],i=n[1];return r.a.createElement(E.b,{injectFirst:!0},r.a.createElement(P,{elevation:3},r.a.createElement(B,null),r.a.createElement(f.a,{style:{marginTop:"15px"},button:!0,onClick:function(){i("signin"===t?"signup":"signin")}},r.a.createElement(g.a,{primary:"Ainda n\xe3o \xe9 um membro?"}),"signup"===t?r.a.createElement(v.a,null):r.a.createElement(b.a,null)),r.a.createElement(p.a,{in:"signup"===t},r.a.createElement(R,null))))},q=t(34),J=t.n(q);function U(){var e=Object(s.a)(["\n  padding: 20px;\n  height: 100vh;\n\n  /* Custom padding for mobile */\n  @media (max-width: 600px) {\n    padding: 10px;\n  }\n"]);return U=function(){return e},e}function V(){var e=Object(s.a)(["\n  /* Div size and position */\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  /* Background image settings */\n  background-image: url(",");\n  background-size: max(100vw, 1280px) max(100vh, 720px);\n  background-repeat: no-repeat;\n\n  overflow-x: hidden;\n"]);return V=function(){return e},e}var Y=T.a.div(V(),J.a),K=Object(T.a)(m.a)(U()),Q=function(){return r.a.createElement(Y,null,r.a.createElement(K,{container:!0,justify:"flex-end",alignItems:"center"},r.a.createElement(N,null)))},X=t(78),Z=t(79),$=t(83),_=t(84),ee=t(80),ne=t.n(ee),te=t(81),ae=t.n(te);function re(){var e=Object(s.a)(["\n  display: flex;\n  text-decoration: none;\n  color: white;\n\n  :hover {\n    text-decoration: ",";\n  }\n"]);return re=function(){return e},e}var ie=Object(T.a)(l.b)(re(),(function(e){return e.underline?"underline":"none"}));function oe(){var e=Object(s.a)(["\n  /* background-color: red; */\n  text-align: center;\n  border-radius: 20px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0px 10px;\n"]);return oe=function(){return e},e}function ce(){var e=Object(s.a)(["\n  width: 100%;\n  height: 85%;\n  border-radius: 20px 20px 0px 0px;\n  background-image: url(",");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  /* background-color: blue; */\n"]);return ce=function(){return e},e}function le(){var e=Object(s.a)(['\n  width: 220px;\n  height: 220px;\n\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 20px;\n  align-items: center;\n\n  font-family: "Grenze Gotisch", cursive;\n  color: rgba(225, 225, 225, 1);\n  font-size: 20px;\n  margin: 10px;\n  transition: 300ms;\n  :hover {\n    cursor: pointer;\n    transform: scale(1.05);\n  }\n']);return le=function(){return e},e}var ue=T.a.div(le()),se=T.a.div(ce(),(function(e){return e.image})),me=T.a.div(oe()),de=function(e){var n=e.empty,t=e.image;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(ie,{to:"/story/create"},r.a.createElement(ue,null,r.a.createElement(m.a,{container:!0,justify:"center",alignItems:"center",style:{height:"100%",width:"100%",borderRadius:"20px"}},r.a.createElement(m.a,{item:!0},r.a.createElement(ae.a,{style:{width:"64px",height:"64px"}}))))):r.a.createElement(l.c,{to:"/story/description",style:{textDecoration:"none"}},r.a.createElement(ue,null,r.a.createElement(se,{image:t}),r.a.createElement(me,null,"As historias de Veloster"))))},pe=t(166),fe=t(170);function ge(){var e=Object(s.a)(["\n  background-color: rgba(247, 157, 32, 1);\n\n  :hover {\n    filter: brightness(70%);\n    cursor: pointer;\n  }\n"]);return ge=function(){return e},e}var he=Object(T.a)(fe.a)(ge()),ve=function(e){var n=e.name,t=e.size;e.id;return r.a.createElement(ie,{to:"/user"},r.a.createElement(m.a,{container:!0,direction:"row-reverse",justify:"flex-start",spacing:1},r.a.createElement(m.a,{item:!0},"small"===t?null:r.a.createElement("h4",{style:{margin:0}},n)),r.a.createElement(m.a,{item:!0},r.a.createElement(pe.a,{overlap:"circle",color:"primary",variant:"dot"},r.a.createElement(he,{alt:"profile-pic"},n&&n[0])))))},xe=["Gustavo Lopes","Miguel Demarque","Luis Felipe","Nicolas Gen","Leonel P","Yves"],be=function(){return r.a.createElement(m.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"flex-start",spacing:2,style:{minWidth:"200px",width:"200px"}},r.a.createElement(m.a,{item:!0},r.a.createElement("h3",{style:{margin:0}},"Lista de amigos")),xe.map((function(e,n){return r.a.createElement(m.a,{item:!0,key:n},r.a.createElement(ve,{name:e}))})),r.a.createElement(m.a,{item:!0},r.a.createElement(ie,{to:"/"},r.a.createElement("h5",{style:{margin:0}},"Ver todos amigos"))))};function Ee(){var e=Object(s.a)(["\ndisplay: flex;\nflex-flow: row nowrap;\njustify-content: flex-start;\n"]);return Ee=function(){return e},e}function we(){var e=Object(s.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n\n  @media (max-width: 730px) {\n    justify-content: center;\n  }\n"]);return we=function(){return e},e}function je(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n"]);return je=function(){return e},e}function ye(){var e=Object(s.a)(["\n  padding-top: 80px;\n  background-color: rgb(22, 20, 26);\n  min-height: 100vh;\n  color: white;\n  overflow: hidden;\n  /* @media (max-width: 768px) {\n    padding-top: 60px;\n  } */\n"]);return ye=function(){return e},e}var Oe=function(e){Object(_.a)(t,e);var n=Object($.a)(t);function t(e){var a;return Object(X.a)(this,t),(a=n.call(this,e)).state={},a}return Object(Z.a)(t,[{key:"render",value:function(){var e=this.props.width;return r.a.createElement(ke,null,r.a.createElement(ze,null,r.a.createElement("h2",null,"Minhas historias"),r.a.createElement(Ce,null,r.a.createElement(Se,null,r.a.createElement(de,{image:ne.a}),r.a.createElement(de,{image:J.a}),r.a.createElement(de,{empty:!0}),r.a.createElement(de,{empty:!0}),r.a.createElement(de,{empty:!0}),r.a.createElement(de,{empty:!0}),r.a.createElement(de,{empty:!0}),r.a.createElement(de,{empty:!0})),e>730?r.a.createElement(be,null):null)))}}]),t}(r.a.Component),ke=T.a.div(ye()),ze=T.a.div(je()),Se=T.a.div(we()),Ce=T.a.div(Ee()),Ge=Oe;function We(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  /* background-color: blue; */\n  max-width: 300px;\n\n  @media (max-width: 600px) {\n    max-width: 220px;\n  }\n"]);return We=function(){return e},e}function Le(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  /* margin-right: 100px; */\n  /* background-color: red; */\n"]);return Le=function(){return e},e}function Me(){var e=Object(s.a)(["\n  display: flex;\n  background-color: white;\n  width: 128px;\n  height: 128px;\n  background-image: url(",");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  box-shadow: 0px 0px 1px 5px orange;\n\n  @media (max-width: 600px) {\n    width: 64px;\n    height: 64px;\n  }\n\n  border-radius: 50%;\n"]);return Me=function(){return e},e}function Te(){var e=Object(s.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n  /* background-color: red; */\n"]);return Te=function(){return e},e}var De=T.a.div(Te()),Ae=T.a.div(Me(),(function(e){return e.image})),Be=T.a.div(Le()),Fe=T.a.div(We()),He=function(){return r.a.createElement(De,null,r.a.createElement(Be,null,r.a.createElement("h1",null,"Miguel Demarque"),r.a.createElement("h4",null,"Floresta dos anoes"),r.a.createElement(Fe,null,r.a.createElement("h3",null,"Bio"),r.a.createElement("h5",null,"Ola sou o miguelOla sou o miguelOla sou o miguelOla sou o miguelOla sou o miguelOla sou o miguelOla sou o miguel"))),r.a.createElement(Ae,{image:J.a}))};function Re(){var e=Object(s.a)([""]);return Re=function(){return e},e}function Ie(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  cursor: pointer;\n\n  :hover {\n    filter: brightness(85%);\n  }\n"]);return Ie=function(){return e},e}function Pe(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  height: 40px;\n  border-bottom: 1px solid #ccc;\n"]);return Pe=function(){return e},e}function Ne(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Ne=function(){return e},e}var qe=T.a.div(Ne()),Je=T.a.div(Pe()),Ue=T.a.div(Ie()),Ve=(T.a.div(Re()),function(e){var n=e.children;return r.a.createElement(qe,null,r.a.createElement(Je,null,r.a.createElement(Ue,null,"Historias"),r.a.createElement(Ue,null,"Amigos")),n)});function Ye(){var e=Object(s.a)(["\n  display: flex;\n  padding-top: 20px;\n  width: 100%;\n  flex-direction: column;\n  /* background-color: red; */\n  margin: 0 25%;\n  max-width: 800px;\n\n  @media (max-width: 1200px) {\n    margin: 0 15%;\n    max-width: 600px;\n  }\n\n  @media (max-width: 600px) {\n    margin: 0 20px;\n    max-width: 600px;\n\n    h1 {\n      font-size: 20px;\n    }\n    h4 {\n      font-size: 12px;\n    }\n    h3 {\n      font-size: 15px;\n    }\n    h5 {\n      font-size: 11px;\n    }\n  }\n"]);return Ye=function(){return e},e}function Ke(){var e=Object(s.a)(["\n  display: flex;\n  padding-top: 80px;\n  background-color: rgb(22, 20, 26);\n  min-height: 100vh;\n  color: white;\n  justify-content: center;\n"]);return Ke=function(){return e},e}var Qe=T.a.div(Ke()),Xe=T.a.div(Ye()),Ze=function(){return r.a.createElement(Qe,null,r.a.createElement(Xe,null,r.a.createElement(He,null),r.a.createElement(Ve,null,r.a.createElement(de,null),r.a.createElement(de,{empty:!0}))))};function $e(){var e=Object(s.a)(["\n  background-color: rgb(22, 20, 26);\n  min-height: 100vh;\n  color: white;\n"]);return $e=function(){return e},e}var _e=T.a.div($e()),en=function(){return r.a.createElement(_e,null,r.a.createElement("h1",null,"StoryCreationPage"))},nn=t(82),tn=t.n(nn);function an(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]);return an=function(){return e},e}function rn(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return rn=function(){return e},e}function on(){var e=Object(s.a)(["\n  /* Makes div float */\n  position: fixed;\n  /* Makes div stay at the top */\n  top: 0px;\n  /* Makes div stay in front of almost everything else in the screen */\n  z-index: 9998;\n  /* Dimensions */\n  height: 80px;\n  width: 100%;\n  /* Defines itens arrangement in the div */\n  display: flex;\n  justify-content: space-between;\n  /* Styling */\n  color: white;\n  padding: 0 30px;\n  background-color: rgb(34, 34, 44);\n"]);return on=function(){return e},e}var cn=T.a.div(on()),ln=T.a.div(rn()),un=T.a.div(an()),sn=function(e){var n=e.width;return r.a.createElement(cn,null,r.a.createElement(ie,{to:"/dashboard"},r.a.createElement(ln,null,r.a.createElement("img",{alt:"site-logo",src:tn.a,width:"32",height:"38"}),r.a.createElement("h2",{style:{margin:"0",marginLeft:"10px"}},"RPG Storytelling"))),r.a.createElement(un,null,r.a.createElement(ve,{name:"Lopao del Morro",size:n<600?"small":"default"})))},mn=new C.a;var dn=function(){var e=Object(a.useState)(window.innerWidth),n=Object(c.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(window.innerHeight),s=Object(c.a)(o,2),m=(s[0],s[1]),d=Object(a.useState)(!1),p=Object(c.a)(d,2),f=p[0],g=p[1];Object(a.useEffect)((function(){mn.get("token")&&g(!0)})),Object(a.useEffect)((function(){return console.log("all cookies",mn.getAll()),mn.addChangeListener(v),window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}}),[]);var h=function(e){console.log("innerwidth: ",e.currentTarget.innerWidth),console.log("innerheight: ",e.currentTarget.innerHeight),i(e.currentTarget.innerWidth),m(e.currentTarget.innerHeight)},v=function(e){console.log(e)};return r.a.createElement(l.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/"},f?r.a.createElement(u.a,{to:"/dashboard"}):r.a.createElement(Q,null)),r.a.createElement(u.b,{path:"/dashboard"},r.a.createElement(sn,{width:t}),r.a.createElement(Ge,{width:t})),r.a.createElement(u.b,{path:"/user"},r.a.createElement(sn,{width:t}),r.a.createElement(Ze,null)),r.a.createElement(u.b,{path:"/story/create"},r.a.createElement(en,null))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(dn,null)),document.getElementById("root"))},34:function(e,n,t){e.exports=t.p+"static/media/campire1.4c25125f.jpeg"},80:function(e,n,t){e.exports=t.p+"static/media/campire2.85cb1f0d.jpeg"},82:function(e,n,t){e.exports=t.p+"static/media/Logo2.33a29fe5.png"},94:function(e,n,t){e.exports=t(123)},99:function(e,n,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.b84ad92a.chunk.js.map